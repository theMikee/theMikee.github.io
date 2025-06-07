const functii = [
{
    nr: 74, name:"FUrmatorulPrim",
    text: `Scrieți definiția completă a unui subprogram C++ nr_prim care primește prin singurul său parametru, n, un număr natural cu cel mult 9 cifre și returnează cel mai mic număr prim, strict mai mare decât n.`,
    example: `Dacă n=28, nr_prim(n)=29. Dacă n=17, nr_prim(n)=19.`,
    code:`int nr_prim(int n)
{
    ++n;                
    while (true)       
    {
        bool ok = 1;    
        for (int d = 2; d * d <= n; ++d)
            if (n % d == 0)
            {
                ok = 0; 
                break;  
            }
        if (ok)        
            return n;  
        ++n;
    }
}`},

{
    nr: 1745 , name:"minDivPrim",
    text: `Subprogramul minDivPrim are un singur parametru, n, prin care primeşte un număr natural. Subprogramul returnează cel mai mic număr natural care are aceiași divizori primi ca n. Scrieţi definiţia completă a subprogramului.`,
    example: `Dacă n=75, subprogramul returnează numărul 15, iar dacă n = 7, subprogramul returnează numărul 7.`,
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
    example: `Dacă n=23541, subprogramul returnează valoarea 24, iar dacă n=28, subprogramul returnează valoarea -1.`,
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
    nr: 2144, name: "diofantic",
    text: `Se dau numerele naturale nenule a, b, c, n, urmate de o secvența de n numere naturale distincte ordonate crescător, notată cu s. 
        Scrieți în limbajul C++ definiția completă a subprogramului diofantic care are 5 parametri, n(numărul de elemente ale secvenței s), s(tablou unidimensional indexat de la 1 la n),
        a, b și c (numere naturale nenule).`,
    example: `Fie secvența:
5
0 3 4 5 18
Pentru a=1, b=1, c=25 funcția va returna valoarea 4.
Cele 4 perechi sunt: (3,4), (4,3), (0,5), (5,0).`,
    code:`int diofantic(int n, int s[], long long int a, long long int b, long long int c)
{
    int out = 0;
    int i = 0, j = n - 1;

    while(i < n && j >= 0)
    {
        if(a * s[i] * s[i] + b * s[j] * s[j] == c)
        {
            ++i;
            ++out;
        }
        else if(a * s[i] * s[i] + b * s[j] * s[j] < c)
            ++i;
        else
            --j;
    }

    return out;
}`
},

{  
    nr:1501, name: "numere norocoase",
    text: `Se spune despre numărul natural nenul n că este norocos dacă numărul n2 se poate scrie ca suma a n numere naturale nenule consecutive. 
        De exemplu, 7 este norocos, deoarece 72=4+5+6+7+8+9+10.
        Scrieţi în limbajul C/C++ definiţia completă a funcţiei norocoase, care primeşte ca argumente două numere naturale a şi b şi returnează câte numere norocoase se află în intervalul [a, b].`,
    example: `norocoase(1, 15) = 8`,
        code:`int norocoase(int a, int b)
{
    if(!(a % 2) && !(b % 2))
        return (b - a) / 2;

    return (b - a) / 2 + 1;
}`
},

{
    nr: 2552, name: "poz",
    text: `Considerăm un sistemul cartezian de coordonate xOy astfel: colțul stânga-sus are coordonata (0, 0), axa Ox începe din stânga și continuă crescător spre dreapta
        axa Oy începe de sus și continuă crescător în jos. În acest sistem de coordonate, un dreptunghi cu laturile paralele cu axele poate fi descris prin patru numere, reprezentând:
    x -> coordonata X a punctului din stânga-sus,
    y -> coordonata Y a punctului din stânga-sus,
    l -> lățimea dreptunghiului,
    i -> înălțimea dreptunghiului.
    Să se scrie definiția funcției C++ poz care, primind 8 argumente, x1, y1, l1, i1, x2, y2, l2, i2 , în această ordine:
    x1, y1, l1, i1 -> reprezentând primul dreptunghi,
    x2, y2, l2, i2 -> reprezentând cel de-al doilea dreptunghi,
    returnează:

    0, dacă primul dreptunghi este în interiorul celuilalt sau invers
    1, dacă cele două dreptunghiuri sunt identice
    2, dacă cele două dreptunghiuri nu au nici un punct comun
    3, dacă cele două dreptunghiuri se suprapun doar parțial`,
    example: `poz(100, 100, 300, 200, 150, 150, 100, 130) returnează 0
poz(100, 100, 100, 200, 100, 100, 100, 200) returnează 1
poz(50, 50, 100, 50, 200, 100, 100, 130) returnează 2
poz(50, 50, 100, 50, 30, 40, 100, 130) returnează 3`,
    code: `int poz(int x1, int y1, int l1, int i1, int x2, int y2, int l2, int i2)
{
    int rez;
    if(x1 > x2 && y1 > y2 && y1 + i1 < y2 + i2 && x1 + l1 < x2 +l2)
        rez = 0;
    else if(x1 < x2 && y1 < y2 && y1 + i1 > y2 + i2 && x1 + l1 > x2 + l2)
        rez = 0; 
    else if(x1 == x2 && y1 == y2 && i1 == i2 && l1 == l2)
        rez = 1;         
    else if(y2 + i2< y1)
        rez = 2;  
    else if(y1 + i1< y2)
        rez = 2; 
    else if(x1 + l1< x2)
        rez = 2; 
    else if(x2 + l2< x1)
        rez = 2;  
    else
        rez = 3;
    return rez;
}`
},

{
    nr: 902, name: "factorial2",
    text: `Să se scrie o funcție C++, cu un parametru, n, care returnează cel mai apropiat număr de n care este factorialul unei valori. `,
    example: `det(24) = 24, det(44) = 24, det(100) = 120, det(72)=24`,
    code: `int det(int n)
{
    int out = 1, i = 1;
    while(out < n)
    {
        ++i;
        out *= i;
    }

    if(n - out / i <= out - n)
        return out / i;

    return out; 
}`
},

{
    nr: 2830,
    name: `DivImpar `,
    text: `Subprogramul DivImpar are doi parametri, a și b, prin care primește două numere naturale din intervalul [1,105]. 
    Subprogramul returnează cel mai mare divizor comun impar al numerelor a și b.`,
    example: `Dacă a=30 și b=60, subprogramul returnează valoarea 15.`,
    code: `int DivImpar(int a, int b)
{
    int d = a < b ? a : b;
    while (d)
    {
        if (a % d == 0 && b % d == 0 && d % 2 == 1)
            return d;
        --d;
    }
    return 1;
}`
},

{
    nr: 3104,
    name: `B_Egal`,
    text: `Subprogramul Egal are un parametru, n, prin care primește un număr natural cu cel puțin o cifră impară. 
    Subprogramul returnează valoarea 1 dacă toate cifrele impare ale lui n sunt egale între ele sau valoarea 0 în caz contrar.`,
    example: `Dacă n=7727470 sau n=7240 atunci subprogramul returnează 1, iar dacă n=7921470 atunci subprogramul returnează 0.`,
    code: `int Egal(int n)
{
    int cif = 0;
    while (n)
    {
        if (n % 2)
            if (!cif)
                cif = n % 10;
            else if (cif != n % 10)
                return 0;
        n /= 10;
    }
    return 1;
}`
},

{
    nr: 898,
    name: `SumFactCif`,
    text: `Să se scrie o funcție C++ care să returneze suma factorialelor cifrelor unui număr natural transmis ca parametru.`,
    example: `sumfactcif(241) = 27, adică 2!+4!+1! = 1*2+1*2*3*4+1 = 2+24+1 = 27`,
    code: `long long sumfactcif(int n)
{
    long long out = 0;

    do
    {
        long long f = 1;
        for(int i = 2; i <= n % 10; ++i)
            f *= i;
        out += f;
        n /= 10; 
    } while (n);
    
    return out;
}`
},
];

