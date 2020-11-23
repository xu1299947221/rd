package com.servlet;

import com.alibaba.fastjson.JSON;
import utils.Blog;
import utils.JDBC;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author: 杰哥
 * Date: 2020/11/20 10:36
 * @Description:
 **/
@WebServlet(name = "HomeServlet",urlPatterns = "/home")
public class HomeServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        JDBC jdbc = new JDBC();
        List<Blog> list = jdbc.getList("select * from blog ORDER BY createTime desc");
        req.setAttribute("list",list);
        req.getRequestDispatcher("/index.jsp").forward(req,resp);
    }
}
