<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" href="images/favicon.ico">

	<title>Chess Theatre</title>

	<!-- Bootstrap core CSS -->
	<link href="css/bootstrap.css" rel="stylesheet">

	<!-- Custom styles for this template -->
	<link href="css/main.css" rel="stylesheet">
	<link rel="stylesheet" href="css/font-awesome.min.css">

	<script src="js/jquery.min.js"></script>
	

	
	<link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=EB+Garamond' rel='stylesheet' type='text/css'>

	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
      <script src="js/respond.min.js"></script>
      <![endif]-->
  </head>

  <body data-spy="scroll" data-offset="0" data-target="#theMenu">

  	<!-- Menu -->
  	<nav class="menu" id="theMenu">
  		<div class="menu-wrap">
  			<h1 class="logo"><a href="index.php#home" class="smoothScroll">CHESS THEATRE</a></h1>
  			<i class="icon-remove menu-close"></i>
  			<a href="index.php#home" class="smoothScroll">Home</a>
  			<a href="index.php#players" class="smoothScroll">Players</a>
  			<a href="pages/history.php" class="smoothScroll">Historical timeline</a>
  		</div>

  		<!-- Menu button -->
  		<div id="menuToggle"><i class="icon-reorder"></i></div>
  	</nav>



  	<!-- ========== HEADER SECTION ========== -->
  	<section id="home" name="home"></section>
  	<div id="headerwrap" class="vertical-section">
  		<div class="container">
  			<div class="logo">
  				<img src="images/logo.png">
  			</div>
  			<br>
  			<div class="row">
  				<h1>CHESS THEATRE</h1>
  				<br>
  				<h3> Home of all chess lovers.</h3>
  				<br>
  				<br>

  			</div>
  			<div id="recomendation">
  				<div class="col-sm-12">
  					<div class="col-sm-2 col-sm-vertical-fix"><a href="#players" class="smoothScroll"><h2>Players <h4><span class="glyphicon glyphicon-chevron-down"></span><h4></h2></a></div>

  					<div class="col-sm-6 col-sm-offset-4 col-sm-vertical-fix">
  						<div class="row">
  						<h3><i> We recommend:  <a href="pages/match.php?id={$match['matchId']}"> {$match['title']}, {$match['year']}</a></i></h3>
  						</div>
  						<div class="row">
  							{if $match['winner'] eq "Draw"}
  							<div class="col-sm-4 col-sm-offset-8 col-sm-vertical-fix"><i><h4>Game ends in draw.</i></h4></div>
  							{else}
  							<div class="col-sm-4 col-sm-offset-8 col-sm-vertical-fix"><i><h4>{$match['winner']} won this game.</i></h4></div>
  							{/if}
  						</div>
  					</div>
  				</div>

  			</div>
  		</div><!-- /container -->
  	</div><!-- /headerwrap -->


  	<!-- ========== PLAYERS SECTION ========== -->
  	<section id="players" name="players"></section>
  	<div id="f" class="vertical-section">
  		<div class=" container">
  			<div class="row">
  				<h3>PLAYERS</h3>
  				<p class="centered"><i class="icon icon-circle"></i><i class="icon icon-circle"></i><i class="icon icon-circle"></i></p>


  				<div class="col-lg-6 col-lg-offset-3">
  					{foreach $players as $player}
  					<div class='col-lg-4'>
  						<a href="pages/player.php?id={$player['id']}">
  							<div class="circle" style="background-image: 
  							url('player_images/{$player['img']}')">

  						</div>
  						{$player['name']}</a>
  					</div>

  					{/foreach}
  				</div>								
  			</div>
  		</div><!-- /container -->

  	</div><!-- /f -->
  	<div class="row">
  		<div class="col-lg-3 col-lg-offset-1">  <a href="#home" class="smoothScroll" ><h1><span class="glyphicon glyphicon-chevron-up"></h1></span></a></div>
  		<div class="col-lg-3 col-lg-offset-1">  <a href="pages/history.php" ><h1>Historical timeline</h1></a></div>
  	</div>


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/classie.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/smoothscroll.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
