<!DOCTYPE html>

<html>
<head>
    <title>Tetris</title>
	<meta charset="utf-8" />
    <script src="scripts/p5.dom.min.js" type="text/javascript"></script>
    <script src="scripts/p5.min.js" type="text/javascript"></script>
    <script src="scripts/p5.sound.min.js" type="text/javascript"></script>
    <script src="scripts/tetris.js" type="text/javascript"></script>
    <link href="style2.css" rel="stylesheet">
    <style>
    canvas {
            border: solid .2em #fff;
        }
    .btn{
    border-radius: 4px;
    background-color: #008CBA;
    }
    .btn:hover {
    background-color: rgb(245, 214, 148);
    color: white;
    }
    .button {
    border: none;
    color: white;
    padding: 4px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}
    </style>
    
</head>
<body>
    <?php
    session_start();
    ?>
    <div id="sidebar">
        <header>
            <h1>TETRIS!</h1>
        </header>      
        <main>
            <h2>Controls</h2>
            <ul>
            <li><span class="control">lEFT ARROW</span> to move Left and <span class="control">RIGHT ARROW</span> to move Right .</li>
            <li><span class="control">UPPER ARROW </span>  to rotate the item.</li>
            <li><span class="control">COMPLETE ROWS  </span>diminish and give you 10 points each.</li>
            <li><span class="control">GOOD LUCK! </span></li>
            <li>
                <form action= "g23redirect.php "method="POST">
                  <span>Score: </span><input type="text" value="" id="score" size="1" name="score"><br>
                  <span class="control">Player: </span><input type="text" value="<?= $_SESSION['email'] ?>" name="email" size="3"><br>
                  <input type="submit" id="save" value="Play Again" class="btn button">
                  <input type="button" id="menu" value="Back to Menu" class="btn button">
                </form></li>
            <!-- <li><span class="control">C</span> or <span class="control">M</span>  to use a bomb to clear the screen.</li>
            <li><span class="control">P</span> to pause.</li> -->
            </ul>
        </main>
    </div>
</body>
</html>
