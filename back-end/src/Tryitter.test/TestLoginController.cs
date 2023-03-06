using System.Net;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using FluentAssertions;
using Tryitter.Controllers;
using Xunit;
using System.Text;

namespace SchoolLogin.Test
{
  public class TestLoginController : IClassFixture<WebApplicationFactory<Program>>
  {
    private readonly WebApplicationFactory<Program> _factory;

    public TestLoginController(WebApplicationFactory<Program> factory)
    {
      _factory = factory;
    }

    [Theory(DisplayName = "Teste para login de pessoa com Status OK")]
    [InlineData("aceleracao@voale.com", "123456")]
    public async Task TestLoginSuccess(string email, string password)
    {
      var student = new LoginRequest
      {
        Email = email,
        Password = password
      };

      var json = JsonConvert.SerializeObject(student);
      var body = new StringContent(json, Encoding.UTF8, "application/json");
      var client = _factory.CreateClient();
      var httpResponse = await client.PostAsync("/login", body);

      httpResponse.StatusCode.Should().Be(HttpStatusCode.OK);
      var responseContent = await httpResponse.Content.ReadAsStringAsync();
      responseContent.Should().NotBeNullOrEmpty();
    }

    [Theory(DisplayName = "Teste para login de pessoa com Status Not Found")]
    [InlineData("nao@cadastrado.co", "123")]
    public async Task TestLoginNotFoundFail(string email, string password)
    {
      var student = new LoginRequest
      {
        Email = email,
        Password = password
      };

      var json = JsonConvert.SerializeObject(student);
      var body = new StringContent(json, Encoding.UTF8, "application/json");
      var client = _factory.CreateClient();
      var httpResponse = await client.PostAsync("/login", body);

      httpResponse.StatusCode.Should().Be(HttpStatusCode.NotFound);
    }

    [Theory(DisplayName = "Teste para login de pessoa com Status Bad Request")]
    [InlineData("nao@cadastrado.co", "")]
    public async Task TestLoginBadRequestFail(string email, string password)
    {
      var student = new LoginRequest
      {
        Email = email,
        Password = password
      };

      var json = JsonConvert.SerializeObject(student);
      var body = new StringContent(json, Encoding.UTF8, "application/json");
      var client = _factory.CreateClient();
      var httpResponse = await client.PostAsync("/login", body);

      httpResponse.StatusCode.Should().Be(HttpStatusCode.BadRequest);
    }
  }
}