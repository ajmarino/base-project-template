<?php date_default_timezone_set('America/New_York'); ?>
<!DOCTYPE html>
<!--[if lt IE 7]>       <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>          <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>          <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->  <html class="no-js" lang="en"> <!--<![endif]-->
<head>
    <title><?php echo $options['title']; ?></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="description" content="<?php echo $options['tagline'];?>" />
    <meta name="author" content="<?php echo $options['author']; ?>">
    <link rel="icon" href="<?php echo $relative_base; ?>img/favicon-<?php echo $options['theme'];?>.png" type="image/x-icon">

    <!-- Mobile -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="<?php echo $relative_base; ?>css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo $relative_base; ?>css/site.css">
    <link rel="stylesheet" href="<?php echo $relative_base; ?>css/daux-<?php echo $options['theme'];?>.min.css">

    <script src="<?php echo $relative_base; ?>js/modernizr-2.6.2.min.js"></script>
</head>
<body>


<div class="container">

    <header class="header header--main">
        <a class="logo logo--main" href="<?php echo get_url('index'); ?>"><?php echo $options['title']; ?></a>
        
        <button type="button" class="btn btn--nav toggle-menu" id="menu-spinner-button">
            <i class="fa fa-bars"></i>
        </button>
    </header>

    
    <div id="smoothContent" class="content m-scene">
        <div id="sub-nav-collapse" class="sidebar">
            
            <div class="nav">
                <?php echo get_navigation($file); ?>

                <?php if ( !empty($options['links']) ) { ?>
                    <nav class="nav nav--extras">
                        <?php foreach($options['links'] as $name => $url) { ?>
                            <a href="<?php echo $url;?>" target="_blank" class="nav__link nav__link--alt"><?php echo $name;?></a>
                        <?php } ?>
                    </nav>
                    

                    <a href="#" id="toggleCodeBlocks" class="nav__link nav__link--alt nav__link--code-blocks" data-state="visible">Hide Code Blocks</a>
                <?php } ?>
            </div>
            
        </div>

        <main class="main scene_element scene_element--fadein">
            <a href="#" class="close toggle-menu"></a>
            <section class="page">
                <header class="header header--page">
                    <h1 class="h h--1"><?php echo (isset($page['title']))?$page['title']:$options['title'];?></h1>
                    <p class="p p--modified">Modified on <?php echo date('F d,Y H:i:s', $page["modified"]); ?></p>
                </header>

                <?php echo $page['content']; ?>
            </section>
        </main>
    </div>

    <footer class="footer footer--main">
        <p class="footer__text">Generated on <?php echo date('Y-m-d H:i:s'); ?></p>
    </footer>
</div>

<script src="<?php echo $relative_base; ?>js/jquery-1.11.0.min.js"></script>


<script src="<?php echo $relative_base; ?>js/highlight.min.js"></script>
<script src="<?php echo $relative_base; ?>js/jquery.smoothState.js"></script>
<!-- <script src="<?php echo $relative_base; ?>js/bootstrap.min.js"></script> -->
<script src="<?php echo $relative_base; ?>js/custom.js"></script>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

</body>
</html>
