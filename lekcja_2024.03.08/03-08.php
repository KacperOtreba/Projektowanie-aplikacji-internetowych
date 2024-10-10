<HTML>
    <HEAD>
        <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-2">
        <TITLE>Pierwiastki równania kwadratowego</TITLE>
    </HEAD>
    <BODY>
        <?php
        $a = $_POST['formularz_a'];
        $b = $_POST['formularz_b'];
        $c = $_POST['formularz_c'];
        print ("a = $a, b = $b, c = $c");
        $delta =  $b*$b-4*$a*$c;
        if ($delta < 0){
            print("Równanie nie ma pierwiastków rzeczywistych");
        } elseif ($delta == 0){
            $x1 = -$b/(2 * $a);
            print("Równanie ma jeden pierwiastek rzeczywistych");
        } else {
            $x1 = (-$b-sqrt($delta)) / (2*$a);
            $x2 = (-$b+sqrt($delta)) / (2*$a);
            print("Równanie ma dwa pierwiastki rzeczywiste: $x1 i $x2");
        }
        ?>
    </BODY>
</HTML>