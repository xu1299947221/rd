// 开关左边的发推界面
$('.left-down').click(function(){
    $('.shadow').fadeIn()
    
})

$('.close_2').click(function(){
    $('.shadow').fadeOut()
})

    // 开关样式更改界面
var btn_more = document.querySelector('.btn_more')
var shadow_1 = document.querySelector('.shadow_1')
var close_1 = document.querySelector('.btn_close')
$('.btn_more').click(function(){
    $('.shadow_1').fadeIn()
})
$('.btn_close').click(function(){
    $('.shadow_1').fadeOut()
})

// 更改图标颜色

function iconBlue() {
    $('.left-down,.btn_close,.gegeda-1').css({ 'background': '#1296db' })
    $(".home").attr("src", "./images/icon/蓝 1296db icon/主页.png")
    $(".explore").attr("src", "./images/icon/蓝 1296db icon/井号.png")
    $(".notifications").attr("src", "./images/icon/蓝 1296db icon/铃铛.png")
    $(".messages").attr("src", "./images/icon/蓝 1296db icon/私信.png")
    $(".bookmarks").attr("src", "./images/icon/蓝 1296db icon/书签.png")
    $(".lists").attr("src", "./images/icon/蓝 1296db icon/列表.png")
    $(".profile").attr("src", "./images/icon/蓝 1296db icon/个人.png")
    $(".More").attr("src", "./images/icon/蓝 1296db icon/更多.png")
        // 用户的推下方图标
    $("#comments").attr("src", "./images/icon/蓝 1296db icon/评论.png")
    $("#zhuanfa").attr("src", "./images/icon/蓝 1296db icon/转发.png")
    $("#likes").attr("src", "./images/icon/蓝 1296db icon/喜欢.png")
    $("#download").attr("src", "./images/icon/蓝 1296db icon/下载.png")
        // 发送推文下方图标
    $("#pics").attr("src", "./images/icon/蓝 1296db icon/图片.png")
    $("#gif").attr("src", "./images/icon/蓝 1296db icon/gif.png")
    $("#emoji").attr("src", "./images/icon/蓝 1296db icon/表情.png")
    $("#timing").attr("src", "./images/icon/蓝 1296db icon/定时.png")
    $("#close_2").attr("src", "./images/icon/蓝 1296db icon/关闭.png")
}

function iconPink() {
    $('.left-down,.btn_close,.gegeda-1').css({ 'background': '#f69fa2' })
    $(".home").attr("src", "./images/icon/粉 f69fa2 icon/主页.png")
    $(".explore").attr("src", "./images/icon/粉 f69fa2 icon/井号.png")
    $(".notifications").attr("src", "./images/icon/粉 f69fa2 icon/铃铛.png")
    $(".messages").attr("src", "./images/icon/粉 f69fa2 icon/私信.png")
    $(".bookmarks").attr("src", "./images/icon/粉 f69fa2 icon/书签.png")
    $(".lists").attr("src", "./images/icon/粉 f69fa2 icon/列表.png")
    $(".profile").attr("src", "./images/icon/粉 f69fa2 icon/个人.png")
    $(".More").attr("src", "./images/icon/粉 f69fa2 icon/更多.png")
        // 用户的推下方图标
    $("#comments").attr("src", "./images/icon/粉 f69fa2 icon/评论.png")
    $("#zhuanfa").attr("src", "./images/icon/粉 f69fa2 icon/转发.png")
    $("#likes").attr("src", "./images/icon/粉 f69fa2 icon/喜欢.png")
    $("#download").attr("src", "./images/icon/粉 f69fa2 icon/下载.png")
        // 发送推文下方图标
    $("#pics").attr("src", "./images/icon/粉 f69fa2 icon/图片.png")
    $("#gif").attr("src", "./images/icon/粉 f69fa2 icon/gif.png")
    $("#emoji").attr("src", "./images/icon/粉 f69fa2 icon/表情.png")
    $("#timing").attr("src", "./images/icon/粉 f69fa2 icon/定时.png")
    $("#close_2").attr("src", "./images/icon/粉 f69fa2 icon/关闭.png")
}
// 默认白色主题
BgcWhite()
 // 白色主题
