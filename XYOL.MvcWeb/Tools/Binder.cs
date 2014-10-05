using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace XYOL.MvcWeb.Tools
{
    public class FormRequestToDynamicBinder : IModelBinder
    {
        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            var request = controllerContext.HttpContext.Request;
            var sb = new StringBuilder();
            sb.Append("{");
            
            //{name:"xxx",age:"yyy"};
            for (var i=0;i<request.Form.AllKeys.Length;i++)
            {
                var name = request.Form.AllKeys[i];
                var value = request[name];
                if (i != 0)
                {
                    sb.Append(",");
                }
                sb.Append(name + ":\"" + value + "\"");
            }
            sb.Append("}");
            var json = sb.ToString();
            if (string.IsNullOrEmpty(json))
                return json;
            return JsonConvert.DeserializeObject<dynamic>(json);
        }
    }
    public class JsonBinder<T> : IModelBinder
    {
        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            var reader = new StreamReader(controllerContext.HttpContext.Request.InputStream);
            var json = reader.ReadToEnd();
            if (string.IsNullOrEmpty(json))
                return json;
            return JsonConvert.DeserializeObject<T>(json);
        }
    }
}