@extends('layouts.admin')

@section('main-content')

	@include('admin.components.page-header', [
		'page_title' => 'List View',
		'icon'       => 'list'
	])
	
	
	@include('admin.components.list-header', [
		'route' => 'template-list-view',
		'name'  => 'button'
	])
	
	
	<section class="list-view-type">
		<h3 class="header-1">No results list view</h3>
		<div id="no-results-list" class="tablet-light list-viewe">
			<table class="table table-bordered table-striped">
				
				<thead><tr>
					
					<th>Column</th>
					<th>Column</th>
					<th>Column</th>
					<th>Column</th>
					<th>Column</th>

				</tr></thead>

				<?php 
					$items = [];
				?>

				<tbody>
					@forelse ($items as $item)
						<tr class="js-link">
							
						</tr>
					@empty
						<tr class="no-items">
							<td colspan="5">No items to display</td>
						</tr>
					@endforelse

				</tbody>
			</table>
		</div>
	</section>



	<section class="list-view-type">
		<h3 class="header-1">Normal results list view</h3>
		<div id="normal-results-list" class="tablet-light list-viewe">
			<table class="table table-bordered table-striped">
				
				<thead><tr>
					<th>Column</th>
					<th>Column</th>
				</tr></thead>

				<?php 
					$results = [
						'id'   => 1,
						'name' => 'test'
					];
				?>

				<tbody>
					@forelse ($results as $key => $value)
						<tr class="js-link">
							<td>{{ $key }}</td>
							<td>{{ $value }}</td>
						</tr>
					@empty
						<tr class="no-items">
							<td colspan="2">No items to display</td>
						</tr>
					@endforelse

				</tbody>
			</table>
		</div>
	</section>


@stop