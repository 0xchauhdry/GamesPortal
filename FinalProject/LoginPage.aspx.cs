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
            if (Session["adminusername"] != null && Session["adminpassword"] != null)
            {
                Response.Redirect("Default.aspx");
            }

            if (Session["accountantusername"] != null && Session["accountantpassword"] != null)
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
                Response.Write("<script defer>alert('You want to Login as Admin or User? Please Select one option to proceed')</script>");
            }

            if (usrStatus.SelectedValue == "Admin")
            {
                if (username != "chauhdry")
                {
                    Response.Write("<script defer>alert('username is not correct!')</script>"); //works great
                }
                else if (passWord != "jinnah")
                {
                    Response.Write("<script defer>alert('password is not correct!')</script>"); //works great
                }
                else
                {
                    Session["adminusername"] = username;
                    Session["adminpassword"] = passWord;
                    Response.Redirect("Default.aspx");
                }
            }

            if (usrStatus.SelectedValue == "User")
            {
                DataTable data = new DataBase().Authentication(username);

                if (data.Rows.Count > 0)
                {
                    foreach (DataRow row in data.Rows)
                    {
                        if (passWord != row["password"].ToString())
                        {
                            Response.Write("<script>alert('password is not correct!')</script>"); //works great
                        }
                        else
                        {
                            Session["accountantusername"] = username;
                            Session["accountantpassword"] = passWord;
                            Response.Redirect("Default.aspx");
                        }
                    }
                }
                else
                {
                    Response.Write("<script>alert('username is not correct!')</script>");
                }
            }
        }
    }
}