@extends('layouts.admin')

@section('main-content')

	@include('flash::message')

	<!-- Form -->
	{!! Form::open([
 		'class' => 'panel signin-form',
 		'id'    => 'signin-form_id',
		'route' => 'login',
	]) !!}

		<div class="form-group">
			{!! Form::email('email', '', ['class' => 'form-control input-lg', 'id' => 'username_id', 'placeholder' => 'Email']) !!}
		</div> <!-- / Username -->

		<div class="form-group signin-password">
			{!! Form::password('password', ['class' => 'form-control input-lg', 'id' => 'password_id', 'placeholder' => 'Password']) !!}
		</div> <!-- / Password -->

		<div class="form-actions">
			{!! Form::submit('Sign In', ['class' => 'btn btn-primary btn-block btn-lg']) !!}
		</div> <!-- / .form-actions -->
	{!! Form::close() !!}
	<!-- / Form -->

@stop