<%@ Page Title="Minesweeper" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Minesweeper.aspx.cs" Inherits="FinalProject.WebForm2" %>
<asp:Content ID="head1" ContentPlaceHolderID="head" runat="server">
    <hr>
</asp:Content>
<asp:Content ID="Minesweeper" ContentPlaceHolderID="MainContent" runat="server">
    
    <section >
        <h1>Minesweeper</h1>
        <asp:Button id="btnStart" runat="server" OnClientClick="javascript: return startMinesweeper()" Text="Start" Height="30px" Width="50px"/>
        <hr>

        <div>
            <h2 class="inline">
                Flags:<span id="flags">0</span>
            </h2>
            <h2 class="inline right-margin">
                Time:<span id="timer">00</span>
            </h2>
            <h2 class="inline newbtn">
                Start
            </h2>
        </div>
        <br>

        <div id="pnlMineField"></div>
    </section>

</asp:Content>
