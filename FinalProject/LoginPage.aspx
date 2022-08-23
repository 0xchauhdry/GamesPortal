<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="LoginPage.aspx.cs" Inherits="FinalProject.WebForm5" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <hr>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="container">
        <h1>Login</h1>
        <p>Enter your detail below to continue</p>

        <asp:DropDownList id="EmpStatus" runat="server">
            <asp:ListItem id="fchild" runat="server" text="Login As"></asp:ListItem>
            <asp:ListItem runat="server" Text="Admin"></asp:ListItem>
            <asp:ListItem runat="server" Text="Accountant"></asp:ListItem>
        </asp:DropDownList>

        <asp:textbox id="userName" runat="server" Placeholder="UserName" ></asp:textbox>

        <asp:textbox id="password" runat="server" placeholder="Password" type="password" ></asp:textbox>
            

        <%--<asp:button id="button" runat="server" OnClientClick="javascript: return hiddenval()" onclick="LogIn" text="LogIn" />--%>
     </div>
</asp:Content>
