package com.servlet;

import com.alibaba.fastjson.JSON;
import utils.Blog;
import utils.JDBC;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.*;
import java.nio.file.Files;
import java.util.Date;
import java.util.Random;
import java.util.UUID;

/**
 * @Author: 杰哥
 * Date: 2020/11/18 10:13
 * @Description:
 **/
@WebServlet(name = "BlogServlet",urlPatterns = "/blogServlet")
@MultipartConfig
public class BlogServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");
        resp.setCharacterEncoding("utf-8");
        String content = req.getParameter("content");
        Part myFile = req.getPart("myFile");
        String FilePath = "F:\\IDEA\\rd_dome\\images";
        String fileName = System.currentTimeMillis()+myFile.getSubmittedFileName();
        InputStream inputStream = myFile.getInputStream();
        File file = new File(FilePath,fileName);
        OutputStream outputStream = new FileOutputStream(file);
        byte[] b = new byte[1024];
        int len = 0;
        while ((len=inputStream.read(b))!=-1){
            outputStream.write(b,0,len);
        }
        outputStream.flush();
        outputStream.close();
        inputStream.close();
        String filePath = "http://localhost/myBlog/" + fileName;
        JDBC jdbc = new JDBC();
        StringBuilder randonId = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < 11; i++) {
           randonId.append(random.nextInt(9));
        }
        jdbc.doUpdate("insert into blog(userId,content,filePaht,createTime) values(?,?,?,?)",randonId.toString(),content,filePath,new Date());
        Blog one = jdbc.getOne("select * from blog where userId=?", randonId.toString());
        String string = JSON.toJSONString(one);
        PrintWriter printWriter = resp.getWriter();
        printWriter.write(string);
        System.out.println("现在是dev分支时的修改");
        System.out.println("dev分支");
    }
}
