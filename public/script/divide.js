const divide = [
{
    nr: 250,
    name: "Interclasare1",
    text: `Se dau in fisierul "interclasare1.in" două şiruri a şi b, cu n, respectiv m elemente, numere naturale, ordonate strict crescător. Să se afişeze, în ordine strict crescătoare, valorile existente în cel puţin unul dintre cele două şiruri.
         În cazul în care o valoare apare în ambele şiruri, va fi afişată o singură dată. Elementele celor două șiruri pot fi dispuse pe mai multe linii. Valorile vor fi afişate în fișierul "interclasare1.out" câte 10 pe o linie, separate prin spaţii. 
         Ultima linie poate conţine mai puţin de 10 de valori.`,
    input: `7
1 3 4
7 20 24 60
9
3 5 7
8 9 10 12
20 24`,
    output: `1 3 4 5 7 8 9 10 12 20 
24 60  `,
    code:`#include <fstream>
#include <cstring>

std::ifstream fin("interclasare1.in");
std::ofstream fout("interclasare1.out");

int main()
{
    int n, m;
    fin >> n;

    int a[100001], b[100001];
    for(int i = 0; i < n; ++i)
        fin >> a[i];

    fin >> m;
    for(int i = 0; i < m; ++i)
        fin >> b[i];

    int c[200002];
    int i = 0, j = 0;
    int k = 0;

    while(i < n && j < m)
    {
        if(a[i] < b[j])
        {
            c[k] = a[i];
            ++i;
        }
        else if(a[i] > b[j]) 
        {
            c[k] = b[j];
            ++j;
        }
        else
        {
            c[k] = a[i];
            ++j;
            ++i;
        }
        ++k;
    }

    while(i < n)
    {
        c[k] = a[i];
        ++k;
        ++i;
    }

    while(j < m)
    {
        c[k] = b[j];
        ++k;
        ++j;
    }

    for(int i = 0; i < k; ++i)
    {
        fout << c[i] << ' ';
        if(!((i + 1) % 10) && i != 0)
            fout << '\n';
    }
}`
},

{
    nr: 4471,
    name: "mingi",
    text: `Profesorul de sport are m mingi, numerotate de la 1 la m. În sala de sport sport sunt n dulapuri, numerotate de la 1 la n, în fiecare dulap încap ai mingi. Profesorul așează mingile în dulapuri în felul următor: în dulapul 1 așează mingile numerotate de la 1 la a1 (unde a1 este capacitatea dulapului 1), în dulapul 2 așează în continuare mingile numerotate de la a1 + 1 la a1 + a2 șamd. De exemplu, dacă are 5 dulapuri de capacitate 3, 5, 4, 5, 2, în primul dulap așează 3 mingi numerotate de la 1 la 3, în al doilea dulap așează 5 mingi numerotate de la 4 la 8, în al treilea dulap așează 4 mingi numerotate de la 9 la 12, în al patrulea dulap așează 5 mingi de la 13 la 17, iar în ultimul dulap așează mingile numerotate de la 18 la 19.
Profesorul are nevoie de k mingi și îl trimite pe Ducu să aducă mingile. Ducu are nevoie de ajutorul vostru să găsească dulapurile în care se află fiecare din cele k mingi.
Programul citește de la tastatură numărul n, reprezentând numărul de dulapuri, iar apoi n numere naturale, separate prin spații, reprezentând capacitatea fiecărui dulap. 
De pe următorul rând se citește k, numărul de mingi solicitat de profesor, iar apoi k numere naturale, separate prin câte un spațiu, reprezentând numărul de ordine al mingilor solicitate de profesor.`,
    input: `5
3 5 4 5 2
3
4 12 1`,
    output: `2 3 1`,
    code: `#include <iostream>

using namespace std;

int n, m;
int a[100002];

int main(){
    cin >> n;
    for(int i = 1; i <= n; i++){
            cin >> a[i];
            a[i] = a[i] + a[i - 1];
    }

    cin >> m;
    for(int i = 0; i < m; i++){
        int x;
        cin >> x;

        if(x <= a[1]) cout << "1 ";
        else {
            int st = 1, dr = n, pos = 0;
            while(st <= dr){
                int mid = st + (dr - st) / 2;
                if(x <= a[mid]){
                    pos = mid; dr = mid - 1;
                }
                else st = mid + 1;
            }
            cout << pos << " ";
        }
    }
    return 0;
}`
}
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
    txtLabel.innerText = `${curent + 1}/${divide.length}`;
    rawCode = divide[curent].code;
    cerLabel.innerText = divide[curent].text;
    numLabel.innerText = `#${divide[curent].nr}`;
    probLabel.innerText = divide[curent].name;

    if(exmLabel !== null)
        exmLabel.innerText = divide[curent].example;

    if(input !== null)
    {
        input.innerText = divide[curent].input;
        output.innerText = divide[curent].output;
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

    if(divide.length == 1)
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
        if(curent == divide.length - 1)
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