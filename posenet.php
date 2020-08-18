<!DOCTYPE html>
<html>
    <head><title>Cut The Fruit</title>
        <script src="https://unpkg.com/ml5@0.4.1/dist/ml5.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.js"></script>
        <link href="style2.css" rel="stylesheet">
    </head>
    <style>
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
    <body>
<?php session_start();?>
        <div id="sidebar">
            <header>
              <h1>Fruit Cut!</h1>
            </header>
      
            <main>
              <h2>Controls</h2>
              <ul>
                <li><span class="control">WAVE HANDS</span> to move.</li>
                <li><span class="control">Cut the Fruits</span>  to Score.</li>
                <li><span class="control">Avoid BLACK bombs </span>or loose life.</li>
                <li><span class="control">You Have 3 lives :) </span>GOOD LUCK!</li><br>
                <li>
                <form action= "g12redirect.php "method="POST">
                  <span class="control">Score: </span><input type="text" value="" id="Score" size="1" name="score"><br>
                  <span class="control">Life: </span><input type="text" value="" id="Life" size="1" name="life"><br>
                  <span class="control" >Player: </span><input type="text" value="<?= $_SESSION['email'] ?>" name="email" size="3"><br>
                  <input type="submit" id="save" value="Play Again" class="btn button">
                  <input type="button" id="menu" Value="Back To Menu" class="btn button">
                </form></li>
              </ul>
            </main>
          </div>
          <script src="scripts/posenet.js"></script> 
          <script src="scripts/p5.sound.min.js"></script>
    </body> 
</html>