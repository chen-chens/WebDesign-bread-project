            // 手機選單點擊錨點連結，選單消失(取消勾選)
            var menu = document.getElementById('menu-toggle');
            var closeIcon = document.getElementById("menu-controler");
    
            menu.addEventListener('click', handleMenuClick);
    
            function handleMenuClick(event) {
            if (event.target instanceof HTMLAnchorElement) {
                closeIcon.checked = false;
                }
            }