const functii = [
{
    nr: 74, name:"FUrmatorulPrim",
    text: `Scrieți definiția completă a unui subprogram C++ nr_prim care primește prin singurul său parametru, n, un număr natural cu cel mult 9 cifre și returnează cel mai mic număr prim, strict mai mare decât n.`,
    example: ``,
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
    text: `Subprogramul minDivPrim are un singur parametru, n, prin care primeşte un număr natural. Subprogramul returnează cel mai mic număr natural care are aceiași divizori primi ca n. Scrieţi definiţia completă a subprogramului.`,
    example: ``,
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
    nr:2823 , name: "CifreImpare",
    text: `Subprogramul cifreImpare are un singur parametru, n, prin care primește un număr natural cu toate cifrele nenule (n∈[1,109]). Subprogramul returnează numărul obținut prin eliminarea tuturor cifrelor impare din n, respectiv -1 dacă nu există astfel de cifre sau dacă toate cifrele lui n sunt impare.`,
    example: ``,
    code:`int cifreImpare(int n)
{
    int copie = 0, p = 1, ok = 0;
    while (n)
    {
        if (!(n % 2))
        {
            copie += n % 10 * p;
            p *= 10;
        }
        else
            ok = 1;
        n /= 10;
    }
    if (!copie || !ok)
        return -1;
    return copie;
}`
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