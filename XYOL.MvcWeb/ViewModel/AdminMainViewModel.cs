using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace XYOL.MvcWeb.ViewModel
{
    public class AdminMainViewModel
    {
        public List<Category_> Categories{ get; set; }

        public static List<Category_> All { get; set; }

        public class Category_
        {
            public Category_(MvcWeb.Category c)
            {
                Id = c.Id;
                Name = c.Name;
                FId = c.FId;
            }

            public List<Category_> ChildrenCategories
            {
                get { return All.Where(c => c.FId == Id).ToList(); }
            }
            public int Id { get; set; }
            public string Name { get; set; }
            public int? FId { get; set; }
        }
        public static string Get_Menu(IEnumerable<AdminMainViewModel.Category_> list)
        {
            var sb = new StringBuilder();

            foreach (var category in list)
            {
                sb.Append("<li>");
                if (category.ChildrenCategories == null || category.ChildrenCategories.Count == 0)
                {
                    sb.Append(string.Format("<span class='category' data-id='{0}'>{1}</span>", category.Id,
                                            category.Name));
                }
                else
                {
                    sb.Append("<span>"+category.Name+"</span>");
                    sb.Append("<ul>");
                    sb.Append(Get_Menu(category.ChildrenCategories));
                    sb.Append("</ul>");
                }
                sb.Append("</li>");
            }
            return sb.ToString();
        }
    }
}