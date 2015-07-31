{{--

* $collection (eg: $users)
* $name (eg: User)
* $route (eg: admin.user.create)
* $filters (see config.global.filters)

--}}

<form method="post" id="form-search" action="{{ URL::route( Route::currentRouteName() ) }}">
<div class="row list-header">
	
	<div class="col-sm-6">
		<div class="btn-toolbar wide-btns pull-left" role="toolbar">
			<div class="btn-group" style="padding:1px">
				<button onclick="window.location.href='{{ route($route, [], false) }}';" type="button" class="btn btn-success" title="New {{ $name }}" alt="New {{ $name }}">
					<i class="fa fa fa-plus" style="margin-right: 3px;"></i>
					New {{ $name }}
				</button>
			</div>

			<div class="btn-group">
				<input type="text" name="keywords" placeholder="Search..." class="form-control" value="{{ Input::get('keywords') }}">
				@if(Input::get('keywords'))
					<a id="search-button" title="Clear search" alt="Clear search" href="#" style="color: #333;">
						<i class="fa fa-times form-control-feedback" style="top: 9px"></i>
					</a>
				@else
					<a id="search-button" title="Search" alt="Search" href="#" style="color: #333;">
						<i class="fa fa-search form-control-feedback" style="top: 9px"></i>
					</a>
				@endif
			</div>

		</div>
	</div>


	<div class="col-sm-6">
		
	</div>

</div>
</form>