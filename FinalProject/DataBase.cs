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
        static string conString = @"Server= CMDLHRLT938; Data Source=CMDLHRLT938;Initial Catalog=GamePortalData;Integrated Security=True";
        SqlConnection conn = new SqlConnection(conString);

        public DataTable Authentication(string username)
        {
            conn.Open();
            string query = "SELECT * FROM userdata WHERE username='" + username + "';";
            SqlDataAdapter SDA = new SqlDataAdapter(query, conn);
            DataTable dt = new DataTable();
            SDA.Fill(dt);
            conn.Close();
            return dt;
        }

        public void AddUser(string name, string email, string username, string pass)
        {
            conn.Open();
            string query = "INSERT INTO userdata VALUES('" + name + "','" + email + "','" + username + "','" + pass + "');";
            SqlDataAdapter SDA = new SqlDataAdapter(query, conn);
            SDA.SelectCommand.ExecuteNonQuery();
            conn.Close();
        }

        public void AddData(string username, string time, string result, string tblName)
        {
            conn.Open();
            string query = "INSERT INTO " + tblName + " VALUES('" + username + "','" + time + "','" + result + "');";
            SqlDataAdapter SDA = new SqlDataAdapter(query, conn);
            SDA.SelectCommand.ExecuteNonQuery();
            conn.Close();
        }
    }
}