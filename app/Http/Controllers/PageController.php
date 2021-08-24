<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PageController extends Controller
{
    public function amas() {
        $url = 'https://wordpress.crypto-society.com/wordpress/wp-json/wp/v2/posts';
        $response = Http::get($url);
        $bodyJson = $response->body();
        $bodyArr = json_decode($bodyJson);
        dd($bodyArr);

        return view('pages/amas');
    }
}
