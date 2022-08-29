<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Admin.aspx.cs" Inherits="FinalProject.Admin" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title> Admin Page </title>
    <link href="Style/admin.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
</head>
<body>
    <form id="formAdmin" runat="server">
        <div class="floatdiv">
                    <asp:LinkButton ID="LogOutBtn" runat="server" class="btn btn-primary" onclick="LogOut">Log Out</asp:LinkButton>
        </div>
        <div id="admin-page">
            <div class="admin-minesweeper">
                <h1>Minesweeper</h1>
                <br>
                <table id="myMineTable"> 
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Name</th>
                            <th>Rating Points</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="admin-spaceinvader">
                <h1>SpaceInvader</h1>
                <br>
                <table id="mySpaceTable"> 
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Name</th>
                            <th>Rating Points</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="admin-whackamole">
                <h1>Whackamole</h1>
                <br>
                <table id="myWhacTable"> 
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Name</th>
                            <th>Rating Points</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
        
    </form>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script src="Scripts/admin.js"></script>
</body>
</html>
