     <!-- ////////////////////////主導覽 開始//////////////////////// -->
        <!-- page-header START -->
        <input type="checkbox" name="" id="menu-controler">
        <input type="checkbox" name="" id="cart-controler">
        <input type="checkbox" name="" id="user-controler">



        <header class="page-header">
            <div class="container">
                <h1>
                    <a href="#" class="logo">
                        <span>麥面包</span>
                        <img src="img/phone/logo.png" alt="麥面包LOGO">
                    </a>    
                </h1>
                <label for="menu-controler" class="menu-btn">
                    <span>選單</span>
                    <i class="fas fa-bars"></i>
                    <i class="fas fa-times"></i>
                </label>
                <label for="cart-controler" class="cart-btn">
                    <span>購物</span>
                    <i class="fas fa-shopping-cart">
                        <span class="cart-num">2</span>
                    </i>
                </label>

                <nav class="main-nav" id="menu-toggle">
                    <ul class="menu">
                        <li>                    
                            <label for="user-controler" class="user-btn">
                                登入會員
                                <!-- <i class="fas fa-caret-down"></i> -->
                            </label>
                        </li>
                        <li><a href="#to-story">品牌故事</a></li>
                        <li><a href="#to-intro">麵包製成</a></li>
                        <li><a href="#to-news">最新消息</a></li>
                        <li><a href="#to-product">主打商品</a></li>
                        <li><a href="#to-media">影音媒體</a></li>
                        <li><a href="#to-retail-outlet">門市據點</a></li>  
                    </ul>
                    <ul class="social-link">
                        <li>
                            <a href="#">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fab fa-line"></i>
                            </a>
                        </li>
                    </ul> 
                    <label for="user-controler" class="user-btn">
                        <span>登入</span>
                        <i class="fas fa-user"></i>
                    </label>
                    <label for="cart-controler" class="cart-btn">
                        <span>購物</span>
                        <i class="fas fa-shopping-cart">
                            <span class="cart-num">2</span>
                        </i>
                    </label>
                </nav>
            </div>
        </header>
        <!-- page-header END -->

        <!-- pc-log-in START -->
        <section class="section user-form">
            <div class="container">
                <div class="topic">
                    <h2>
                        <img src="img/phone/logo.png" alt="麥面包LOGO">
                    </h2>
                </div>
                <div class="content">
                    <div class="item">
                        <h2>登入會員</h2>
                        <form class="log-in">
                            <input type="tel" placeholder="請輸入手機號碼" required="required">
                            <input type="password" placeholder="請輸入6-15碼英數混合密碼" required="required">
                            <div class="ps-memo">
                                <span>英文字母需區分大小寫</span>
                                <a href="#">忘記密碼?</a>
                            </div>
                            <input type="checkbox" name="記住我的帳號" id="">
                            <input type="submit" value="登入會員">
                        </form>
                    </div>
                    <div class="item">
                        <h2>註冊會員</h2>
                        <form class="sign-up">
                            <input type="tel" placeholder="請輸入手機號碼" required="required">
                            <input type="password" placeholder="請輸入6-15碼英數混合密碼" required="required">
                            <div class="ps-memo">
                                <span>英文字母需區分大小寫</span>
                            </div>
                            <input type="password" placeholder="請再次確認密碼" required="required">
                            <input type="submit" value="註冊會員">
                        </form>
                    </div>
                </div> 
                <label for="user-controler" class="close-btn">
                    <span>登入會員關閉</span>
                    <i class="fas fa-times"></i>
                </label>
            </div>
        </section> 
        <!-- pc-log-in END -->
    <!-- ////////////////////////主導覽 結束//////////////////////// --> 