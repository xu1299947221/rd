<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>register</title>
</head>
<link rel="stylesheet" href="./css/reg.css">
<link rel="stylesheet" href="./css/login.css">

<body>
    <div class="login">
        <div class="login_ipt">
            <div class="alogo">
                <div class="logo_back" onclick="closeLogin()">
                    <img src="./images/reg/back.png" alt="" style="width: 30px;height: 30px;" class="img_back">
                </div>
                <img src="./images/login/logo_w.png" class="img_logo">
                <h3>登录Tutter</h3>
            </div>
            <div class="aregister">
                <div class="aname">
                    <label>电话、邮件地址或登录名</label><br>
                    <input type="text" class="xm" value="">
                </div>
                <div class="apassword">
                    <label>密码</label>
                    <label><img src="./images/login/hide-2x.png" id="eye""></label>
                    <input type=" password" class="yx" id="pwd">
                </div>
                <div class="afinish">
                    <input type="button" value="登录" onclick="login()">
                </div>
                <div class="afooter">
                    <label id="" onclick="javascript:window.location.href='register.html'">注册Tutter账号</label>
                </div>
            </div>
        </div>
    </div>
    <div class="adanger">
        <p><strong>用户名或密码错误</strong></p>
    </div>
    <div class="content">
        <div class="content_left">
            <div class="left">

            </div>
        </div>
        <div class="content_right">
            <div class="right">
                <div class="logo"><img src="./images/reg/logo_w.png"></div>
                <div class="CZH">
                    <h1>查看世界上正在发生的事情</h1>
                </div>
                <div class="logon" style="margin-bottom:20px">
                    <input type="submit" class="b-logon" value="注册">
                </div>
                <div class="register">
                    <input type="button" class="b-register" value="登录" onclick="showLogin()">
                </div>
                <div class="mid">
                    <div class="mid-logo">
                        <img src="./images/reg/logo_w.png">
                    </div>
                    <p class="guide">创建你的账号</p>
                    <div class="name">
                        <label>名字</label><br>
                        <input type="text" class="ne" id="name" onchange="regName(this.value)">
                        <label id="checkUser">&nbsp</label>
                    </div>
                    <div class="password">
                        <label>请设置密码</label><br>
                        <input type="password" class="pwd" id="pwd" onchange=" regPassword(this.value)">
                        <label><img src="./images/reg/hide-2x.png" id="eye"></label>
                        <label id="checkPassword">&nbsp</label>
                    </div>
                    <div class="mail">
                        <label id="use">邮箱</label>
                        <input type="text" class="ml" onchange="regMail(this.value)">
                        <label id="checkMail">&nbsp</label><br>
                        <div class="change">
                            <p id="phone">改用手机号</p>
                        </div>
                    </div>
                    <div class="born">
                        <p>出生日期</p>
                        <label for="">这不会公开显示。确认你自己的年龄，即使此账号是用于业务、宠物或其他内容的。</label>
                        <select name="month" id="month">
                            <option value="1月">1月</option>
                            <option value="2月">2月</option>
                            <option value="3月">3月</option>
                            <option value="4月">4月</option>
                            <option value="5月">5月</option>
                            <option value="6月">6月</option>
                            <option value="7月">7月</option>
                            <option value="8月">8月</option>
                            <option value="9月">9月</option>
                            <option value="10月">10月</option <option value="11月">11月</option>
                            <option value="12月">12月</option>
                        </select>
                        <select name="day" id="day">
                            <option value="1日">1日</option>
                            <option value="2日">2日</option>
                            <option value="3日">3日</option>
                            <option value="4日">4日</option>
                            <option value="5日">5日</option>
                            <option value="6日">6日</option>

                        </select>
                        <select name="year" id="year">
                            <option value="2020年">2020年</option>
                            <option value="2019年">2019年</option>
                            <option value="2018年">2018年</option>
                            <option value="2017年">2017年</option>
                            <option value="2016年">2016年</option>
                            <option value="2015年">2015年</option>

                        </select>
                    </div>
                    <div class="finish">
                        <input type="submit" class="close" value="完成">
                    </div>
                </div>

                <div id="bg" class="login-bg"></div>
            </div>
        </div>
    </div>
</body>
<script src="./js/jquery-3.4.1.min.js"></script>
<script src="./js/reg.js"></script>

</html>