const functii = [
{
    nr: 74, name:"FUrmatorulPrim",
    text: `Cerința
            Scrieți definiția completă a unui subprogram C++ nr_prim care primește prin singurul său parametru, n, un număr natural cu cel mult 9 cifre și returnează cel mai mic număr prim, strict mai mare decât n.`,
    code:`int nr_prim(int n)
{
    ++n;                // incepem de la n+1
    while (true)        // ne oprim la doar cand gasim nr. prim
    {
        bool ok = 1;    // presupunem ca numarul este prim
        for (int d = 2; d * d <= n; ++d)
            if (n % d == 0)
            {
                ok = 0; // numarul nu este prim
                break;  // oprim verificarea 
            }
        if (ok)        //daca numarul este prim
            return n;  // se iese din functie
        ++n;           //continuam cautarea
    }
}`},

{
    nr: 1745 , name:"minDivPrim",
    text: `Cerinţa
            Subprogramul minDivPrim are un singur parametru, n, prin care primeşte un număr natural. Subprogramul returnează cel mai mic număr natural care are aceiași divizori primi ca n. Scrieţi definiţia completă a subprogramului.`,
    code:`int minDivPrim(int n)
{
    for (int i = 2; i * i <= n; ++i)
    {
        if (!(n % i))
        {
            while (!(n % i))
                n /= i;
            n *= i;
        }
    }
    return n;
}`},

{  
    nr:404, name: "nu",
    text: `qwerty3`,code:`###3`
},

{  
    nr:404, name: "nu",
    text: `qwerty4`,code:`###4`
},

{  
    nr:404, name: "nu",
    text: `qwerty5`,code:`###5`
}
]

const siruri = [];

export { functii, siruri };