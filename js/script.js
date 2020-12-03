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