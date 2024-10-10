<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <?php
        $n = 5;

        $pierwsza = True;
        for ($i=2; $i < $n; $i++) { 
            if ($n % $i == 0){
                $pierwsza = False;
            }
        }
        print('Dzisiaj jest'.date('l,d.m.r'))
    ?>
</body>
</html>