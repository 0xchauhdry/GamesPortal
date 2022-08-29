using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;
using System.Web.Script.Serialization;

namespace FinalProject
{
    public class DataBase
    {
        static string conString = @"Server= CMDLHRLT938; Data Source=CMDLHRLT938;Initial Catalog=PortalData;Integrated Security=True";
        SqlConnection conn = new SqlConnection(conString);

        public DataTable getDataTable(string username)
        {
            conn.Open();
            string query = "SELECT * FROM [Users] WHERE Username='" + username + "';";
            SqlDataAdapter SDA = new SqlDataAdapter(query, conn);
            DataTable dt = new DataTable();
            SDA.Fill(dt);
            conn.Close();
            return dt;
        }

        public DataTable getDatatable(int gameid) 
        { 
            conn.Open();
            string query = "select [users].[username] as [Name],SUM(GameData.RatingPoints) as Rating from GameData join users on GameData.UserID = users.id where gamedata.gameid = "+ gameid + " group by[users].[username] order by Rating DESC; ";
            SqlDataAdapter SDA = new SqlDataAdapter(query, conn);
            DataTable dt = new DataTable();
            SDA.Fill(dt);
            conn.Close();
            return dt;
        }

        public void AddUser(string name, string email, string username, string pass)
        {
            conn.Open();
            string query = "INSERT INTO [Users] VALUES('" + name + "','" + email + "','" + username + "','" + pass + "');";
            SqlDataAdapter SDA = new SqlDataAdapter(query, conn);
            SDA.SelectCommand.ExecuteNonQuery();
            conn.Close();
        }

        public void AddData(int userId, int gameId, int time, string result, int score)
        {
            conn.Open();
            DateTime now = DateTime.Now;
            string timeNow = now.ToString("hh:mm:ss tt");
            string dateNow = now.ToString("MMMM dd, yyyy");
            double ratingPoints;
            if (result == "Won")
            {
                ratingPoints = 5.5 + (1 - ((time)/ 999.0)) * 3.5 + (1 - (score / 100.0)) * 1;
            } else
            {
                ratingPoints = -6 - (1 - ((time) / 999.0)) * 3.5 + (1 - (score / 100.0)) * 1;
            }
            string query = "INSERT INTO GameData (UserID,GameID,[Date],[Start Time],[Time],result,score,RatingPoints) VALUES(" + userId + "," + gameId + ",'" + dateNow + "','" + timeNow + "','" + time + "','" + result + "','" + score + "','" + ratingPoints + "');";
            SqlDataAdapter SDA = new SqlDataAdapter(query, conn);
            SDA.SelectCommand.ExecuteNonQuery();
            conn.Close();
        }

        public void AddDataSI(int userId, int gameId, int time, string result, int score)
        {
            conn.Open();
            DateTime now = DateTime.Now;
            string timeNow = now.ToString("hh:mm:ss tt");
            string dateNow = now.ToString("MMMM dd, yyyy");
            double ratingPoints;
            if (result == "Won")
            {
                ratingPoints = 5.5 + (1 - (time / 40.0)) * 4.5;
            }
            else
            {
                ratingPoints = -3 - (time / 40.0) * 4.5 - (1-(score / 30.0)) * 2;
            }
            string query = "INSERT INTO GameData (UserID,GameID,[Date],[Start Time],[Time],result,score,RatingPoints) VALUES(" + userId + "," + gameId + ",'" + dateNow + "','" + timeNow + "','" + time + "','" + result + "','" + score + "','" + ratingPoints + "');";
            SqlDataAdapter SDA = new SqlDataAdapter(query, conn);
            SDA.SelectCommand.ExecuteNonQuery();
            conn.Close();
        }

        public void AddDataWM(int userId, int gameId, int time, int clicks, int score)
        {
            conn.Open();
            DateTime now = DateTime.Now;
            string timeNow = now.ToString("hh:mm:ss tt");
            string dateNow = now.ToString("MMMM dd, yyyy");
            double ratingPoints = .5 + (Convert.ToDouble(score) / Convert.ToDouble(clicks))*9.5;
            string query = "INSERT INTO GameData (UserID,GameID,[Date],[Start Time],[Time],result,score,clicks,RatingPoints) VALUES(" + userId + "," + gameId + ",'" + dateNow + "','" + timeNow + "','" + time + "','Won','" + score + "','" + clicks + "','" + ratingPoints + "');";
            SqlDataAdapter SDA = new SqlDataAdapter(query, conn);
            SDA.SelectCommand.ExecuteNonQuery();
            conn.Close();
        }

        public string JsonConverter(DataTable table)
        {
            JavaScriptSerializer jsSerializer = new JavaScriptSerializer();
            List<Dictionary<string, object>> parentRow = new List<Dictionary<string, object>>();
            Dictionary<string, object> childRow;
            foreach (DataRow row in table.Rows)
            {
                childRow = new Dictionary<string, object>();
                foreach (DataColumn col in table.Columns)
                {
                    childRow.Add(col.ColumnName, row[col]);
                }
                parentRow.Add(childRow);
            }
            return jsSerializer.Serialize(parentRow);
        }
    }
}