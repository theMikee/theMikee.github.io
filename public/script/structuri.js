const structuri = [
{
    nr: 919,
    text: `În declararea alăturată, variabila m memorează, pentru fiecare dintre cele 20 de medicamente dintr-o farmacie, prețul, precum și date despre substanța activă specifică: doza și codul acesteia.
    O expresie a cărei valoare reprezintă codul substanței active specifice din primul medicament este:`,
    code: `struct medicament
{ float pret;   
  struct  
  { int cod, doza; 
  }substanta; 
}m[20];`,
    var1: `m[0].cod.substanta`,
    var2: `m[0].substanta.cod`,
    var3: `m.cod.substanta[0]`,
    var4: `m.substanta.cod[0]`,
    correct: 4
},
{
    nr: 80,
    text: `Considerând declararea de mai jos, care dintre următoarele secvenţe realizează în mod corect citirea de la tastatură a valorilor celor două câmpuri ale variabilei x?`,
    code: `struct {
  int a;
  int b;
} x;`,
    var1: `cin>>x.a>>x.b;`,
    var2: `cin>>a.x>>b.x;`,
    var3: `cin>>x;`,
    var4: `cin>>a->x>>b->x;`,
    correct: 1
},
{
    nr: 220,
    text: `Considerăm declararea următoare folosită pentru a memora numele, prenumele şi cele două note ale unui elev.
    Care dintre instrucţiunile de mai jos calculează în variabila reală m media aritmetică a notelor elevului ale cărui informaţii sunt memorate în variabila x?`,
    code: `struct elev{
  char nume[10], prenume[20];
  float nota1, nota2;
} x;`,
    var1: `m=(x.nota1+x.nota2)/2;`,
    var2: `m=(nota1+nota2)/2;`,
    var3: `x.m=(x.nota1+x.nota2)/2;`,
    var4: `m=(x,nota1+x,nota2)/2;`,
    correct: 1
},
{
    nr: 309,
    text: `Se consideră declarările următoare.Care este tipul expresiei x.x.y?`,
    code: `struct A
{ int x;
 char y;
};
struct B
{ float x;
 long y;
};
struct C
{ struct A x;
 struct B y;
} x, y;`,
    var1: `long`,
    var2: `int`,
    var3: `char`,
    var4: `float`,
    correct: 3
},
{
    nr: 1352,
    text: `Variabila oras, declarată mai jos, memorează unele date obținute în urma recensământului populației în 100 dintre orașele țării.
    Știind că densitatea unui oraș este egală cu raportul dintre numărul de locuitori și suprafața acestuia (exprimată în km2), indicați o expresie a cărei valoare este egală cu densitatea primului oraș.`,
    code: `struct recensamant
{ char nume[21];
  int nrLocuitori;
  float suprafata;
} oras[100];`,
    var1: `oras[0].nrLocuitori/oras[0].suprafata`,
    var2: `oras.nrLocuitori[0]/oras.suprafata[0]`,
    var3: `nrLocuitori[0].oras/suprafata[0].oras`,
    var4: `nrLocuitori.oras[0]/suprafata.oras[0]`,
    correct: 1
}
];

let codeArea ;
let back ;
let fwd;
let txtLabel;
let numLabel ;
let cerLabel;
let var1 ;
let var2 ;
let var3 ;
let var4 ;

let curent = 0;
let rawCode = "";

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

function selectRight()
{
    if(structuri[curent].correct == 1)
    {
        var1.style.backgroundColor = 'lightgreen';
    }
    else if(structuri[curent].correct == 2)
    {
        var2.style.backgroundColor = 'lightgreen';
    }
    else if(structuri[curent].correct == 3)
    {
        var3.style.backgroundColor = 'lightgreen';
    }
    else if(structuri[curent].correct == 4)
    {
        var4.style.backgroundColor = 'lightgreen';
    }
}

function changeElem()
{
    txtLabel.innerText = `${curent + 1}/${structuri.length}`;
    rawCode = structuri[curent].code;
    cerLabel.innerText = structuri[curent].text;
    numLabel.innerText = `#${structuri[curent].nr}`;
    
    var1.innerText = structuri[curent].var1;
    var2.innerText = structuri[curent].var2;
    var3.innerText = structuri[curent].var3;
    var4.innerText = structuri[curent].var4;

    var1.style.backgroundColor = 'white';
    var2.style.backgroundColor = 'white';
    var3.style.backgroundColor = 'white';
    var4.style.backgroundColor = 'white';
}

window.onload = function()
{
    codeArea = document.getElementById("coder");
    back = document.getElementById("back");
    fwd = document.getElementById("fwd");
    txtLabel = document.getElementById("nav-ind");
    numLabel = document.getElementById("numLabel");
    cerLabel = document.getElementById("cerLabel");
    var1 = document.getElementById("var1");
    var2 = document.getElementById("var2");
    var3 = document.getElementById("var3");
    var4 = document.getElementById("var4");
    

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
        selectRight();

        codeArea.innerHTML = highlightSyntax(rawCode);
    });

    fwd.addEventListener("click", function()
    {
        curent++;
        if(curent == structuri.length - 1)
        {
            fwd.disabled = true;
            fwd.style.backgroundColor ="#5d6f81"
            fwd.style.cursor = 'not-allowed';
        }
        back.disabled = false;
        back.style.backgroundColor = "#2c3e50";
        back.style.cursor = 'pointer';
        changeElem();
        selectRight();

        codeArea.innerHTML = highlightSyntax(rawCode);
    });

    if(structuri.length == 1)
    {
        fwd.disabled = true;
    }
    back.disabled = true;

    rawCode = structuri[0].code;
    codeArea.innerHTML = highlightSyntax(rawCode);
    txtLabel.innerText = `${curent + 1}/${structuri.length}`;
    numLabel.innerText = `#${structuri[0].nr}`;
    cerLabel.innerText = structuri[0].text;

    var1.innerText = structuri[0].var1;
    var2.innerText = structuri[0].var2;
    var3.innerText = structuri[0].var3;
    var4.innerText = structuri[0].var4;

    back.disabled = true;
    back.style.backgroundColor ="#5d6f81"
    back.style.cursor = 'not-allowed';

    selectRight();
};