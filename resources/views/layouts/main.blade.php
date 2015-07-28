<!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @section('meta-content')
        @include('components.page-title')
        <meta name="description" content="">
    @show
    
    @section('meta-og')
        <meta property="og:title"       content="{{ config('global.meta.og-title') }}">
        <meta property="og:site_name"   content="{{ config('global.meta.site_name') }}">
        <meta property="og:url"         content="{{ Request::url() }}">
        <meta property="og:description" content="{{ config('global.meta.og-description') }}">
        <meta property="og:type"        content="website">
    @show

    @section('meta-twitter')
        <meta name="twitter:card"        content="summary_large_image">
        <meta name="twitter:site"        content="{{ config('global.meta.twit-site') }}">
        <meta name="twitter:title"       content="{{ config('global.meta.twit-title') }}">
        <meta name="twitter:description" content="{{ config('global.meta.twit-description') }}">
        <meta name="twitter:image:src"   content="{{ config('global.meta.twit-image') }}">
    @show

    @include('components.favicons')


    <link rel="stylesheet" href="{{ elixir('css/app.css') }}">
</head>
<body>
    <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->


    @yield('main-content')
    
    {{--
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-2.1.4.min.js"><\/script>')</script>
    --}}

    <script src="js/plugins.js"></script>
    <script src="{{ elixir('js/app.js') }}"></script>

    @include('components.tracking')
</body>
</html>
