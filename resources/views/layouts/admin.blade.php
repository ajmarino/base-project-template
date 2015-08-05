<!doctype html>
<html class="gt-ie8 gt-ie9 not-ie no-js" lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	@section('meta-content')
		@include('components.page-title')
	@show
	
	@include('components.favicons')

	<link rel="stylesheet" href="/css/admin/pixel-admin.css">
	<link rel="stylesheet" href="/css/admin/admin.css">
</head>
<body id="admin" class="admin theme-silver main-menu-animated main-menu-fixed main-navbar-fixed {{ Route::currentRouteName() == 'login' ? 'page-signin' : '' }}">

	@if (Route::currentRouteName() !== 'login')
		<div id="main-wrapper" class="container">
			@include('admin.components.header')

			@include('admin.components.sidebar')


			<div id="content-wrapper">
				{{--
					if errors:
					make sure to run `php artisan vendor:publish`
					make sure the settings are added correctly, see readme
				--}}
				{{-- @include('flash::message') --}}

				@yield('main-content')
			</div>

		</div>
	@else
		
		<div class="signin-container">
			@yield('main-content')
		</div>
	@endif


	@yield('modals')
	
	{{--
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="js/vendor/jquery-2.1.4.min.js"><\/script>')</script>
	--}}

	<script src="/js/plugins.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js" type="text/javascript" charset="utf-8"></script>
	<script>window.jQuery || document.write(unescape("%3Cscript src='/js/vendor/jquery-ui.min.js' type='text/javascript'%3E%3C/script%3E"))</script>
	<script src="/js/admin/pixel-admin.js"></script>
	<script src="/js/admin/admin.js"></script>

	@include('admin.components.flash')
	
</body>
</html>
