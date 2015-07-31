<section id="main-menu" role="navigation">
	<div id="main-menu-inner">
		
		<div class="menu-content top" id="menu-content-demo">
			<div>
				<div class="text-bg">
					<span class="text-sm">Logged in as</span><br/>
					<span class="text-slim">Some Person</span>
				</div>


				<img src="http://api.randomuser.me/portraits/thumb/lego/{{ rand(1, 10) }}.jpg" alt="" class="">
				<div class="btn-group">
					{{-- <a href="{{ URL::route('admin.user.edit', Auth::user()->id) }}" title="My Profile" alt="My User Record" class="btn btn-xs btn-primary btn-outline dark"><i class="fa fa-user"></i></a>
					<a href="{{ URL::route('admin.system.settings') }}" title="System Settings" alt="" class="btn btn-xs btn-primary btn-outline dark"><i class="fa fa-cog"></i></a>
					<a href="{{ URL::route('logout') }}" title="Logout" alt="Logout" class="btn btn-xs btn-danger btn-outline dark"><i class="fa fa-sign-out"></i></a> --}}
					<a href="#" title="My Profile" alt="My User Record" class="btn btn-xs btn-primary btn-outline dark"><i class="fa fa-user"></i></a>
					<a href="#" title="System Settings" alt="" class="btn btn-xs btn-primary btn-outline dark"><i class="fa fa-cog"></i></a>
					<a href="#" title="Logout" alt="Logout" class="btn btn-xs btn-danger btn-outline dark"><i class="fa fa-sign-out"></i></a>
				</div>
			</div>
		</div>


				<ul class="navigation">

			<li class="{{ Route::currentRouteName() == 'admin-dashboard' ? 'active' : '' }}">
				<a href="{{ route('admin-dashboard', [], false) }}">
					<i class="menu-icon fa fa-dashboard"></i>
					<span class="mm-text">Dashboard</span>
				</a>
			</li>
			
			<li class="mm-dropdown mm-dropdown-root {{ Request::is('admin/system/*') || Request::is('admin/user/*') ? 'open' : '' }} ">
				<a href="#"><i class="menu-icon fa fa-gear"></i><span class="mm-text mmc-dropdown-delay animated fadeIn">System</span><!-- <span class="label label-warning">Updated</span> --></a>
				<ul class="mmc-dropdown-delay animated fadeInLeft" style="">
					<li class="{{ Route::currentRouteName() === 'system-notifications' ? 'active' : '' }}">
						<a tabindex="-1" href="{{ route('system-notifications') }}">
							<i class="menu-icon fa fa-bell"></i>
							<span class="mm-text">Notifications</span>
						</a>
					</li>

					{{-- @if(Auth::user()->admin())
					<li class="{{ Request::is('admin/user/*') ? 'active' : '' }}">
						<a href="{{ route('admin.user.index', [], false) }}">
							<i class="menu-icon fa fa-user"></i>
							<span class="mm-text">Users</span>
						</a>
					</li> --}}

					<li class="{{ Route::currentRouteName() == 'system-settings' ? 'active' : '' }}">
						<a tabindex="-1" href="{{ route('system-settings') }}">
							<i class="menu-icon fa fa-gears"></i>
							<span class="mm-text">Settings</span>
						</a>
					</li>

					<li class="{{ Route::currentRouteName() == 'system-utilities' ? 'active' : '' }}">
						<a tabindex="-1" href="{{ route('system-utilities') }}">
							<i class="menu-icon fa fa-wrench"></i>
							<span class="mm-text">Utilities</span>
						</a>
					</li>
					{{-- @endif --}}
				</ul>
			</li>

			

			<li class="mm-dropdown mm-dropdown-root {{ Request::is('admin/templates/*') ? 'open' : '' }} ">
				<a href="#"><i class="menu-icon fa fa-desktop"></i><span class="mm-text mmc-dropdown-delay animated fadeIn">Templates</span></a>

				<ul class="mmc-dropdown-delay animated fadeInLeft" style="">
					<li class="{{ Route::currentRouteName() === 'template-list-view' ? 'active' : '' }}">
						<a tabindex="-1" href="{{ route('template-list-view') }}">
							<i class="menu-icon fa fa-list"></i>
							<span class="mm-text">List View</span>
						</a>
					</li>
				</ul>
			</li>


			
		</ul> <!-- / .navigation -->
		
	</div> <!-- / #main-menu-inner -->

	<div class="menu-content animated fadeIn">
		<a href="{{ URL::route('home') }}" target="_blank" class="btn btn-primary btn-block btn-outline dark">View Site <i class="fa fa-external-link"></i></a>
	</div>

</section>

<div id="main-menu-bg"></div>