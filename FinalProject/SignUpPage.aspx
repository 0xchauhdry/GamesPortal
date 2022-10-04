<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SignUpPage.aspx.cs" Inherits="FinalProject.SignUpPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>SignUp</title>
    <link href="Style/login.css" rel="stylesheet" />
</head>
<body>
    <form id="SigninForm" runat="server">
        <div id="container">
            <h1>Sign Up</h1>
            <p>Enter your detail below to sign up</p>

            <asp:textbox id="name" CssClass="field" runat="server" Placeholder="Your Name"></asp:textbox>
            <asp:RequiredFieldValidator runat="server" id="reqName" controltovalidate="name" errormessage="Please enter a name!" />

            <asp:textbox id="email" CssClass="field" runat="server" placeholder="Email (i.e abc@xyz.com)" type="email" ></asp:textbox>
            <asp:RequiredFieldValidator runat="server" id="reqEmail" controltovalidate="email" errormessage="Please enter an email!" />

            <asp:textbox id="userName" CssClass="field" runat="server" Placeholder="Username" ></asp:textbox>
            <asp:RequiredFieldValidator runat="server" id="reqUsername" controltovalidate="userName" errormessage="Please enter a username!" />

            <asp:textbox id="password" CssClass="field" runat="server" placeholder="Password" type="password" ></asp:textbox>
            <asp:RequiredFieldValidator runat="server" id="reqPass" controltovalidate="password" errormessage="Please enter a password!" />
            
            <asp:button id="signUpBtn" CssClass="btn" runat="server" onclick="SignUp" text="Sign Up" />

            <a class="linkcenter" href="./LoginPage.aspx"> Already Signed Up? Log In here</a>
        </div>
    </form>
</body>
</html>
