<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Whackamole.aspx.cs" Inherits="FinalProject.WebForm4" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <hr>
</asp:Content>
<asp:Content ID="Whackamole" ContentPlaceHolderID="MainContent" runat="server">
    <section >
        <h1>Whack A Mole</h1>
        <asp:Button id="btnStart" runat="server" Text="Start" Height="30px" Width="50px"/>
        <hr>
        <div>
            <h2 class="inline">
            Score:<span id="result">0</span>
            </h2>
            <h2 class="inline right-margin">
            Time left:<span id="time-left">60</span>
            </h2>
        </div>
        <br>

        <div id="grid"></div>
    </section>
</asp:Content>
