<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="author" content="xithiox">
    <title>Bullet Hell</title>
    <link href="style.css" rel="stylesheet">
    <script src="scripts/lib/p5.min.js" defer></script>
    <script src="scripts/util.js" defer></script>
    <script src="scripts/template/models.js" defer></script>
    <script src="scripts/template/bosses.js" defer></script>
    <script src="scripts/template/bullets.js" defer></script>
    <script src="scripts/template/enemies.js" defer></script>
    <script src="scripts/template/items.js" defer></script>
    <script src="scripts/template/levels.js" defer></script>
    <script src="scripts/template/particles.js" defer></script>
    <script src="scripts/template/weapons.js" defer></script>
    <script src="scripts/class/entity.js" defer></script>
    <script src="scripts/class/bullet.js" defer></script>
    <script src="scripts/class/emitter.js" defer></script>
    <script src="scripts/class/item.js" defer></script>
    <script src="scripts/class/particle.js" defer></script>
    <script src="scripts/class/particle_system.js" defer></script>
    <script src="scripts/class/ship.js" defer></script>
    <script src="scripts/class/boss.js" defer></script>
    <script src="scripts/class/enemy.js" defer></script>
    <script src="scripts/class/player.js" defer></script>
    <script src="scripts/class/starfield.js" defer></script>
    <script src="scripts/class/wall.js" defer></script>
    <script src="scripts/main.js" defer></script>
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
      <?php
      session_start();
      ?>
    <div id="game"></div>

    <div id="sidebar">
      <header>
        <h1>Bullet Hell</h1>
      </header>

      <main>
        <p id="level"></p>
        <p id="score"></p>
        <p id="scoremult"></p>
        
        <div id="debug">
          <p id="fps"></p>
          <p id="avgfps"></p>
        </div>

        <h2>Controls</h2>
        <ul>
          <li><span class="control">Arrow keys</span> or <span class="control">WASD</span> to move.</li>
          <li><span class="control">Z</span> or <span class="control">B</span>  to fire.</li>
          <li><span class="control">X</span> or <span class="control">N</span> to slow down time.</li>
          <li><span class="control">C</span> or <span class="control">M</span>  to use a bomb to clear the screen.</li>
          <li><span class="control">P</span> to pause.</li>
        </ul>
        <form action="../g22redirect.php" method="POST" >
                <span class="control" >Score: </span><input type="text" id="scor" name="score"size=1><br>
                <span class="control">Player: </span><input type="text" value="<?= $_SESSION['email'] ?>" name="email" size="3"><br>
                <input type="submit" value="Play Again" class="btn button">
                <input type="button" value="Back to Menu" class="btn button" id="menu">
        </form>
      </main>

      <footer>
        
      </footer>
    </div>
  </body>
</html>
