<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="LoginPage.aspx.cs" Inherits="FinalProject.WebForm7" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>LogIn</title>
    <link href="Style/login.css" rel="stylesheet" />
</head>
<body>
    <form id="LoginForm" runat="server">
        <div id="container">
            <h1>Log In</h1>
            <p>Enter your detail below to continue</p>

            <asp:DropDownList id="usrStatus" CssClass="field" runat="server">
                <asp:ListItem id="fchild" runat="server" text="Login As"></asp:ListItem>
                <asp:ListItem runat="server" Text="Admin"></asp:ListItem>
                <asp:ListItem runat="server" Text="User"></asp:ListItem>
            </asp:DropDownList>

            <asp:textbox id="userName" CssClass="field" runat="server" Placeholder="Username" ></asp:textbox>

            <asp:textbox id="password" CssClass="field" runat="server" placeholder="Password" type="password" ></asp:textbox>
            
            <asp:button id="loginBtn" CssClass="btn" runat="server" onclick="LogIn" text="LogIn" />
     
            <a class="linkcenter" href="/SignUpPage.aspx">Need to sign up? Click here</a>
        </div>
        
    </form>
</body>
</html>