function highlightSyntax(code) {
    let highlightedCode = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const rules = [
        // 1. Comments (single-line: //...)
        { pattern: /(\/\/[^\n\r]*)/g, className: 'cpp-comment' },

        // 2. Preprocessor directives (e.g., #include, #define)
        { pattern: /^(?:[ \t]*)(#.*(?:\\(?:\r\n|\n|\r)|[^(\r\n)]*))/gm, className: 'cpp-preprocessor' },

        // 3. String literals (double-quoted) and Character literals (single-quoted)
        { pattern: /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g, className: 'cpp-string' },

        // 4. Numbers (integers, floating-point, scientific notation)
        { pattern: /\b(\d+(\.\d*)?([eE][+-]?\d+)?|\.\d+([eE][+-]?\d+)?)\b/g, className: 'cpp-number' },

        // 5. C++ Keywords (a more comprehensive list)
        { pattern: /\b(int|float|double|char|if|else|while|for|const|return|break|bool|void|struct|namespace|using)\b/g, className: 'cpp-keyword' },

        // 6. Common types and standard library elements (e.g., std::string, cout, vector)
        { pattern: /\b(std::\w+|cout|cin|endl|ifstream|ofstream)\b/g, className: 'cpp-type' },
    ];

    let charStyled = new Array(highlightedCode.length).fill(false);
    let matchesToApply = [];

    rules.forEach(rule => {
        let match;
        rule.pattern.lastIndex = 0;

        while ((match = rule.pattern.exec(highlightedCode)) !== null) {
            const startInd = match.index;
            const endInd = startInd + match[0].length;

            let styled = false;
            for (let i = startInd; i < endInd; i++) {
                if (charStyled[i]) {
                    styled = true;
                    break;
                }
            }

            if (!styled) {
                matchesToApply.push({
                    start: startInd,
                    end: endInd,
                    className: rule.className,
                    text: match[0]
                });

                for (let i = startInd; i < endInd; i++) {
                    charStyled[i] = true;
                }
            }
        }
    });

    matchesToApply.sort((a, b) => a.start - b.start);

    let finalHtml = "";
    let currentIndex = 0;

    matchesToApply.forEach(match => {
        finalHtml += highlightedCode.substring(currentIndex, match.start);
        finalHtml += `<span class="${match.className}">${match.text}</span>`;
        currentIndex = match.end;
    });

    finalHtml += highlightedCode.substring(currentIndex);

    return finalHtml;
}

let curent = 0;
let rawCode = "";

let codeArea;
let back;
let fwd;
let txtLabel;
let numLabel;
let cerLabel;
let probLabel;
let exmLabel;
let input;
let output;

function changeElem()
{
    txtLabel.innerText = `${curent + 1}/${functii.length}`;
    rawCode = functii[curent].code;
    cerLabel.innerText = functii[curent].text;
    numLabel.innerText = `#${functii[curent].nr}`;
    probLabel.innerText = functii[curent].name;

    if(exmLabel !== null)
        exmLabel.innerText = functii[curent].example;

    if(input !== null)
    {
        input.innerText = functii[curent].input;
        output.innerText = functii[curent].output;
    }
}

window.onload = function()
{
    codeArea = document.getElementById("coder");
    back = document.getElementById("back");
    fwd = document.getElementById("fwd");
    txtLabel = document.getElementById("nav-ind");
    numLabel = document.getElementById("numLabel");
    cerLabel = document.getElementById("cerLabel");
    probLabel = document.getElementById("probName");
    exmLabel = document.getElementById("exmLabel");
    input = document.getElementById("input");
    output = document.getElementById("output");

    if(functii.length == 1)
    {
        fwd.disabled = true;
    }
    back.disabled = true;

    changeElem();
    codeArea.innerHTML = highlightSyntax(rawCode);

    back.disabled = true;
    back.style.backgroundColor ="#5d6f81"
    back.style.cursor = 'not-allowed';


    back.addEventListener("click", function()
    {
        curent--;
        if(curent == 0)
        {
            back.disabled = true;
            back.style.backgroundColor ="#5d6f81"
            back.style.cursor = 'not-allowed';
        }
            
        fwd.disabled = false;
        fwd.style.backgroundColor = "#2c3e50";
        fwd.style.cursor = 'pointer';
        changeElem();

        codeArea.innerHTML = highlightSyntax(rawCode);
    });

    fwd.addEventListener("click", function()
    {
        curent++;
        if(curent == functii.length - 1)
        {
            fwd.disabled = true;
            fwd.style.backgroundColor ="#5d6f81"
            fwd.style.cursor = 'not-allowed';
        }
        back.disabled = false;
        back.style.backgroundColor = "#2c3e50";
        back.style.cursor = 'pointer';
        changeElem();

        codeArea.innerHTML = highlightSyntax(rawCode);
    });
};
