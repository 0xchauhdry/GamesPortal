using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FinalProject
{
    public partial class WebForm3 : System.Web.UI.Page
    {
        public static string UserName;
        protected void Page_Load(object sender, EventArgs e)
        {
            UserName = Session["username"].ToString();
        }

        [WebMethod]
        public static void UpdateDataSI(string time, string result, string tblname)
        {
            new DataBase().AddData(UserName, time, result, tblname);
        }
    }
}