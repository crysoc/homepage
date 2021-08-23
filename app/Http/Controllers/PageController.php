<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PageController extends Controller
{
    public function amas() {
        /*$url = 'https://crypto-society.com/wp-json/wp/v2/posts';
        $response = Http::get($url);
        dd($response->body());*/

        return view('pages/amas');
    }
}
