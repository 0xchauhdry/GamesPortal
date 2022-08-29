<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="FinalProject.WebForm1" %>
<asp:Content ID="Home" ContentPlaceHolderID="MainContent" runat="server">
    <div class="jumbotron margintop">
        <h1>Play Games</h1>
        <p class="lead">Here are three very fun, arcade games which you can play right now.</p>
    </div>

    <div class="row">
        <div class="col-md-4 text-center">
            <h2>Minesweeper</h2>
            <p>
                Minesweeper is a logic puzzle video game, it a field that contains certain number of mines. 
                The goal is to clear the board without hitting any mines, wiht the help of neighboring mine numbers displayed.
            </p>
            <img src="img/minesweeper.jfif" alt="minesweeper" width="100%">
            
            <p>
                <a class="btn btn-default" href="./Minesweeper.aspx">Lets Play</a>
            </p>
        </div>
        <div class="col-md-4 text-center">
            <h2>Whack A Mole</h2>
            <p>
                Whac-A-Mole is an arcade game, which typical consists of a mole which tries to move as fast as he can and 
                your goal is to hit it as many time as you can with in 60 seconds
            </p>
            <img src="img/whackamole.jfif" alt="whackamole" width="100%">
            <p>
                <a class="btn btn-default" href="./Whackamole.aspx">Lets Play</a>
            </p>
        </div>
        <div class="col-md-4 text-center">
            <h2>Space Invader</h2>
            <p>
                Space Invader is very famous 80's arcade shooting game where you destroy the invader ships and protect your Space. Invaders was the first
                fixed shooter and set the template for the shoot 'em up genre.
            </p>
            <img src="img/spaceinvader.jfif" alt="spaceinvader" width="100%">
            <p>
                <a class="btn btn-default" href="./Spaceinvader.aspx">Lets Play</a>
            </p>
        </div>
    </div>
</asp:Content>
