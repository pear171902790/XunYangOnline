using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using XYOL.MvcWeb.ViewModel;

namespace XYOL.MvcWeb.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Layout()
        {
            var vm = new HomeLayoutViewModel() {Title = "旬阳之窗"};
            return PartialView(vm);
        }

        //
        // GET: /Home/
        public ActionResult Index()
        {
            var vm = new HomeIndexViewModel() {Test = "aaa"};
            return View(vm);
        }
        
        public ActionResult Part1()
        {
            return PartialView();
        }

        public ActionResult Part2()
        {
            return PartialView();
        }

        public ActionResult Part3()
        {
            return PartialView();
        }

    }
}
