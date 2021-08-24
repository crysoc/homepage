@extends('layouts.main')

@section('meta-title', 'CRYPTO SOCIETY - No. 1 Crypto Community')
@section('meta-description', 'Learn to invest in Crypto in a familiar environment without any pressure. Join our Telegram.')
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
                <i class="bi bi-telegram homepage-teaser-bwt__telegram"></i>
            </div>
        </div>
    </div>
    <canvas id="scene" class="homepage-teaser-bwt__canvas"></canvas>
</div>

<div class="bg-wrapper homepage-teaser-social">
    <div class="container">
        <div class="row flex-column">
            
            <h3>Connect with <strong>us</strong></h3>

            <div class="homepage-teaser-social__iconlist">
                
                <a href="#">
                    <i class="bi bi-telegram homepage-teaser-social__icon homepage-teaser-social__icon--telegram"></i>
                    <h4>Telegram</h4>
                </a>

                <a href="#">
                    <i class="bi bi-twitter homepage-teaser-social__icon homepage-teaser-social__icon--twitter"></i>
                    <h4>Twitter</h4>
                </a>

                <a href="#">
                    <i class="bi bi-youtube homepage-teaser-social__icon homepage-teaser-social__icon--youtube"></i>
                    <h4>YouTube</h4>
                </a>

                <a href="#">
                    <i class="bi bi-facebook homepage-teaser-social__icon homepage-teaser-social__icon--facebook"></i>
                    <h4>Facebook</h4>
                </a>
                
            </div>
        </div>
    </div>
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
    <div class="container">
        <div class="homepage-teaser-benefits__carts">
            <div class="homepage-teaser-benefits__cart">
                <div class="homepage-teaser-benefits__number">1</div>
                <h3>Learn</h3>
            </div>
            <div class="homepage-teaser-benefits__cart">
                <div class="homepage-teaser-benefits__number">2</div>
                <h3>Apply</h3>
            </div>
            <div class="homepage-teaser-benefits__cart">
                <div class="homepage-teaser-benefits__number">3</div>
                <h3>Invest</h3>
            </div>
        </div>
    </div>
</div>
@endsection

