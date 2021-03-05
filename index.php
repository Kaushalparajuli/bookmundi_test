<?php include './function.php';?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bookmundi Coding Test</title>
</head>
<style>
.alert {
    background-color: red;
}
</style>

<body>
    <h1 class="heading" id="h1">BOOKMUNDI CODING TEST</h1>

    <!-- Element containing data  -->
    <h4 class="data-sets" data-color="red,blue,green,yellow">Data Sets Colors</h4>

    <!-- element injection on below div element -->
    <div class="data-set-values">
    </div>

    <!-- getting values fomr input -->

    <div class="form-group">
        <span>Set Value</span>
        <input id="set-value" type="text">
    </div>

    <br>

    <div class="form-group">
        <span>Get Value</span>
        <input id="get-value" style="width:500px" type="text"
            value="this is used for testing purpose only.check console">
    </div>


    <script src="./index.js"></script>
</body>

</html>
