<html>
    <head>
        <meta charset="utf-8">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.js"></script>
        <link href="style3.css" rel="stylesheet">
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
        <div id="sidebar" style="width:30%;">
                <header>
                  <h1>Draw-It</h1>
                </header>          
                <main>
                    <h2>Pick Colors</h2>
                    Brush:<input type="color" value="#646464" id = "c1picker">
                    Back:<input type="color" value="#dcc800" id = "c2picker">
                    
                    <h2>Tasks</h2>
                    <ul>
                    <li><span class="control">-Task one</span>:Paint the whole screen black.</li>
                    <li><span class="control">-Task two</span>:Paint the whole screen red.</li>
                    <li><span class="control">-Task Three </span>:Draw boundaries of brown shade on blue background.</li>
                    <li><span class="control">-Task Four </span>:Draw a big voilet ball on a green background.</li>
                    <li><span class="control">-Task Five </span>:Draw a white star on a black background.</li>
                    <li><input type="button" id="back" class="btn button" value="BACK"></li>
                    </ul>
                </main>
              </div> 
        <script src="scripts/draw.js"></script>
    </body>
</html>