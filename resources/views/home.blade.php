@extends('layouts.main')

@section('meta-title', 'CRYPTO SOCIETY - No. 1 Crypto Community')
@section('meta-description', 'Learn to invest in Crypto within a familiar environment and without any pressure. Join us on Telegram and ask us all the questions you have.')
@section('wrapper-class', 'homepage')

@section('content')
<div class="bg-wrapper homepage-teaser-bwt">
    <div class="container">
        <div class="homepage-teaser-bwt__content">
            <div class="homepage-teaser-bwt__image">
                <img class="homepage-teaser-bwt__logo" alt="crypto society" src="{{ url('/images/logo-crypto-society.png') }}">
            </div>

            <div class="homepage-teaser-bwt__typewriter">
                <h3 class="typewriter-text">#1 Crypto Community</h3>
            </div>
            <div class="text-center">
                <a href="https://t.me/cryptosocietyy" target="_blank">
                    <i class="bi bi-telegram homepage-teaser-bwt__telegram"></i>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="bg-wrapper homepage-teaser-social">
    <div class="container">
        <div class="row flex-column">
            
            <h3>Connect with <strong>us</strong></h3>

            <div class="homepage-teaser-social__iconlist">
                
                <a href="https://t.me/cryptosocietyy" target="_blank">
                    <i class="bi bi-telegram homepage-teaser-social__icon homepage-teaser-social__icon--telegram"></i>
                    <h4>Telegram</h4>
                </a>

                <a href="https://twitter.com/cryptosocietytg" target="_blank">
                    <i class="bi bi-twitter homepage-teaser-social__icon homepage-teaser-social__icon--twitter"></i>
                    <h4>Twitter</h4>
                </a>

                <a href="https://www.youtube.com/channel/UChGgsN41q7q9hiXCg8GRMvw" target="_blank">
                    <i class="bi bi-youtube homepage-teaser-social__icon homepage-teaser-social__icon--youtube"></i>
                    <h4>YouTube</h4>
                </a>

                <a href="https://www.facebook.com/CryptoSocietyLtd/" target="_blank">
                    <i class="bi bi-facebook homepage-teaser-social__icon homepage-teaser-social__icon--facebook"></i>
                    <h4>Facebook</h4>
                </a>
                
            </div>
        </div>
    </div>
</div>

<div class="wave wave--network">
    <svg class="wave__svg wave__svg--network" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path class="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
        c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
        c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
    </svg>
</div>

<div class="bg-wrapper homepage-teaser-network">
    <div class="container">
        <div class="homepage-teaser-network__contentwrapper">
            <div class="homepage-teaser-network__content">
                <h3><strong>Our</strong><br>Community</h3>
                <ul>
                    <li>More than 3.000 active member</li>
                    <li>Regular AMAs in telegram</li>
                    <li>Massive rewards</li>
                    <li>Familiar environment</li>
                </ul>
            </div>

            <div class="homepage-teaser-network__video">
                <video class="lazy" autoplay muted loop playsinline>
                    <source data-src="{{ url('/images/34193068-preview.mp4') }}" type="video/mp4" />
                </video>

                <div class="layer"></div>

                    <!--
                        <img class="homepage-teaser-bwt__logo" alt="crypto society" src="https://64.media.tumblr.com/582a1de7f1d576b042af2b83215ef19e/tumblr_nnix6u7ig21rnbafjo1_400.gifv">
                    -->
                </div>
        </div>
    </div>
</div>

<div class="bg-wrapper homepage-teaser-benefits">
    <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
    <div class="container">
        <div class="homepage-teaser-benefits__carts">
            <div class="homepage-teaser-benefits__cart">
                <div class="homepage-teaser-benefits__number">1</div>
                <h3>Learn</h3>
                <p class="homepage-teaser-benefits__text">Ask us any question you have and you will always get an answer. Our team have many years of knowledge to share with you but we also want to learn from you!</p>
            </div>
            <div class="homepage-teaser-benefits__cart">
                <div class="homepage-teaser-benefits__number">2</div>
                <h3>Apply</h3>
                <p class="homepage-teaser-benefits__text">If you follow us for some weeks or even days you will see that you are going to understand the world of crypto and you will be able to apply your knowledge.</p>
            </div>
            <div class="homepage-teaser-benefits__cart">
                <div class="homepage-teaser-benefits__number">3</div>
                <h3>Succeed</h3>
                <p class="homepage-teaser-benefits__text">There will be ups and downs on your way. Learn from the downs and earn from the ups. Doesn't matter which way it goes we go together. Keep us updated and we will support you the best way we can.</p>
            </div>
        </div>
    </div>
</div>
@endsection

