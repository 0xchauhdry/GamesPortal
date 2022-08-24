<%@ Page Title="Minesweeper" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Minesweeper.aspx.cs" Inherits="FinalProject.WebForm2" %>
<asp:Content ID="head1" ContentPlaceHolderID="head" runat="server">
    <hr>
</asp:Content>
<asp:Content ID="Minesweeper" ContentPlaceHolderID="MainContent" runat="server">
    
    <section >
        <h1>Minesweeper</h1>
        <hr>

        <div>
            <h2 class="inline">
                Flags:<span id="flags">0</span>
            </h2>
            <h2 class="inline right-margin">
                Time:<span id="timerM">00</span>
            </h2>
            <h2 class="inline newbtn startBtnM">
                Start
            </h2>
        </div>
        <br>

        <div id="pnlMineField"></div>
    </section>

</asp:Content>
