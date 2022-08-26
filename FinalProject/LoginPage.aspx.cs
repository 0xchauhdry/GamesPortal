using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
using System.Web.Script.Serialization;

namespace FinalProject
{
    public partial class WebForm7 : System.Web.UI.Page
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

        protected void LogIn(object sender, EventArgs e)
        {
            string username = userName.Text;

            string passWord = password.Text;
            if (usrStatus.SelectedValue == "Login As")
            {
                ClientScript.RegisterStartupScript(this.GetType(), "ssss", "<script>alert('You want to Login as Admin or User? Please Select one option to proceed')</script>");
            }

            if (usrStatus.SelectedValue == "Admin")
            {
                if (username != "ahmad")
                {
                    ClientScript.RegisterStartupScript(this.GetType(), "ssss", "<script>alert('username is not correct!')</script>");
                }
                else if (passWord != "chauhdry")
                {
                    ClientScript.RegisterStartupScript(this.GetType(), "ssss", "<script>alert('password is not correct!')</script>");
                }
                else
                {
                    Session["adminusername"] = username;
                    Response.Redirect("AdminPage.aspx");
                }
            }

            if (usrStatus.SelectedValue == "User")
            {
                DataTable data = new DataBase().getDataTable(username);

                if (data.Rows.Count > 0)
                {
                    foreach (DataRow row in data.Rows)
                    {
                        if (passWord != row["password"].ToString())
                        {
                            ClientScript.RegisterStartupScript(this.GetType(), "ssss", "<script>alert('password is not correct!')</script>");
                        }
                        else
                        {
                            Session["username"] = username;
                            Response.Redirect("Default.aspx");
                        }
                    }
                }
                else
                {
                    ClientScript.RegisterStartupScript(this.GetType(), "ssss", "<script>alert('username is not correct!')</script>");
                }
            }
        }
    }
}