@extends('layouts.admin')

@section('main-content')

	@include('admin.components.page-header', [
		'page_title' => 'Notifications',
		'icon'       => 'bell'
	])
	
	
	@include('admin.components.list-header', [
		'route' => 'system-notifications',
		'name'  => 'notification'
	])
	
	<div id="notificiation-list" class="tablet-light list-viewe">
		<table class="table table-bordered table-striped">
			
			<thead><tr>
				
				<th>Column</th>
				<th>Column</th>
				<th>Column</th>
				<th>Column</th>
				<th>Column</th>

			</tr></thead>

			<?php 

				$collection = [];
			?>

			<tbody>
				@forelse ($collection as $item)
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
@stop