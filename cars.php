<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Cars</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.js"></script>
        <script src="scripts/cars.js"></script>
        <script src="scripts/p5.sound.min.js"></script>
        <link href="style2.css" rel="stylesheet">
    </head>
    <body>
        <?php
        session_start();
        ?>
        <div id="sidebar">
            <header>
              <h1>CARS!</h1>
            </header>      
            <main>
              <h2>Controls</h2>
              <ul>
                <li><span class="control">A</span> for Left car <span class="control">L</span> for Right Car to switch lanes.</li>
                <li><span class="control">Collect Coins</span>  to Score.</li>
                <li><span class="control">Avoid BLACK bombs </span>or loose life.</li>
                <li><span class="control">You Have 3 lives :) </span>GOOD LUCK!</li><br>
                <form action="g21redirect.php" method="POST" >
                <span class="control" >Score: </span><input type="text" id="Score" name="score"size=1><br>
                <span class="control" >Life: </span><input type="text" id="Life" name="life"size=1><br>
                <span class="control" >Player: </span><input type="text" value="<?= $_SESSION['email'] ?>" name="email" size="3"><br>
                <input type="submit" value="Play Again" class="smt">
                <input type="button" value="Back To Menu" class="menu" id="menu">
                </form>
              </ul>
            </main>
        </div>
    </body>
</html>