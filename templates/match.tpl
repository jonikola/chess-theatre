<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../images/favicon.ico">

    <title>Chess Theatre</title>

    <link rel="stylesheet" type="text/css" href="../css/chess-replayer.css" />

    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
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


      <script type="text/javascript">
        $(document).ready(function() {
            $('.chess').replayer({
                size: 'medium',
                lightColor: "#fff",
                darkColor: "#1D011F",
                boardOnly: "true"
            });            
        });
    </script>


</head>

<body data-spy="scroll" data-offset="0" data-target="#theMenu">

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


    
    <!-- ========== MATCH SECTION ========== -->
    <section id="match" name="match"></section>
    <div id="matchwrap" class="vertical-section">
        <div class="container">
            <div class="logo">
                <img onclick="window.location.href = '../index.php#home';" src="../images/logo.png">
            </div>

            <br>
            <h2 id="year"><a href="history.php#{$match['year']}" class="smoothScroll">{$match['year']}</a></h2>
            <div class="row">

                <div class="col-sm-3">
                    <a href="player.php?id={$players[0]['id']}">
                        <div class="circle" style="background-image: 
                        url('../player_images/{$players[0]['img']}')">
                        <div class="side-badge-white" style="background-image: 
                        url('../images/white.png')"></div></div>


                        <h3 class>{$players[0]['name']}</h3></a>
                    </div>

                    <div class="col-sm-6">
                        <div class="chess has-tooltip-top" data-toggle="tooltip" data-placement="top" title="Scroll mouse wheel!">
                            {$moves}
                        </div>
                    </div>


                    <div class="col-sm-3">
                        <a href="player.php?id={$players[1]['id']}">
                            <div class="circle" style="background-image: 
                            url('../player_images/{$players[1]['img']}')">
                            <div class="side-badge-black" style="background-image: 
                            url('../images/black.png')"></div></div>
                            <h3>{$players[1]['name']}</h3></a>
                        </div>


                    </div>


                </div><!-- /container -->
                <div id="other">
                    <div class="col-sm-12">
                        <div class="row">
                            <div class="col-sm-4"></div>
                            {if $match['winner'] eq "Draw"}
                            <div class="col-sm-4 col-sm-offset-4"><i><h3>Game ends in draw.</i></h3></div>
                            {else}
                            <div class="col-sm-4 col-sm-offset-4"><i><h3>{$match['winner']} won this game.</i></h3></div>
                            {/if}
                        </div>
                    </div>

                </div>
            </div><!-- /matchwrap -->


            <!-- ========== OHTER MATCHES SECTION ========== -->
            <section id="matches" name="matches"></section>
            <div id="f" class="vertical-section">

                <div class=" container">
                    <div class="row">
                        <div class="col-sm-2 col-sm-offset-3">
                            <a href="player.php?id={$players[0]['id']}">
                                <div class="circle has-tooltip-left" style="background-image: 
                                url('../player_images/{$players[0]['img']}')" data-toggle="tooltip" data-placement="left" title="{$players[0]['name']}"></div>
                            </a>
                        </div>
                        <div class="col-sm-2">


                            <h1>VS</h1></div>

                            <div class="col-sm-2" >
                                <a href="player.php?id={$players[1]['id']}">
                                    <div class="circle has-tooltip-right" style="background-image: 
                                    url('../player_images/{$players[1]['img']}')" data-toggle="tooltip" data-placement="right" title="{$players[1]['name']}"></div>
                                </a>
                            </div>
                        </div>

                        <p class="centered"><i class="icon icon-circle"></i><i class="icon icon-circle"></i><i class="icon icon-circle"></i></p>

                        <center><div>
                            <h3>Other matches by these two players</h3>
                            {if empty($otherMatches)}
                            <h4>No other matches found.</h4>
                            {else}
                            <ul>
                                {foreach $otherMatches as $om}
                                <div class="row">
                                    <center><a href="match.php?id={$om['id']}">{$om['title']}, {$om['year']}</a></center>
                                </div>
                                {/foreach}
                            </ul>
                            {/if}
                        </div></center>                             
                    </div>
                </div><!-- /container -->


                <div class="row">
                   <center>   <a href="#match" class="smoothScroll" ><h1><span class="glyphicon glyphicon-chevron-up"></h1></span></a></center>
               </div>

           </div><!-- /f -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="../js/classie.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/smoothscroll.js"></script>
    <script src="../js/main.js"></script>
    <script type="text/javascript" src="../js/jquery.chess-replayer.js"></script>
</body>
</html>
