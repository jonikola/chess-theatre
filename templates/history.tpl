<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../images/favicon.ico">

    <title>Chess Theatre</title>


    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../css/timeline.css" rel="stylesheet">
    <link href="../css/main.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/font-awesome.min.css">

    <script src="../js/jquery.min.js"></script>

    <link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=EB+Garamond' rel='stylesheet' type='text/css'>


    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
  <script src="js/html5shiv.js"></script>
  <script src="js/respond.min.js"></script>
  <![endif]-->
</head>

<body data-spy="scroll" data-offset="0" data-target="#theMenu" >

    <!-- Menu -->
    <nav class="menu" id="theMenu">
        <div class="menu-wrap">
            <h1 class="logo"><a href="../index.php#home" class="smoothScroll">CHESS THEATRE</a></h1>
            <i class="icon-remove menu-close"></i>
            <a href="../index.php#home" class="smoothScroll">Home</a>
            <a href="../index.php#players" class="smoothScroll">Players</a>
            <a href="history.php" class="smoothScroll">Historical timeline</a>

        </div>

        <!-- Menu button -->
        <div id="menuToggle"><i class="icon-reorder"></i></div>
    </nav>

    <!-- ========== HISTORY BACKGROUND SECTION ========== -->
    <section id="history-back" name="history-back"></section>
    <div id="f" class="vertical-section">
        <div class="logo" style="padding-left:103px; padding-top:10px; margin-bottom:-5px">
            <img onclick="window.location.href = '../index.php#home';" src="../images/logo.png">Historical timeline
        </div>
        <div class="container">
            <div id="timeline-panel" class="col-md-12 col-sm-12">
                <div id="timeline" >
                    <ul class="timeline">
                        {assign "side" "left"}
                        <li>
                            <div id="{$matches[0]['year']}"><h1 style="padding-left: 150px; padding-top:50px; margin-bottom:30px">{$matches[0]['year']}.</h1></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading"></div>
                                <a href="match.php?id={$match[0]['id']}">
                                    <div class="timeline-body">
                                        {$matches[0]['title']}                                    
                                    </div>
                                </a>
                            </div>
                        </li>
                        {assign "side" "right"}
                        {for $i = 1 to count($matches) - 1}
                        {if $side eq "left"}
                        {if $matches[$i]['year'] gt $matches[0]['year']}                                    
                        <li>
                            <div id="{$matches[$i]['year']}"><h1 style="padding-left: 150px; padding-top:50px; margin-bottom:30px">{$matches[$i]['year']}.</h1></div>
                            {else}
                            <li>
                                {/if}
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                    </div>
                                    <a href="match.php?id={$matches[$i]['id']}">
                                        <div class="timeline-body">
                                            {$matches[$i]['title']}                                    
                                        </div>
                                    </a>  
                                </div>
                            </li>
                            {assign "side" "right"}
                            {else}
                            {if $matches[$i]['year'] gt $matches[0]['year']}                                    
                            <li class="timeline-inverted">
                                <div id="{$matches[$i]['year']}"><h1 style="padding-left: 150px; padding-top:50px; margin-bottom:30px">{$matches[$i]['year']}.</h1></div>
                                {else}
                                <li class="timeline-inverted">
                                    {/if}
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                        </div>
                                        <a href="match.php?id={$matches[$i]['id']}">
                                            <div class="timeline-body">
                                                {$matches[$i]['title']}                                     
                                            </div>
                                        </a> 
                                    </div>
                                </li>
                                {assign "side" "left"}
                                {/if}
                                {/for}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 col-lg-offset-1">  <a href="#history-back" class="smoothScroll" ><h1><span class="glyphicon glyphicon-chevron-up"></h1></span></a></div>
                <div class="col-lg-3 ">   <a href="../index.php#players" class="smoothScroll" ><h1>Players</h1></a> </div>
                <div class="col-lg-3">  <a href="../index.php" ><h1>Home</h1></a></div>
            </div>


<!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="../js/classie.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/smoothscroll.js"></script>
    <script src="../js/main.js"></script>

</body>
</html>
