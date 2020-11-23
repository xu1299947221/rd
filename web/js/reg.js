var mid = document.querySelector('.mid');
var mask = document.querySelector('.login-bg');
var link = document.querySelector('.b-logon');
var close = document.querySelector('.close');
var logo = document.querySelector('.mid-logo')
link.addEventListener('click', function() {
    $('.mask').fadeIn();
    $('.mid').fadeIn();
})
close.addEventListener('click', function() {
    $('.mask').fadeOut();
    $('.mid').fadeOut();
})
logo.addEventListener('mousedown', function(e) {
    var x = e.pageX - mid.offsetLeft;
    var y = e.pageY - mid.offsetTop;
    // (2) 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
    document.addEventListener('mousemove', move)

    function move(e) {
        mid.style.left = e.pageX - x + 'px';
        mid.style.top = e.pageY - y + 'px';
    }
    // (3) 鼠标弹起，就让鼠标移动事件移除
    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', move);
    })
})

function regName(name) {

    var reg = /^[a-zA-Z0-9]{8,12}$/;
    if (reg.test(name)) {
        document.getElementById('checkUser').innerHTML = '';

    } else {
        document.getElementById('checkUser').innerHTML = '用户名格式错误';

    }


}

function regPassword(name) {

    var reg = /^.*(?=.{6,})(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (reg.test(name)) {
        document.getElementById('checkPassword').innerHTML = '';

    } else {
        document.getElementById('checkPassword').innerHTML = '密码格式错误';

    }


}

function regMail(name) {

    var reg = /^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$/;
    if (reg.test(name)) {
        document.getElementById('checkMail').innerHTML = '';

    } else {
        document.getElementById('checkMail').innerHTML = '邮箱格式错误';

    }


}
var eye = document.getElementById('eye');
var pwd = document.getElementById('pwd');
var flag = 0;
eye.onclick = function() {
    if (flag == 0) {
        pwd.type = 'text';
        eye.src = './images/reg/show-2x.png'
        flag = 1
    } else {
        pwd.type = 'password';
        eye.src = './images/reg/hide-2x.png';
        flag = 0;

    }
}
var phone = document.getElementById('phone');
var use = document.getElementById('use');
var flag1 = 0;
phone.onclick = function() {
    if (flag1 == 0) {
        phone.innerHTML = '改用邮箱';
        use.innerHTML = '手机号';
        flag1 = 1
    } else {
        phone.innerHTML = '改用手机号';
        use.innerHTML = '邮箱';
        flag1 = 0;
    }
}

 // 登录按钮特效
const box_right = document.querySelector('.right')
const btns = document.querySelector('.register')
const content_right = document.querySelector('.content_right')
btns.addEventListener('mouseenter', function(e) {
    let x = e.clientX - box_right.offsetLeft / 2 - content_right.offsetLeft;
    let y = e.clientY - box_right.offsetTop - btns.offsetTop / 2;
    // console.log(x)
    // console.log(e.clientX)
    // console.log(box_right.offsetLeft)
    // console.log(content_right.offsetLeft)
    let ripples = document.createElement('span')
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);
    setTimeout(() => {
        ripples.remove()
    }, 500)
})
//登录
function login() {
    var user = document.querySelector('.xm').value
    var pass = document.querySelector('.yx').value
    if (user == 'admin' && pass == '123456') {
        location.href = '../index.jsp'
    } else {
        // 显示错误提示弹框
        document.querySelector('.adanger').style.display = 'block';
        setTimeout(() => {
            $('.adanger').fadeOut("slow");
        }, 1000)
    }
}
// 登录界面弹出隐藏效果
var alogin = document.querySelector('.login')
function showLogin() {
    alogin.style.zIndex = 999
    alogin.style.left = 50 + '%'
}

function closeLogin() {
    alogin.style.left = -999 + 'px'
    alogin.style.zIndex = 999
}
//  登录界面back效果
$('.logo_back').on({
    mouseenter: function() {
        $('.img_back').attr('src', './images/reg/back_blue.png')
    },
    mouseleave: function() {
        $('.img_back').attr('src', './images/reg/back.png')
    }
})