@extends('layouts.admin')

@section('main-content')
	
	@include('admin.components.page-header', [
        'page_title' => 'Dashboard',
        'icon'       => 'dashboard'
    ])
    
@stop