function BgcWhite() {
    $('.trends_contents').on({
        mouseenter: function() {
            $(this).css({ 'background-color': 'rgb(237,240,242)' })
        },
        mouseleave: function() {
            $(this).css({ 'background-color': 'rgb(245,248,250)' })
        }
    })
    $('.Tutter').on({
        mouseenter: function() {
            $(this).css({ 'background-color': 'rgb(245,248,250)' })
        },
        mouseleave: function() {
            $(this).css({ 'background-color': 'rgb(255,255,255)' })
        }
    })
    $('.nav').on({
        mouseenter: function() {
            $(this).css({ 'background-color': 'rgb(241,237,249)', 'color': 'rgb(121,75,196)' })
            $(this).children().css({ 'color': 'rgb(121,75,196)' })
        },
        mouseleave: function() {
            $(this).css({ 'background-color': 'rgb(255,255,255)', 'color': 'rgb(0,0,0)' })
            $(this).children().css({ 'color': 'rgb(0,0,0)' })
        }
    })
    $('.gegeda-icon-1').on({
            mouseenter: function() {
                $(this).css({ 'background-color': 'rgb(241,237,249)' })
            },
            mouseleave: function() {
                $(this).css({ 'background-color': 'rgb(255,255,255)' })
            }
        })
        //初始化主题
    $('.nav span').css({ 'color': '#000' })
    $('.nav,.gegeda-icon-1').css({ 'background-color': '#fff' })
    $('.Tutter').css({ 'background-color': '#fff' })
    $('.trends_contents,.tab_bar_row').css({ 'background-color': 'rgb(245,248,250)' })
        //改主题
    $('.trends,.follow').css({ 'color': '#000' }) // 右边两块区域的字体颜色
    $('.trends,.follow').css({ 'background-color': 'rgb(245,248,250)' }) // 右边两块区域的背景颜色
    $('.search').css({ 'background-color': 'rgb(230,236,240)' }) // 搜索框的背景颜色
    $('.Margin').css({ 'background-color': 'rgb(230, 236, 240)' })
    $('.middle-main').css({ 'border-left': '1px solid #e6ecf0', 'border-right': '1px solid #e6ecf0' })
    $('.middle-top,.gegeda,.Tutter,.trends_tittle,.trends_contents,.followUser').css({ 'border-bottom': '1px solid #e6ecf0' }) // 下边框颜色
    $('.middle-top,.gegeda,.gegeda-main,.Tutter,.middle-main,.Avatar,.Avatar-right,.ipt input').css({ 'color': '#000' })
    $('.middle-top,body,.gegeda,.gegeda-main,.Tutter,.middle-main,.Avatar,.Avatar-right,.ipt input').removeClass('bgcPink bgcBlue bgcBlack')
    $('.bgimg').css({ 'background-image': 'url()' })
    $('.bggif').css({ 'width': '0px', 'height': '0px' })
}
// 粉色主题
function BgcPink() {
    $('.trends_contents').on({
        mouseenter: function() {
            $(this).css({ 'background-color': 'rgb(237,240,242)' })
        },
        mouseleave: function() {
            $(this).css({ 'background-color': 'rgb(245,248,250)' })
        }
    })
    $('.Tutter').on({
        mouseenter: function() {
            $(this).css({ 'background-color': 'rgb(237,240,242)' })
        },
        mouseleave: function() {
            $(this).css({ 'background-color': 'rgb(255,212,212)' })
        }
    })
    $('.nav').on({
        mouseenter: function() {
            $(this).css({ 'background-color': 'rgb(237,240,242)', 'color': 'rgb(121,75,196)' })
            $(this).children().css({ 'color': 'rgb(121,75,196)' })
        },
        mouseleave: function() {
            $(this).css({ 'background-color': 'rgb(255,212,212)', 'color': 'rgb(0,0,0)' })
            $(this).children().css({ 'color': 'rgb(0,0,0)' })
        }
    })
    $('.gegeda-icon-1').on({
            mouseenter: function() {
                $(this).css({ 'background-color': 'rgb(241,237,249)' })
            },
            mouseleave: function() {
                $(this).css({ 'background-color': 'rgb(255,212,212)' })
            }
        })
        //初始化主题
    $('.nav span').css({ 'color': '#000' })
    $('.nav,.gegeda-icon-1').css({ 'background-color': 'rgb(255,212,212)' })
    $('.Tutter').css({ 'background-color': 'rgb(255,212,212)' })
    $('.trends_contents,.tab_bar_row').css({ 'background-color': 'rgb(245,248,250)' })
        //改主题
    $('.trends,.follow').css({ 'color': '#000' }) // 右边两块区域的字体颜色
    $('.trends,.follow').css({ 'background-color': 'rgb(245,248,250)' }) // 右边两块区域的背景颜色
    $('.search').css({ 'background-color': 'rgb(230,236,240)' }) // 搜索框的背景颜色
    $('.Margin').css({ 'background-color': 'rgb(230, 236, 240)' })
    $('.middle-main').css({ 'border-left': '1px solid #e6ecf0', 'border-right': '1px solid #e6ecf0' })
    $('.middle-top,.gegeda,.Tutter,.trends_tittle,.trends_contents,.followUser').css({ 'border-bottom': '1px solid #e6ecf0' }) // 下边框颜色
    $('.middle-top,body,.gegeda,.gegeda-main,.Tutter,.middle-main,.Avatar,.Avatar-right,.ipt input').removeClass('bgcBlue bgcBlack bgcWhite')
    $('.bgimg').css({ 'background-image': 'url(./images/bgimg/粉色.png)' })
    $('.bggif').css({ 'background-image': 'url(./images/bgimg/粉色_01.gif)' })
    $('.bggif').css({ 'width': '284px', 'height': '400px' })
        // $('.trends,.follow').css({'background-color':'rgb(246,160,163)'})
    $('.middle-top,body,.gegeda,.gegeda-main,.Tutter,.middle-main,.Avatar,.Avatar-right,.ipt input').addClass('bgcPink')
}
// 蓝色主题
function BgcBlue() {
    $('.trends_contents').on({
        mouseenter: function() {
            $(this).css({ 'background-color': 'rgba(255,255,255,.1)' })
        },
        mouseleave: function() {
            $(this).css({ 'background-color': 'rgb(25,39,52)' })
        }
    })
    $('.Tutter').on({
        mouseenter: function() {
            $(this).css({ 'background-color': 'rgba(255,255,255,0.1)' })
        },
        mouseleave: function() {
            $(this).css({ 'background-color': 'rgb(41,74,107)' })
        }
    })
    $('.nav').on({
        mouseenter: function() {
            $(this).css({ 'background-color': 'rgba(22,45,64,.3)' })
            $(this).children().css({ 'color': 'rgb(29,161,242)' })
        },
        mouseleave: function() {
            $(this).css({ 'background-color': 'rgb(41,74,107)' })
            $(this).children().css({ 'color': 'rgb(255,255,255)' })
        }
    })
    $('.gegeda-icon-1').on({
            mouseenter: function() {
                $(this).css({ 'background-color': 'rgb(241,237,249)' })
            },
            mouseleave: function() {
                $(this).css({ 'background-color': 'rgb(41,74,107)' })
            }
        })
        //初始化主题
    $('.nav span').css({ 'color': '#fff' })
    $('.nav,.gegeda-icon-1').css({ 'background-color': 'rgb(41,74,107)' })
    $('.Tutter').css({ 'background-color': 'rgb(41,74,107)' })
    $('.trends_contents,.tab_bar_row').css({ 'background-color': 'rgb(25,39,52)' })
        //改主题
    $('.trends,.follow').css({ 'color': 'rgb(217,217,217)' }) // 右边两块区域的字体颜色
    $('.trends,.follow').css({ 'background-color': 'rgb(22,45,64)' }) // 右边两块区域的背景颜色
    $('.search').css({ 'background-color': 'rgb(47,51,54)' }) // 搜索框的背景颜色
    $('.Margin').css({ 'background-color': 'rgb(32, 35, 39)' })
    $('.middle-main').css({ 'border-left': '1px solid rgb(47,51,54)', 'border-right': '1px solid rgb(47,51,54)' })
    $('.middle-top,.gegeda,.Tutter,.trends_tittle,.trends_contents,.followUser').css({ 'border-bottom': '1px solid rgb(47,51,54)' }) // 下边框颜色

    $('.middle-top,.gegeda,.gegeda-main,.Tutter,.middle-main,.Avatar,.Avatar-right,.ipt input').css({ 'color': '#fff' })
    $('.middle-top,body,.gegeda,.gegeda-main,.Tutter,.middle-main,.Avatar,.Avatar-right,.ipt input').removeClass('bgcPink bgcBlack bgcWhite')
    $('.bgimg').css({ 'background-image': 'url(./images/bgimg/蓝色.png)' })
    $('.bggif').css({ 'background-image': 'url(./images/bgimg/蓝色_02.gif)' })
    $('.bggif').css({ 'width': '320px', 'height': '450px' })
        // $('.trends,.follow').css({'background-color':'rgb(41,74,107)'})
    $('.middle-top,body,.gegeda,.gegeda-main,.Tutter,.middle-main,.Avatar,.Avatar-right,.ipt input').addClass('bgcBlue')
}
//   黑色主题
function BgcBlack() {
    $('.trends_contents').on({
        mouseenter: function() {
            $(this).css({ 'background-color': 'rgb(28,31,35)' })
        },
        mouseleave: function() {
            $(this).css({ 'background-color': 'rgb(21,24,28)' })
        }
    })
    $('.Tutter').on({
        mouseenter: function() {
            $(this).css({ 'background-color': 'rgb(28,31,35)' })
        },
        mouseleave: function() {
            $(this).css({ 'background-color': 'rgb(0,0,0)' })
        }
    })
    $('.nav').on({
        mouseenter: function() {
            $(this).css({ 'background-color': 'rgb(255,255,255)' })
            $(this).children().css({ 'color': 'rgb(121,75,196)' })
        },
        mouseleave: function() {
            $(this).css({ 'background-color': 'rgb(0,0,0)' })
            $(this).children().css({ 'color': 'rgb(255,255,255)' })
        }
    })
    $('.gegeda-icon-1').on({
        mouseenter: function() {
            $(this).css({ 'background-color': 'rgb(241,237,249)' })
        },
        mouseleave: function() {
            $(this).css({ 'background-color': 'rgb(0,0,0)' })
        }
    })
    iconBlue() //icon的颜色
        //初始化主题
    $('.nav span').css({ 'color': '#fff' })
    $('.nav,.gegeda-icon-1').css({ 'background-color': '#000' })
    $('.Tutter').css({ 'background-color': '#000' })
    $('.trends_contents,.tab_bar_row').css({ 'background-color': 'rgb(21,24,28)' })
        //改主题
    $('.nav span').css({ 'color': '#fff' }) // 侧边栏字体颜色
    $('.trends,.follow').css({ 'color': 'rgb(217,217,217)' }) // 右边两块区域的字体颜色
    $('.trends,.follow').css({ 'background-color': 'rgb(21,24,28)' }) // 右边两块区域的背景颜色
    $('.search').css({ 'background-color': 'rgb(47,51,54)' }) // 搜索框的背景颜色
    $('.Margin').css({ 'background-color': 'rgb(32, 35, 39)' }) // 中间隔离区的背景颜色
    $('.middle-main').css({ 'border-left': '1px solid rgb(47,51,54)', 'border-right': '1px solid rgb(47,51,54)' }) // 中间区域左右边框颜色
    $('.middle-top,.gegeda,.Tutter,.trends_tittle,.trends_contents,.followUser').css({ 'border-bottom': '1px solid rgb(47,51,54)' }) // 下边框颜色

    $('.middle-top,body,.gegeda,.gegeda-main,.Tutter,.middle-main,.Avatar,.Avatar-right,.ipt input').removeClass('bgcPink bgcBlue bgcWhite')
    $('.middle-top,.gegeda,.gegeda-main,.Tutter,.middle-main,.Avatar,.Avatar-right,.ipt input').css({ 'color': '#fff' })
    $('.bgimg').css({ 'background-image': 'url(./images/bgimg/黑色.png)' })
    $('.bggif').css({ 'background-image': 'url(./images/bgimg/黑色_03.gif)' })
    $('.bggif').css({ 'width': '400px', 'height': '290px' })
    $('.middle-top,body,.gegeda,.gegeda-main,.Tutter,.middle-main,.Avatar,.Avatar-right,.ipt input').addClass('bgcBlack')
}
// 发推特
function addPl() {
    var Pl_val = document.querySelector('.publish_contents').value
    var myFile = document.getElementById("blogFile").files[0];
    var formData = new FormData();
    formData.append("content",Pl_val);
    formData.append("myFile",myFile);
    var result = {}
    var that = this
    /*点击上传图片触发上传input*/
    $.ajax({
        url:"/blogServlet",
        type:"post",
        data:formData,
        contentType: false, // 告诉jQuery不要去设置Content-Type请求头
        processData: false, // 告诉jQuery不要去处理发送的数据
        async:false,
        success:function (res) {
            that.result = $.parseJSON(res);
        },
        error:function () {

        }
    })
    var Pl_text = '<div class="Tutter"> <div class="Tutter_main"> <div class="Tutter_main_Avatar"><img src="./images/proflie/czh.jpg" alt=""></div> <div class="Tutter_main_content"><p class="userName">陈子辉♂</p><p class="auser_content">'+that.result.content+'</p><div class="Media"><img src="'+that.result.filePaht+'" alt=""></div><div class="controls"></div></div> </div> </div>'
    $('.shadow').fadeOut()
    $('.Tutter_content').prepend(Pl_text)
}
$("#pbl_file").click(function () {
    // 让file的input对象触发点击事件
    document.getElementById("blogFile").click();
})