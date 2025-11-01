const Jmeno = "david"

const soucet = (num1: number, num2: number): number => {
    return num1 + num2 
}

const vysledek = soucet (5,6)
console.log(vysledek)


const soucet2 = (a: number, b: number): number => {
    console.log("Počítám součet")
    return a + b // musíme explicitně vrátit
}


const soucet3 = (d: number, e: number): number => d + e 
const vysledek2 = soucet3 (5,7)
console.log(vysledek2)


const pozdrav = (jmeno: string) => `Ahoj, ${jmeno}!` //implicitní return
