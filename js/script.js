// 手機選單=========================================================================================
                
        // 手機選單點擊錨點連結，選單消失(取消勾選)
        var menu = document.getElementById('menu-toggle');
        var closeIcon = document.getElementById('menu-controler');

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