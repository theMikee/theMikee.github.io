const recursivitate =[
{
    nr: 481,
    text: `Subprogramul F este definit mai jos.
    Prin care dintre instrucţiunile următoare se poate apela subprogramul pentru a afişa, în ordine strict descrescătoare, toţi divizorii pozitivi proprii ai numărului 2015 (divizori naturali diferiți de 1 și de 2015).`,
    code: `void F (int n, int d)
{ if(d<n/2) F(n, d+1);
  if(n%d==0)
  cout<<d<<’ ’;
}`,
    var1: `F(2015,2015);`,
    var2: `F(2015,1);`,
    var3: `F(2015,2);`,
    var4: `F(2015,d);`,
    correct: 3
}, 

{
    nr: 1199,
    text: `Subprogramul f este definit mai jos.
    Indicați valoarea f(38627).`,
    code: `int f(int n)
{ int c;
  if (n==0) return 9;
  c=f(n/10); if (n%10<c) return n%10;
  return c;
}`,
    var1: `2`,
    var2: `3`,
    var3: `7`,
    var4: `8`,
    correct: 1
}, 

{
    nr: 1232,
    text: `Subprogramele f1 și f2 sunt definite mai jos. Indicați valoarea f2(41382).`,
    code: `int f1(int c)
{ if (c%2==1) return 1; 
  else return 2; 
}

int f2(int n) 
{ if (n==0) return 0; 
  else returnf1(n%10)+f2(n/10);
}`,
    var1: `7`,
    var2: `8`,
    var3: `9`,
    var4: `10`,
    correct: 2
}, 

{
    nr: 917,
    text: `Subprogramele f1 şi f2 sunt definite mai jos.
    Cel mai mare divizor comun al lui 30 și 50 se obține în urma apelului:`,
    code: `int f1 (int x, int y)
{ if(x%2!=0 || y%2!=0)return 1;
else return 2*f1(x/2,y/2);
}

int f2 (int x, int y)
{ if (x==y) return x;
else
if(x>y) return f2(x-y,y);
else return f2(x, y-x);
}`,
    var1: `f1(30,50)`,
    var2: `f2(30,50)`,
    var3: `f1(30/2,50)`,
    var4: `f2(30/2,50)`,
    correct: 2
}, 

{
    nr: 586,
    text: `Subprogramul f are definiţia de mai jos. Ce se va afişa în urma apelului f(12345)?`,
    code: `void f(long n)
{ if (n>9)
  { cout<<n/100; | printf(“%d”,n/100);
    f(n/10);
  }
}`,
    var1: `1231210`,
    var2: `123121`,
    var3: `1234123121`,
    var4: `123`,
    correct: 1
}, 
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
    if(recursivitate[curent].correct == 1)
    {
        var1.style.backgroundColor = 'lightgreen';
    }
    else if(recursivitate[curent].correct == 2)
    {
        var2.style.backgroundColor = 'lightgreen';
    }
    else if(recursivitate[curent].correct == 3)
    {
        var3.style.backgroundColor = 'lightgreen';
    }
    else if(recursivitate[curent].correct == 4)
    {
        var4.style.backgroundColor = 'lightgreen';
    }
}

function changeElem()
{
    txtLabel.innerText = `${curent + 1}/${recursivitate.length}`;
    rawCode = recursivitate[curent].code;
    cerLabel.innerText = recursivitate[curent].text;
    numLabel.innerText = `#${recursivitate[curent].nr}`;
    
    var1.innerText = recursivitate[curent].var1;
    var2.innerText = recursivitate[curent].var2;
    var3.innerText = recursivitate[curent].var3;
    var4.innerText = recursivitate[curent].var4;

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
        if(curent == recursivitate.length - 1)
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

    if(recursivitate.length == 1)
    {
        fwd.disabled = true;
    }
    back.disabled = true;

    rawCode = recursivitate[0].code;
    codeArea.innerHTML = highlightSyntax(rawCode);
    txtLabel.innerText = `${curent + 1}/${recursivitate.length}`;
    numLabel.innerText = `#${recursivitate[0].nr}`;
    cerLabel.innerText = recursivitate[0].text;

    var1.innerText = recursivitate[0].var1;
    var2.innerText = recursivitate[0].var2;
    var3.innerText = recursivitate[0].var3;
    var4.innerText = recursivitate[0].var4;

    back.disabled = true;
    back.style.backgroundColor ="#5d6f81"
    back.style.cursor = 'not-allowed';

    selectRight();
};