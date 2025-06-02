import { structuri, recursivitate } from "./probleme.js";
import { highlightSyntax } from "./codeHighlighter.js";


const codeArea = document.getElementById("coder");

const back = document.getElementById("back");
const fwd = document.getElementById("fwd");
const txtLabel = document.getElementById("nav-ind");
const numLabel = document.getElementById("numLabel");
const cerLabel = document.getElementById("cerLabel");

const var1 = document.getElementById("var1");
const var2 = document.getElementById("var2");
const var3 = document.getElementById("var3");
const var4 = document.getElementById("var4");

let curent = 0;
let rawCode = "";
let probleme = [];

function selectRight()
{
    if(probleme[curent].correct == 1)
    {
        var1.style.backgroundColor = 'lightgreen';
    }
    else if(probleme[curent].correct == 2)
    {
        var2.style.backgroundColor = 'lightgreen';
    }
    else if(probleme[curent].correct == 3)
    {
        var3.style.backgroundColor = 'lightgreen';
    }
    else if(probleme[curent].correct == 4)
    {
        var4.style.backgroundColor = 'lightgreen';
    }
}

function changeElem()
{
    txtLabel.innerText = `${curent + 1}/${probleme.length}`;
    rawCode = probleme[curent].code;
    cerLabel.innerText = probleme[curent].text;
    numLabel.innerText = `#${probleme[curent].nr}`;
    
    var1.innerText = probleme[curent].var1;
    var2.innerText = probleme[curent].var2;
    var3.innerText = probleme[curent].var3;
    var4.innerText = probleme[curent].var4;

    var1.style.backgroundColor = 'white';
    var2.style.backgroundColor = 'white';
    var3.style.backgroundColor = 'white';
    var4.style.backgroundColor = 'white';
}

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
    if(curent == probleme.length - 1)
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

window.onload = function()
{
    if(document.getElementById("recursivitate") !== null)
    {
        probleme = recursivitate;
    }
    if(document.getElementById("structuri") !== null)
    {
        probleme = structuri;
    }
    
    if(probleme.length == 1)
    {
        fwd.disabled = true;
    }
    back.disabled = true;

    rawCode = probleme[0].code;
    codeArea.innerHTML = highlightSyntax(rawCode);
    txtLabel.innerText = `${curent + 1}/${probleme.length}`;
    numLabel.innerText = `#${probleme[0].nr}`;
    cerLabel.innerText = probleme[0].text;

    var1.innerText = probleme[0].var1;
    var2.innerText = probleme[0].var2;
    var3.innerText = probleme[0].var3;
    var4.innerText = probleme[0].var4;

    back.disabled = true;
    back.style.backgroundColor ="#5d6f81"
    back.style.cursor = 'not-allowed';

    selectRight();
};