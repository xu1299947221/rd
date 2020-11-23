<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tutter</title>
    <link rel="icon" href="./images/logo-blue.png">
</head>
<link rel="stylesheet" href="./css/commond.css">
<link rel="stylesheet" href="./css/index.css">

<body>
    <%
        if (request.getAttribute("list")==null){
            response.sendRedirect("/home");
        }
    %>
    <div class="bgimg">

    </div>
    <div class="bggif"></div>
    <div class="middle-main">
        <div class="middle-top">
            <span>Home</span>
        </div>
        <div class="gegeda">
            <div class="gegeda-main">
                <div class="Avatar">
                    <img src="./images/proflie/czh.jpg" alt="">
                </div>
                <div class="Avatar-right">
                    <div class="ipt six0">
                        <input type="text" placeholder="What's happening....">
                    </div>
                    <div class="gegeda-icon six0">
                        <div class="gegeda-icon-1"><img id="pics" src="./images/icon/黑 icon/图片.png" alt="" width="23px">
                        </div>
                        <div class="gegeda-icon-1"><img id="gif" src="./images/icon/黑 icon/gif.png" alt="" width="23px">
                        </div>
                        <div class="gegeda-icon-1"><img id="emoji" src="./images/icon/黑 icon/表情.png" alt=""
                                width="23px"></div>
                        <div class="gegeda-icon-1"><img id="timing" src="./images/icon/黑 icon/定时.png" alt=""
                                width="23px"></div>
                        <div class="gegeda-1">
                            <span>GeGeDa</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Margin"></div>
        <div class="Tutter_content">
            <c:forEach items="${list}" var="item">
            <div class="Tutter">
                <div class="Tutter_main">
                    <div class="Tutter_main_Avatar">
                        <img src="./images/proflie/czh.jpg" alt="">
                    </div>
                    <div class="Tutter_main_content">
                        <p class="userName">陈子辉</p>
                        <p class="user_content">${item.content}</p>
                        <div class="Media">
                            <img src="${item.filePaht}" alt="">
                        </div>
                        <div class="controls">
                            <div class="controls_icon">
                                <div class="controls_icon_hover"><img id="comments" src="./images/icon/黑 icon/评论.png"
                                        alt=""></div>
                                <span>158</span>
                            </div>
                            <div class="controls_icon">
                                <div class="controls_icon_hover"><img id="zhuanfa" src="./images/icon/黑 icon/转发.png"
                                        alt="">
                                </div>
                                <span>49</span>
                            </div>
                            <div class="controls_icon">
                                <div class="controls_icon_hover"><img id="likes" src="./images/icon/黑 icon/喜欢.png"
                                        alt="">
                                </div>
                                <span>407</span>
                            </div>
                            <div class="controls_icon">
                                <div class="controls_icon_hover"><img id="download" src="./images/icon/黑 icon/下载.png"
                                        alt=""></div>
                                <span>30</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </c:forEach>
            <div class="Tutter">
                <div class="Tutter_main">
                    <div class="Tutter_main_Avatar">
                        <img src="./images/proflie/czh.jpg" alt="">
                    </div>
                    <div class="Tutter_main_content">
                        <p class="userName">陈子辉</p>
                        <p class="user_content">赛博朋克要发售了！！！！！！！！</p>
                        <div class="Media">
                            <img src="./images/album/1.jpg" alt="">
                        </div>
                        <div class="controls">
                            <div class="controls_icon">
                                <div class="controls_icon_hover"><img src="./images/icon/黑 icon/评论.png" alt=""></div>
                                <span>111</span>
                            </div>
                            <div class="controls_icon">
                                <div class="controls_icon_hover"><img src="./images/icon/黑 icon/转发.png" alt=""></div>
                                <span>111</span>
                            </div>
                            <div class="controls_icon">
                                <div class="controls_icon_hover"><img src="./images/icon/黑 icon/喜欢.png" alt=""></div>
                                <span>111</span>
                            </div>
                            <div class="controls_icon">
                                <div class="controls_icon_hover"><img src="./images/icon/黑 icon/下载.png" alt=""></div>
                                <span>111</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Tutter">
                <div class="Tutter_main">
                    <div class="Tutter_main_Avatar">
                        <img src="./images/proflie/czh.jpg" alt="">
                    </div>
                    <div class="Tutter_main_content">
                        <p class="userName">陈子辉</p>
                        <p class="user_content">呼呼 终于拼好了 累死了</p>
                        <div class="Media">
                            <img src="./images/album/2.jpg" alt="">
                        </div>
                        <div class="controls">
                            <div class="controls_icon">
                                <div class="controls_icon_hover"><img src="./images/icon/黑 icon/评论.png" alt=""></div>
                                <span>149</span>
                            </div>
                            <div class="controls_icon">
                                <div class="controls_icon_hover"><img src="./images/icon/黑 icon/转发.png" alt=""></div>
                                <span>50</span>
                            </div>
                            <div class="controls_icon">
                                <div class="controls_icon_hover"><img src="./images/icon/黑 icon/喜欢.png" alt=""></div>
                                <span>500</span>
                            </div>
                            <div class="controls_icon">
                                <div class="controls_icon_hover"><img src="./images/icon/黑 icon/下载.png" alt=""></div>
                                <span>20</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="left">
        <div class="left-main">
            <div class="logo-left"> <img src="./images/logo-blue.png" alt="" width="50px" style="margin-left: 15px;">
            </div>
            <div class="left-second">
                <a href="">
                    <div class="nav"><img class="home" src="./images/icon/黑 icon/主页.png" alt=""
                            width="30px"><span>Home</span>
                    </div>
                </a>
                <a href="album.jsp">
                    <div class="nav"><img class="explore" src="./images/icon/黑 icon/井号.png" alt=""
                            width="30px"><span>Album</span>
                    </div>

                </a>
                <a href="">
                    <div class="nav"><img class="notifications" src="./images/icon/黑 icon/铃铛.png" alt=""
                            width="30px"><span>Notifications</span>
                    </div>

                </a>
                <a href="">
                    <div class="nav"><img class="messages" src="./images/icon/黑 icon/私信.png" alt=""
                            width="30px"><span>Messages</span>
                    </div>

                </a>
                <a href="">
                    <div class="nav"><img class="bookmarks" src="./images/icon/黑 icon/书签.png" alt=""
                            width="30px"><span>Bookmarks</span>
                    </div>

                </a>
                <a href="">
                    <div class="nav"><img class="lists" src="./images/icon/黑 icon/列表.png" alt=""
                            width="30px"><span>Lists</span></div>

                </a>
                <a href="proflie.jsp">
                    <div class="nav"><img class="profile" src="./images/icon/黑 icon/个人.png" alt=""
                            width="30px"><span>Profile</span>
                    </div>

                </a>
                <a href="javasript:;" class="btn_more">
                    <div class="nav"><img class="More" src="./images/icon/黑 icon/更多.png" alt=""
                            width="30px"><span>More</span>
                    </div>

                </a>
            </div>
            <div class="left-down">
                Ge Ge Da
            </div>
        </div>
    </div>
    <div class="right">
        <div class="search">
            <img src="./images/icon/黑 icon/搜索.png" alt="" width="18px">
            <input type="text" placeholder="Search Tutter">
        </div>
        <div class="trends">
            <div class="trends_tittle">
                <h1>Trends for you</h1>
            </div>
            <div class="trends_main">
                <div class="trends_contents">
                    <p class="sort">
                        娱乐
                    </p>
                    <p class="theme">
                        孙笑川为肖战庆生
                    </p>
                    <p class="sort">
                        401K Tutts
                    </p>
                </div>
                <div class="trends_contents">
                    <p class="sort">
                        影视
                    </p>
                    <p class="theme">
                        章子怡评夺冠
                    </p>
                    <p class="sort">
                        368K Tutts
                    </p>
                </div>
                <div class="trends_contents">
                    <p class="sort">
                        社会
                    </p>
                    <p class="theme">
                        云南一嫌犯戴手铐逃脱
                    </p>
                    <p class="sort">
                        335K Tutts
                    </p>
                </div>
            </div>
            <div class="trends_down ">
                <h1>Show more</h1>
            </div>
        </div>

        <div class="follow">
            <div class="trends_tittle">
                <h1>Trends for you</h1>
            </div>
            <div class="follow_Main">
                <div class="followUser">
                    <div class="follow_Avatar">
                        <img src="./images/Avatar/Avatar-1.png" alt="">
                    </div>
                    <div class="user_Name">
                        <p>叫我杰哥♂</p>
                    </div>
                    <div class="btn_follow"><span>Follow</span></div>
                </div>
                <div class="followUser">
                    <div class="follow_Avatar">
                        <img src="./images/Avatar/Avatar-1.png" alt="">
                    </div>
                    <div class="user_Name">
                        <p>叫我杰哥♂</p>
                    </div>
                    <div class="btn_follow"><span>Follow</span></div>
                </div>
                <div class="followUser">
                    <div class="follow_Avatar">
                        <img src="./images/Avatar/Avatar-1.png" alt="">
                    </div>
                    <div class="user_Name">
                        <p>叫我杰哥♂</p>
                    </div>
                    <div class="btn_follow"><span>Follow</span></div>
                </div>
            </div>
            <div class="trends_down ">
                <h1>Show more</h1>
            </div>
        </div>
    </div>
    <!-- 左边点击出现发送tutter页面 -->
    <div class="shadow">
        <div class="publish">
            <div class="close_1">
                <img class="close_2" id="close_2" src="./images/icon/蓝 1296db icon/关闭.png" alt="">
            </div>
            <div class="publish_down">
                <div class="publish_down_left">
                    <img src="./images/proflie/czh.jpg" alt="">
                </div>
                <div class="publish_down_right">
                    <div class="publish_content">
                        <textarea class="publish_contents" name="" id="" placeholder="What's happening...."></textarea>
                    </div>
                    <div class="publish_icon">
                        <div class="pbl_icons" id="pbl_file"><img id="pics" src="./images/icon/蓝 1296db icon/图片.png" alt=""
                                width="45px">
                            <input type="file" id="blogFile" name="blogFile">
                        </div>
                        <div class="pbl_icons"><img id="gif" src="./images/icon/蓝 1296db icon/gif.png" alt=""
                                width="45px"></div>
                        <div class="pbl_icons"><img id="emoji" src="./images/icon/蓝 1296db icon/表情.png" alt=""
                                width="45px"></div>
                        <div class="pbl_icons"><img id="timing" src="./images/icon/蓝 1296db icon/定时.png" alt=""
                                width="45px"></div>
                        <div class="pbl_gegeda" onclick="addPl()">GeGeDa</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 点击more出现更换主题页面 -->
    <div class="shadow_1">
        <div class="more">
            <p>Color</p>
            <div class="change_color">
                <div class="colors">
                    <div class="color_1 choose_color" onclick="iconBlue()"></div>
                </div>
                <div class="colors">
                    <div class="color_2 choose_color" onclick="iconPink()"></div>
                </div>
            </div>
            <p>Background</p>
            <div class="change_bgc">
                <div class="bgc_flex">
                    <div class="bgc_1 bgc_all" onclick="BgcWhite()">
                    </div>
                </div>
                <div class="bgc_flex">
                    <div class="bgc_2 bgc_all" onclick="BgcBlue()"></div>
                </div>
                <div class="bgc_flex">
                    <div class="bgc_3 bgc_all" onclick="BgcPink()"></div>
                </div>
                <div class="bgc_flex">
                    <div class="bgc_4 bgc_all" onclick="BgcBlack()"></div>
                </div>
            </div>
            <div class="btn_close">
                Done
            </div>
        </div>
    </div>
</body>
<script src="js/jquery-3.4.1.min.js"></script>
<script src="./js/index.js"></script>

</html>