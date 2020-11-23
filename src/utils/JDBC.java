package utils;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author: 杰哥
 * Date: 2020/11/17 14:40
 * @Description:
 **/
public class JDBC {
    private final static String DIRVER = "com.mysql.jdbc.Driver";
    private final static String URL = "jdbc:mysql:///rd?useUnicode=true&characterEncoding=utf8&useSSL=false";
    private final static String USERNAME = "root";
    private final static String PASSWORD = "123456";

    public static Connection getConnection(){
        Connection connection = null;
        try {
            Class.forName(DIRVER);
            try {
                connection = DriverManager.getConnection(URL,USERNAME,PASSWORD);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return connection;
    }

    public int doUpdate(String sql,Object... param){
        int num = 0;
        Connection connection = getConnection();
        PreparedStatement preparedStatement = null;
        try {
            preparedStatement = connection.prepareStatement(sql);
            for (int i = 0; i < param.length; i++) {
                preparedStatement.setObject(i+1,param[i]);
            }
            num = preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            close(connection,preparedStatement,null);
        }
        return num;
    }

    public Blog getOne(String sql,Object... param){
        Blog blog = new Blog();
        Connection connection = getConnection();
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        try {
            preparedStatement = connection.prepareStatement(sql);
            for (int i = 0; i < param.length; i++) {
                preparedStatement.setObject(i+1,param[i]);
            }
            resultSet = preparedStatement.executeQuery();
            while (resultSet.next()){
                blog.setId((Integer) resultSet.getObject("id"));
                blog.setUserId((String) resultSet.getObject("userId"));
                blog.setContent((String) resultSet.getObject("content"));
                blog.setFilePaht((String) resultSet.getObject("filePaht"));
                blog.setCreateTime((java.util.Date) resultSet.getObject("createTime"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            close(connection,preparedStatement,resultSet);
        }
        return blog;
    }

    public List<Blog> getList(String sql, Object... param){
        List<Blog> list = new ArrayList<>();
        Connection connection = getConnection();
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        try {
            preparedStatement = connection.prepareStatement(sql);
            for (int i = 0; i < param.length; i++) {
                preparedStatement.setObject(i+1,param[i]);
            }
            resultSet = preparedStatement.executeQuery();
            while (resultSet.next()){
                Blog blog = new Blog();
                blog.setId((Integer) resultSet.getObject("id"));
                blog.setUserId((String) resultSet.getObject("userId"));
                blog.setContent((String) resultSet.getObject("content"));
                blog.setFilePaht((String) resultSet.getObject("filePaht"));
                blog.setCreateTime((java.util.Date) resultSet.getObject("createTime"));
                list.add(blog);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            close(connection,preparedStatement,resultSet);
        }
        return list;
    }

    private void close(Connection conn,PreparedStatement ps,ResultSet rs){
        try {
            if (rs != null) {
                rs.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            try {
                if (ps != null) {
                    ps.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }finally {
                try {
                    if (conn != null) {
                        conn.close();
                    }
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
