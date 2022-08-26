using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace FinalProject
{
    public partial class WebForm2 : System.Web.UI.Page
    {
        public static string UserName;
        protected void Page_Load(object sender, EventArgs e)
        {
            UserName = Session["username"].ToString();
        }



        [WebMethod]
        public static void UpdateData(int time, string result, int score)
        {
            int ID = 1;
            DataTable data = new DataBase().getDataTable(UserName);
            foreach (DataRow row in data.Rows)
            {
                ID = Convert.ToInt32(row["ID"]);
            }

            new DataBase().AddData(ID,1,time,result,score);
        }
    }
}