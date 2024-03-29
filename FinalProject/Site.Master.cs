﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FinalProject
{
    public partial class Site : System.Web.UI.MasterPage
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
    }
}