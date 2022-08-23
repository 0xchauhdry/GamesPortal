<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Spaceinvader.aspx.cs" Inherits="FinalProject.WebForm3" %>
<asp:Content ID="head2" ContentPlaceHolderID="head" runat="server">
    <hr>
</asp:Content>
<asp:Content ID="SpaceInvader" ContentPlaceHolderID="MainContent" runat="server">
    <section >
        <h1>Space Invader</h1>
        <asp:Button id="btnStart" runat="server" Text="Start" Height="30px" Width="50px"/>
        <hr>

        <h2> Score: <span id="result" >0</span>
        </h2><br>

        <div id="Space-grid"></div>
    </section>
</asp:Content>
