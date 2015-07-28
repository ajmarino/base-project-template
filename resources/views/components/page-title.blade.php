<title>
	@if ($app->env !== "production")
		[{{ strtoupper($app->env) }}]
	@endif
	
	@if ( isset($title) )
		{{ $title . " | " }}
	@endif

	Base Project Template
</title>