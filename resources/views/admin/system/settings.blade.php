@extends('layouts.admin')

@section('main-content')

	@include('admin.components.page-header', [
		'page_title' => 'Settings',
		'icon'       => 'cogs'
	])

@stop