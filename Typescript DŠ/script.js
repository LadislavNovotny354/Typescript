var Jmeno = "david";
var soucet = function (num1, num2) {
    return num1 + num2;
};
var vysledek = soucet(5, 6);
console.log(vysledek);
var soucet2 = function (a, b) {
    console.log("Počítám součet");
    return a + b; // musíme explicitně vrátit
};
var soucet3 = function (d, e) { return d + e; };
var vysledek2 = soucet3(5, 7);
console.log(vysledek2);
var pozdrav = function (jmeno) { return "Ahoj, ".concat(jmeno, "!"); }; //implicitní return
