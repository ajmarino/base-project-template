<header id="main-navbar" class="navbar navbar-inverse" role="navigation">

	<!-- Main menu toggle -->
	<button type="button" id="main-menu-toggle">
		<i class="navbar-icon fa fa-bars icon"></i>
		<span class="hide-menu-text">HIDE MENU</span>
	</button>
	

	<div class="navbar-inner">

		<!-- Main navbar header -->
		<div class="navbar-header">

			<!-- Logo -->
			<a href="/admin" class="navbar-brand">
				<b>Base Project Template</b>
			</a>

			<!-- Main navbar toggle -->
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar-collapse">
				<i class="navbar-icon fa fa-bars"></i>
			</button>

		</div> <!-- / .navbar-header -->
	
		
		
		<div id="main-navbar-collapse" class="collapse navbar-collapse main-navbar-collapse">
			<div class="right clearfix">
				<ul class="nav navbar-nav pull-right right-navbar-nav">
					<li class="dropdown">
						<a href="#" class="dropdown-toggle user-menu" data-toggle="dropdown">
							<img src="http://api.randomuser.me/portraits/thumb/lego/{{ rand(1, 10) }}.jpg" alt="">
							<span>Some Person</span>
							<i class="fa fa-angle-down"></i>
						</a>
						
						<ul class="dropdown-menu">
							<li>
								<a href="#">
									<i class="dropdown-icon fa fa-user"></i>
									My Profile
								</a>
							</li>

							<li>
								{{-- <a href="{{ URL::route('admin.system.settings') }}"> --}}
								<a href="#">
									<i class="dropdown-icon fa fa-gear"></i>
									Settings
								</a>
							</li>

							<li>
								<a href="{{ URL::route('home') }}" target="_blank">
									<i class="dropdown-icon fa fa-eye"></i>
									Preview Site
								</a>
							</li>

							<li>
								{{-- <a href="{{ URL::route('logout') }}"> --}}
								<a href="#">
									<i class="dropdown-icon fa fa-power-off"></i>
									Log Out
								</a>
							</li>
						</ul>

					</li>
				</ul> <!-- / .navbar-nav -->
			</div> <!-- / .right -->
		</div> <!-- / #main-navbar-collapse -->


	</div> <!-- / .navbar-inner -->
</header>