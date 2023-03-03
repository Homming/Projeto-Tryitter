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
        if (context.Exception is StudentNotFound)
        {
            statusCode = (int)HttpStatusCode.NotFound;
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