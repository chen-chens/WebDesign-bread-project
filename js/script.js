// 手機選單=========================================================================================
                
        // 手機選單點擊錨點連結，選單消失(取消勾選)
        const menu = document.getElementById('menu-toggle');
        const closeIcon = document.getElementById('menu-controler');

        menu.addEventListener('click', handleMenuClick);

        function handleMenuClick(event) {
        if (event.target instanceof HTMLAnchorElement) {
            closeIcon.checked = false;
            }
        }


// 手機登入頁=========================================================================================

        // 取得常數:(1)點擊元素 (2)作用內容 
        const loginBtn = document.getElementById('login');
        const signupBtn = document.getElementById('signup');
        const loginBox = document.getElementById('show-login');
        const signupBox = document.getElementById('show-signup');


        // 當點擊註冊會員:註冊會員-class 且 登入會員+class
        signupBtn.addEventListener('click',function(){
            if(signupBox.classList.contains('trigger')) { 
               signupBox.classList.remove('trigger');
               loginBox.classList.add('trigger');
            } 
        });

        // 當點擊登入會員:登入會員-class 且 註冊會員+class
        loginBtn.addEventListener('click',function(){
            if(loginBox.classList.contains('trigger')) { 
               loginBox.classList.remove('trigger'); 
               signupBox.classList.add('trigger');
            } 
        });


// 影音燈箱(目前外連無作用)=========================================================================================

        // 當點選關閉鍵，撥放中的youtube停止播放(拿掉src，再重新放入)

        // 寫法一: 缺點每次關閉就要重新reload
        // const stopButton1 = document.getElementById('btn1');
        // const stopButton2 = document.getElementById('btn2');
        // const stopButton3 = document.getElementById('btn3');
        // const stopButton4 = document.getElementById('btn4');

        // stopButton1.onclick = function() {
        //     var myPlayer = document.getElementById('v1'); 
        //     myPlayer.setAttribute("src", "");
        //     myPlayer.setAttribute("src", "https://www.youtube.com/embed/y8vLjPctrcU");
        // }; 

        // stopButton2.onclick = function() {
        //     var myPlayer = document.getElementById('v2'); 
        //     myPlayer.setAttribute("src", "");
        //     myPlayer.setAttribute("src", "https://www.youtube.com/embed/EGbNI26PPYg");
        // }; 

        // stopButton3.onclick = function() {
        //     var myPlayer = document.getElementById('v3'); 
        //     myPlayer.setAttribute("src", "");
        //     myPlayer.setAttribute("src", "https://www.youtube.com/embed/418KSrmpMwc");
        // }; 

        // stopButton4.onclick = function() {
        //     var myPlayer = document.getElementById('v4'); 
        //     myPlayer.setAttribute("src", "");
        //     myPlayer.setAttribute("src", "https://www.youtube.com/embed/BU7ASp5TIGo");
        // }; 


// 卷軸下拉的hightlight(目前無作用)============================================================
// window.document.addEventListener('scroll', onScroll );

// function onScroll(e){
//     // 取得導覽列錨點連結(排除第一個不是錨點連結)
//     var sections = document.querySelectorAll('#test li:not(:first-child) a');
    
//     var scrollPosition = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; 

//     for( var i = 0; i < sections.length; i++ ){
//         var currentLink = sections[i];
//         var value = currentLink.getAttribute('href');
//         var refElement = document.querySelector(value);
//             if ( refElement.offsetTop <= scrollPosition && ( refElement.offsetTop + refElement.offsetHeight > scrollPosition )){
//                 document.querySelector('#test li:not(:first-child) a').classList.remove('active');
//                 currentLink.classList.add('active');
//             }else{
//                 currentLink.classList.remove('active');
//             }
//     }

// }

// querySelectorAll 取得所有元素，並以陣列方式傳回
// querySelector 僅取得第一個符合的元素
// pageYOffset 取得目前頁面距預設(視窗左上角)垂直方向的距離，唯讀，單位像素。(舊瀏覽器使用scrollY)
// pageXOffset 取得目前頁面距預設(視窗左上角)水平方向的距離，唯讀，單位像素。(舊瀏覽器使用scrollX)
// scrollTop 表示捲動的高度，可以設定或取得捲動的高度(位置)，預設值position=0。
    // window.pageYOffset                  瀏覽器Safari取得scrollTop的方式
    // document.documentElement.scrollTop  一般標準瀏覽器(IE6/7/8有doctype宣告也適用)
    // document.body.scrollTop             瀏覽器IE6/7/8沒有doctype宣告頁面適用
    // 特別注意 || 的用法與 window.pageYOffset 位置: 取值在IE瀏覽器下 window.pageYOffset 會獲得 undefine,若把 window.pageYOffset 放在最後面，依 || 預設回傳最後一個值undefine,後面的運算就會報錯。
    // document.documentElement  >>> 文件下的根目錄，即為<html>
    // document.body             >>> 文件下的<body>
// offsetTop = offsetParent 與 Element(不含margin)之間的垂直距離(量點預設為左上角)。
    // offsetParent 指Element向上找尋有定位的上層節點，也可以為<table> <tr> <td>。若上層無定位，會往上找到<body>。
    // 若 Element 為fixed物件，offsetParent即為 null。
    // 不同瀏覽器對測量距離上定義會有落差。
// offsetHeight = Element's height w/o margin = content'height + padding + border
    // 補充
    // offsetWidth = Element's width w/o margin = content'width + padding + border