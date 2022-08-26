using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace FinalProject
{
    public partial class SignUpPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["adminusername"] != null)
            {
                Response.Redirect("AdminPage.aspx");
            }

            if (Session["username"] != null)
            {
                Response.Redirect("Default.aspx");
            }
        }

        protected void SignUp(object sender, EventArgs e)
        {
            string username = userName.Text;
            string passWord = password.Text;
            string Email = email.Text;
            string Name = name.Text;

            DataTable data = new DataBase().getDataTable(username);

            if (data.Rows.Count > 0)
            {
                ClientScript.RegisterStartupScript(this.GetType(), "ssss", "<script>alert('this username is not available!')</script>");
            }
            else
            {
                new DataBase().AddUser(Name, Email, username, passWord);
                Response.Redirect("LogInPage.aspx");
            }
        }
    }
}