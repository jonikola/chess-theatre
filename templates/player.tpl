<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../images/favicon.ico">

    <title>Chess Theatre</title>

    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.css" rel="stylesheet">

    <!--dataTables-->
    <link href="../css/dataTables/dataTables.bootstrap.css" rel="stylesheet">

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


    
    <!-- ========== PLAYER SECTION ========== -->
    <section id="player" name="player"></section>

    <div id="playerwrap" class="vertical-section">

        <div class="container">
            <div class="logo">
                <img onclick="window.location.href = '../index.php#home';" src="../images/logo.png">
            </div>

            <br>
            <h2 id="year"><a href="history.php#{$player['birthyear']}">{$player['birthyear']}</a></h2>
        </div>
        <div id="player-panel">
            <div class="row">

                <div class="col-lg-2 col-lg-offset-1">
                    <div class="circle" style="background-image: 
                    url('../player_images/{$player['img']}')">
                </div>

                <div class="row"><h3>{$player['name']} </h3></div>
                
            </div>


            <div class="col-lg-4">
                <div class="row">
                    <div class="col-lg-6">

                     <div class="row" style="margin-top:2em"><h3>Country: <a href="#"  data-toggle="modal" data-target="#myModal">{$player['country']}</a> </h3></div>
                     <div class="row" ><h4>{$player['title']} </h4></div>
                     
                 </div></div>
                 <br>
                 <div class="row">
                    <div class="col-lg-12">
                        <p>{$player['bio']}</p>
                    </div></div>
                    
                </div>

                <div class="col-lg-5">
                    <div class="col-lg-10">
                        <h3>Matches</h3>
                        <!--Table -->
                        <div class="table-responsive">
                            <table class="table" id="dataTable-matches">
                                <thead>
                                    <th></th>
                                    <th></th>
                                </thead>

                                <tbody>
                                   {foreach $matches as $match}
                                   <tr>
                                    <td><a href="match.php?id={$match['id']}">{$match['title']}</a></td>
                                    <td><a href="history.php#{$match['year']}" class="smoothScroll">{$match['year']}</a></td>
                                    
                                </tr>
                                {/foreach}
                                
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>            
        </div>

    </div> <!--player-panel-->


</div><!-- /matchwrap -->

<div class="row">
   <div class="col-lg-3 col-lg-offset-4">   <a href="../index.php" class="smoothScroll" ><h1>Home</h1></a> </div>
   <div class="col-lg-3">  <a href="history.php" ><h1>Historical timeline</h1></a></div>
</div>



<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
        <h2 style="color:white">Players from {$player['country']}</h2> 
        <div class="modal-body">

            {foreach $playersFromSameCountry as $pss}
            <div class='col-sm-3'>
                <a href="player.php?id={$pss['id']}" >
                    <div class="circle has-tooltip-bottom" style="background-image: 
                    url('../player_images/{$pss['img']}')" data-toggle="tooltip" data-placement="bottom" title="{$pss['name']}">

                </div>
            </a>
        </div>

        {/foreach}

    </div>

</div><!-- /.modal-content -->
</div><!-- /.modal-dialog -->
</div><!-- /.modal -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="../js/classie.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/smoothscroll.js"></script>
    <script src="../js/main.js"></script>

    <!-- Page-Level Plugin Scripts - Tables -->
    <script src="../js/dataTables/jquery.dataTables.js"></script>
    <script src="../js/dataTables/dataTables.bootstrap.js"></script>
</body>
</html>
