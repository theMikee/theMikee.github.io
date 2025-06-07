const siruri = [
{
    nr: 2997,
    name: "Prescurtat",
    text: `Funcția primește ca parametru un text de cel mult 50 de caractere, alcătuit din cuvinte separate prin câte un spațiu și formate din litere mari ale alfabetului englez, urmate eventual de caracterul . (punct), dacă sunt scrise prescurtat. Textul reprezintă numele unei instituții de învățământ și doar cuvintele din mulțimea {COLEGIUL, LICEUL, NATIONAL, TEORETIC} pot fi prescurtate, eliminându-se ultimele lor litere. 
        Funcția va returna tot prin intermediul parametrului s numele instituției scris fără prescurtări.`,
    input: `COLEG. NAT. DE INFORMATICA`,
    output: `COLEGIUL NATIONAL DE INFORMATICA`,
    code: `void Prescurtat(char s[])
{
    char t[100];
    char *p = strtok(s, " ");

    t[0] = '\0';

    while(p) {
        if(p[strlen(p) - 1] != '.')
            strcat(t, p);
        else 
        {
            p[strlen(p) - 1] = '\0';

            if(strstr("COLEGIUL", p))
                strcat(t, "COLEGIUL");

            if(strstr("NATIONAL", p))
                strcat(t, "NATIONAL");
            
            if(strstr("LICEUL", p))
                strcat(t, "LICEUL");

            if(strstr("TEORETIC", p))
                strcat(t, "TEORETIC");
        }
        p = strtok(NULL, " ");
        if(p)
            strcat(t, " ");
    }
    strcpy(s, t);
}`
},

{
    nr: 1335,
    name: `Caractere`,
    text: `Se dau 2 șiruri de caractere. Sa se afișeze toate caracterele primului șir ce se găsesc și în al doilea.`,
    input: `asD'";*]!
da';h`,
    output: `a';`,
    code: `#include <iostream> // 1335 Caractere
#include <cstring>
using namespace std;

int main()
{
    char s1[251], s2[251];
    cin.getline(s1, 251);
    cin.getline(s2, 251);

    for (int i = 0; s1[i]; i++)
        if (strchr(s2, s1[i]))
            cout << s1[i];

    return 0;
}`
},

{
    nr: 4764,
    name: `CuvintePrefixe `,
    text: `Se dau două texte x și y. Textele sunt formate din cuvinte (litere mici), separate prin spațiu sau caracterele .,!?:;.
        Să se determine câte cuvinte din x sunt prefixe ale vreunui cuvânt din y.`,
    input: `ana are si mere, pere, caise.
arealul ursului este mereu analizat, viata este perena.`,
    output: `4`,
    code: `#include <iostream>
#include <cstring>

int main()
{
    char s[1001], t[1001];
    char cs[300][21];
    char ct[300][21];

    char sep[] = " .,!?:;";
    
    std::cin.getline(s, 1000);
    std::cin.getline(t, 1000);

    int n = 0, m = 0;
    char* p = strtok(s, sep);
    while(p)
    {
        strcpy(cs[n++], p);

        p = strtok(NULL, sep);
    }

    p = strtok(t, sep);
    while(p)
    {
        strcpy(ct[m++], p);

        p = strtok(NULL, sep);
    }

    int r = 0;

    for(int i = 0; i < n; ++i)
    {
        for(int j = 0; j < m; ++j)
        {
            if(strstr(ct[j], cs[i]) == ct[j])
            {
                ++r;
                break;
            }
        }
    }

    std::cout << r;
}`
},

{
    nr: 4797,
    name: `Cuvinte21`,
    text: `Se dă o propoziție care conține numai litere mici ale alfabetului englez și spații. 
        Să se ordoneze albabetic literele din fiecare cuvânt și să se afișeze cuvintele astfel obținute.`,
    input: `ana are mere`,
    output: `aan
aer
eemr`,
    code: `#include <iostream>
#include <cstring>

int main()
{
    char s[255];
    std::cin.getline(s, 255);

    char* p = strtok(s, " ");
    while(p)
    {
        for(int i = 0; i < strlen(p) - 1; ++i)
            for(int j = i + 1; j < strlen(p); ++j)
            if(p[i] > p[j])
            {
                char aux = p[i];
                p[i] = p[j];
                p[j] = aux;
            }

        std::cout << p << '\n';

        p = strtok(NULL, " ");
    }
}`
},

{
    nr: 1456,
    name: `Cuvant`,
    text: `Se consideră un cuvânt format din cel puțin două și cel mult 100 de caractere, numai litere mici ale alfabetului englez.
        Scrieţi un program care citeşte de la tastatură un cuvânt de tipul precizat și afișează pe ecran mesajul DA în cazul în care cuvântul conține doar consoane şi, eventual, vocala i, sau mesajul NU în caz contrar.`,
    input: `inscriptibil
brr
inestimabil
iii`,
    output: `DA
DA
NU
NU`,
    code: `#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char cuv[101];
    cin >> cuv;

    int voc = 0, nri = 0, len = strlen(cuv);
    for (int i = 0; cuv[i]; i++)
        if (strchr("aeiou", cuv[i]))
        {
            if (cuv[i] == 'i')
                nri++;
            else
                voc++;
        }

    if (voc == 0 && nri < len)
        cout << "DA";
    else
        cout << "NU";
    return 0;
}`
},

{
    nr: 891,
    name: `Pasareste`,
    text: `Limba păsărească este foarte simplă; și asemănătoare cu limba română! Un text scris în română se traduce în păsărește astfel: după fiecare vocală se inserează litera p și vocala respectivă.
        Se dă o propoziție scrisă în limba română. Să se traducă în păsărească.`,
    input: `ana are mere`,
    output: `apanapa aparepe meperepe`, 
    code: `#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[256], t[511] = "";
    cin.getline(s, 256);

    for (int i = 0; s[i]; i++)
    {
        char temp[2] = {s[i], '\0'};
        strcat(t, temp);

        if (strchr("aeiou", s[i]))
        {
            strcat(t, "p");
            strcat(t, temp);
        }
    }

    cout << t;
    return 0;
}`
},

{
    nr: 4483,
    name: `SortVocCons`,
    text: `Se dă un şir de cel mult 100 caractere ce conţine numai litere mici ale alfabetului englez.
Să se sorteze caracterele șirului astfel încât vocalele să fie ordonate descrescător, iar consonele să rămână exact cum sunt în șirul citit. `,
    input: `romancier`,
    output: `romincear`,
    code: `#include <bits/stdc++.h>
// #include <cstring>
using namespace std;

int main()
{
    char s[101], t[101] = "", c[101] = "";
    cin >> s;

    for (int i = 0; s[i]; i++)
        if (strchr("aeiou", s[i]))
        {
            char tmp[2] = {s[i], '\0'};
            strcat(t, tmp);
        }

    sort(t, t + strlen(t), greater<char>()); // sort-ul din STL care merge, in mod firesc, si pe siruri de tip char

    for (int i = 0, poz = 0; s[i]; i++)
        if (strchr("aeiou", s[i]))
            c[i] = t[poz++];
        else
            c[i] = s[i];

    strcpy(s, c); // se doresc modificari pe sirul original
    cout << s;
    return 0;
}`
},

{
    nr: 3195,
    name: `Intersecție Mulțimi`,
    text: `Se dă o mulţime nevidă A cu n elemente numere reale. Să se afișeze elementele mulțimilor A ∩ N, A ∩ Z, A ∩ Q și A ∩ (R-Q). 
    Numerele raţionale pot fi periodice sau neperiodice. Pentru numerele iraţionale sunt date numai primele zecimale (maxim 5), urmate de 3 puncte.`,
    input: `10
3.14... 1.41... 10000 -3.8(7) 1224 -12 324 3.27 1 6.78912345`,
    output: `10000 1224 324 1 
10000 1224 -12 324 1 
10000 -3.8(7) 1224 -12 324 3.27 1 6.78912345 
3.14... 1.41...`,
    code: `#include <iostream>
#include <cstring>

int main()
{
    char s[101][101];
    int n;

    std::cin >> n;
    for(int i = 0; i < n; ++i)
    {
        std::cin >> s[i];
    }

    bool ok = 0;

    for(int i = 0; i < n; ++i)
    {
        if(!strchr(s[i], '-') && !strchr(s[i], '.'))
        {
            std::cout << s[i] << ' ';
            ok = 1;
        }
    }
    if(!ok)
        std::cout << "Multime vida";
    ok = 0;
    std::cout << '\n';

    for(int i = 0; i < n; ++i)
    {
        if(!strchr(s[i], '.'))
            {
            std::cout << s[i] << ' ';
            ok = 1;
        }
    }
    if(!ok)
        std::cout << "Multime vida";
    ok = 0;
    std::cout << '\n';

    for(int i = 0; i < n; ++i)
    {
        if(!strstr(s[i], "..."))
            {
            std::cout << s[i] << ' ';
            ok = 1;
        }
    }
    if(!ok)
        std::cout << "Multime vida";
    ok = 0;
    std::cout << '\n';

    for(int i = 0; i < n; ++i)
    {
        if(strstr(s[i], "..."))
            {
            std::cout << s[i] << ' ';
            ok = 1;
        }
    }
    if(!ok)
        std::cout << "Multime vida";
    ok = 0;
    std::cout << '\n';
}`
},

{
    nr: 97,
    name: `Anagrame`,
    text: `Să se scrie un program care verifică dacă două cuvinte date sunt anagrame.`,
    input: `rutina unitar`,
    output: `1`,
    code: `#include <iostream>
#include <cstring>

bool anagrama(char* s, char* t)
{
    if(strlen(s) != strlen(t))
    {
        return false;
    }

    for(int i = 0; i < strlen(s); ++i)
    {
        if(strchr(t, s[i]) == nullptr)
            return false;
        else if(strchr(t, s[i]) != strrchr(t, s[i]))
            return false;
    }

    return true;
}

int main()
{
    char s[255], t[255];
    std::cin >> s >> t;

    if(anagrama(s, t) && anagrama(t, s))
    {
        std::cout << 1;
        return 0;
    }

    std::cout << 0;
}
`
},

{
    nr: 89,
    name: `PalindromPropozitie`,
    text: `Un cuvânt este palindrom dacă se citește la fel în ambele direcții. De exemplu, capac este palindrom.
O propoziție este palindromică dacă prin eliminarea spațiilor și a altor semne de punctuație devine palindrom. 
De exemplu, propoziția ele fac cafele este palindromică. Să se scrie un program care citește mai multe propoziții și determină despre fiecare dacă este palindromică.`,
    input: `4
capac
ele fac cafele
ale nu fac cafele
aerare`,
    output: `1
1
0
0`,
    code: `#include <bits/stdc++.h>
using namespace std;
ifstream fin("palindrom.in");
ofstream fout("palindrom.out");

int main()
{

    int n;
    fin >> n;
    fin.get();

    while (n--)
    {
        char s[201], t[201];
        fin.getline(s, 201);

        int len = 0;
        for (int i = 0; s[i]; ++i)
            if (s[i] != ' ')
                t[len++] = s[i];
        t[len] = '\0';

        bool ok = 1;
        for (int i = 0; i < len / 2; ++i)
            if (t[i] != t[len - 1 - i])
            {
                ok = 0;
                break;
            }

        fout << (ok ? 1 : 0) << '\n';
    }

    return 0;
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
    txtLabel.innerText = `${curent + 1}/${siruri.length}`;
    rawCode = siruri[curent].code;
    cerLabel.innerText = siruri[curent].text;
    numLabel.innerText = `#${siruri[curent].nr}`;
    probLabel.innerText = siruri[curent].name;

    if(exmLabel !== null)
        exmLabel.innerText = siruri[curent].example;

    if(input !== null)
    {
        input.innerText = siruri[curent].input;
        output.innerText = siruri[curent].output;
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

    if(siruri.length == 1)
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
        if(curent == siruri.length - 1)
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