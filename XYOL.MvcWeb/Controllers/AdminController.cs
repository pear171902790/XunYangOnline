using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using XYOL.MvcWeb.Tools;
using XYOL.MvcWeb.ViewModel;

namespace XYOL.MvcWeb.Controllers
{
    public class AdminController : Controller
    {
        private XYOLContainer _container=new XYOLContainer();
        //
        // GET: /Admin/
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(AdminLoginViewModel user)
        {
            if (user.Email == "lc@qq.com" && user.Password == "147258369")
            {
                return new RedirectResult(Url.Action("Main"));
            }
            user.Message= "用户名或密码不对!";
            return View(user);
        }

        public ActionResult Main()
        {
            var categories = _container.Categories.ToList();

            var list = new List<AdminMainViewModel.Category_>();
            categories.ForEach(c => list.Add(new AdminMainViewModel.Category_(c)));
            AdminMainViewModel.All = list;
            var vm = new AdminMainViewModel {Categories = list.Where(c => c.FId == null).ToList()};

            return View(vm);
        }

        public ActionResult Save_New_Category([ModelBinder(typeof(FormRequestToDynamicBinder))]dynamic category)
        {
            var category_ = new Category()
                {
                    Name = Convert.ToString(category.new_category_name.Value),
                    FId = Convert.ToInt32(category.new_category_fid.Value)
                };
            _container.Categories.Add(category_);
            _container.SaveChanges();
            return new RedirectResult(Url.Action("Main"));
        }



        public ActionResult Test()
        {
            return View();
        }

       
    }
}
