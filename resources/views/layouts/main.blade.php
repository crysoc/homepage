<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('meta-title')</title>

    <meta name="description" content="@yield('meta-description')" />

    <link rel="icon" type="image/png" href="{{ url('/images/favicon.png') }}">

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" defer></script>
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app" class="@yield('wrapper-class')">

        <div class="navigation-wrapper js-navigation-wrapper">
            <div class="container">
                <header class="header">
                    <div class="header__logo-wrapper">
                        <a href="/">
                            <img class="header__logo" alt="crypto society" src="{{ url('/images/logo-crypto-society.png') }}">
                        </a>
                    </div>

                    <ul class="navigation js-navigation">
                        <li class="navigation__item">
                            <a class="navigation__link navigation__link--vip" href="#">VIP</a>
                        </li>
                        <li class="navigation__item">
                            <a class="navigation__link" href="/amas">AMAs</a>
                        </li>
                    </ul>

                    <div class="navigation__burger">
                        <button class="hamburger hamburger--elastic js-hamburger" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </header>
            </div>
        </div>

        <main>
            @yield('content')
        </main>

        <footer class="footer">
            <div class="container">
                <div class="footer__iconlist">
                    <a href="https://t.me/cryptosocietyy" target="_blank">
                        <i class="bi bi-telegram footer__icon footer__icon--telegram"></i>
                    </a>

                    <a href="https://twitter.com/cryptosocietytg" target="_blank">
                        <i class="bi bi-twitter footer__icon footer__icon--twitter"></i>
                    </a>

                    <a href="https://www.youtube.com/channel/UChGgsN41q7q9hiXCg8GRMvw" target="_blank">
                        <i class="bi bi-youtube footer__icon footer__icon--youtube"></i>
                    </a>

                    <a href="https://www.facebook.com/CryptoSocietyLtd/" target="_blank">
                        <i class="bi bi-facebook footer__icon footer__icon--facebook"></i>
                    </a>
                </div>

                <div class="footer__links">
                    <a href="#">About us</a>
                    <a href="#">Contact</a>
                    <a href="#">AMAs</a>
                </div>

                <div class="footer__copyright">
                    &copy; Copyright Crypto Society
                </div>
            </div>
        </footer>

        @yield('custom-js')
    </div>
</body>
</html>
