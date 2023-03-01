using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

public class ExceptionFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        if (context.ExceptionHandled)
        {
            return;
        }

        int statusCode = (int)HttpStatusCode.InternalServerError;
        if (context.Exception is ArgumentNullException)
        {
            statusCode = (int)HttpStatusCode.BadRequest;
        }
        else if (context.Exception is InvalidOperationException)
        {
            statusCode = (int)HttpStatusCode.Conflict;
        }

        var response = new
        {
            Error = context.Exception.Message,
            StackTrace = context.Exception.StackTrace
        };

        context.Result = new ObjectResult(response)
        {
            StatusCode = statusCode
        };

        context.ExceptionHandled = true;
    }
}