<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">      
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Age-2 g2g</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <style>
        .hero-image {
            background-image: url("images/kids2.png");
            background-color: #646464;
            height:760px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
        }
    </style>
    <body class="hero-image">
        <?php session_start();  ?>
        <div class ="navbar navbar-default navbar-expand-sm" style="background-color:darkslateblue">
            <div class="navbar-header"><a class ="navbar-brand" href="index.html" style="color=black;">GAME TO GROW</a></div>
            <ul class = "nav navbar-nav pull-right ml-5">
                <img src="images/download.png" width=50px height=50px>
                <span style="padding-top:10px"><a href="#"><?=$_SESSION['name']?></a></span>
                <li style="padding-top:2px;padding-left:10px"><a class="nav-link" href="index.html">LogOut</a></li>
                <li style="padding-top:2px;padding-left:10px"><a class="nav-link" href="about.html">About</a></li>
                <li> 
                    <span class="progress mt-3 ml-2" style="width:100px">
                        <div class="progress-bar progress-bar-striped" style="width:5%"></div>
                    </span> 
                </li>
            </ul>
        </div>
        <div class = "container">
            <div class="row" style="padding:100px 0px 0px 0px;">
                <div class="card col-sm-4 game" style="width:100%">
                    <img class="card-img-top" src="images/cg.jpg" alt="Card image" style="width:100%">
                    <div class="card-body">
                        <h4 class="card-title">CARS</h4>
                        <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                        <a href="cars.php" class="btn btn-primary stretched-link" style="margin: auto">Play</a>
                    </div>
                </div>
                <div class="card col-sm-4 game" style="width:100%">
                    <img class="card-img-top" src="images/spacewar.jfif" alt="Card image" style="width:200px height: 120px;">
                    <div class="card-body">
                        <h4 class="card-title">Space War</h4>
                        <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                        <a href="bullethell/bullethell.php" class="btn btn-primary stretched-link" style="margin: auto">Play</a>
                    </div>
                </div>
                <div class="card col-sm-4 game" style="width:100%">
                    <img class="card-img-top" src="images/tetris.png" alt="Card image" style="width:200px height: 120px;">
                    <div class="card-body">
                        <h4 class="card-title">Tetris</h4>
                        <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                        <a href="tetris.php" class="btn btn-primary stretched-link" style="margin: auto">Play</a>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>