using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;

namespace FinalProject
{
    public partial class Admin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["adminusername"] == null && Session["username"] == null)
            {
                Response.Redirect("LogInPage.aspx");
            }
        }

        protected void LogOut(object sender, EventArgs e)
        {
            Session.Clear();
            Response.Redirect("LogInPage.aspx");
        }

        [WebMethod]
        public static string GetMineData()
        {
            var data = new DataBase().getDatatable(1);
            return new DataBase().JsonConverter(data);
        }

        [WebMethod]
        public static string GetSpaceData()
        {
            var data = new DataBase().getDatatable(2);
            return new DataBase().JsonConverter(data);
        }

        [WebMethod]
        public static string GetWhacData()
        {
            var data = new DataBase().getDatatable(3);
            return new DataBase().JsonConverter(data);
        }
    }
}