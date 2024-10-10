<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>
</head>
<body>
    <form method="post">
        <input type="text" name="login">
        <input type="text" name="haslo">
        <input type="submit" value="Zaloguj">
    </form>

    <form method="post">
        <input type="text" name="liczba">
    </form>

    <?php
                                            // Trzeba wiedzieć czym się róźni i++ od ++i

    $liczba = $_POST['liczba'];
    $wynik = 0;

    for ($i=1; $i <= $liczba; $i++) { 
        $wynik *= $i;
    }
    print("<h1>$wynik</h1>");
    $a = $_POST['login'];
    $b = $_POST['haslo'];

    if ($a == 'login1' && $b == 'haslo1'){
        print("<body><h1>WITAJ!!!</h1></body>");
    }
    else if(!empty($a) && !empty($b)){
        print("<body><h1>Nieprawidłowy login lub hasło</h1></body>");
    }

    for ($i=1; $i <= 30; $i++){
        print("$i<br>");
    }
    print("<br>");

    for ($j=30; $j >= 1; $j--){
        print("$j<Br>");
    }

    $i=1;
    while($i<=30){
        print("$i<br>");
        $i++;
    }



    ?>
</body>
</html>