﻿<%@ Page Title="Spaceinvader" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Spaceinvader.aspx.cs" Inherits="FinalProject.WebForm3" %>
<asp:Content ID="head2" ContentPlaceHolderID="head" runat="server">
    <hr class="margintop">
</asp:Content>
<asp:Content ID="SpaceInvader" ContentPlaceHolderID="MainContent" runat="server">
    <section >
        <h1>Space Invader</h1>
        <hr>

        <div>
            <h2 class="inline">
                Score:<span id="result">0</span>
            </h2>
            <h2 class="inline right-margin">
                Time: <span id="timerS">00</span>
            </h2>
            <h2 class="inline newbtn startBtnS">
                Start
            </h2>
        </div>
        <br>

        <div id="Space-grid"></div>
    </section>
</asp:Content>
