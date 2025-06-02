import { functii, siruri, divide } from "./probleme.js";
import { highlightSyntax } from "./codeHighlighter.js";

const codeArea = document.getElementById("coder");

const back = document.getElementById("back");
const fwd = document.getElementById("fwd");
const txtLabel = document.getElementById("nav-ind");
const numLabel = document.getElementById("numLabel");
const cerLabel = document.getElementById("cerLabel");
const probLabel = document.getElementById("probName");
const exmLabel = document.getElementById("exmLabel");
const input = document.getElementById("input");
const output = document.getElementById("output");

let curent = 0;
let rawCode = "";
let probleme = [];

function changeElem()
{
    txtLabel.innerText = `${curent + 1}/${probleme.length}`;
    rawCode = probleme[curent].code;
    cerLabel.innerText = probleme[curent].text;
    numLabel.innerText = `#${probleme[curent].nr}`;
    probLabel.innerText = probleme[curent].name;

    if(exmLabel !== null)
        exmLabel.innerText = probleme[curent].example;

    if(input !== null)
    {
        input.innerText = probleme[curent].input;
        output.innerText = probleme[curent].output;
    }
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

    codeArea.innerHTML = highlightSyntax(rawCode);
});

window.onload = function()
{
    if(document.getElementById("functii") !== null)
    {
        probleme = functii;
    }
    else if(document.getElementById("siruri") !== null)
    {
        probleme = siruri;
    }
    else if(document.getElementById("divide") !== null)
    {
        probleme = divide;
    }
    

    if(probleme.length == 1)
    {
        fwd.disabled = true;
    }
    back.disabled = true;

    changeElem();
    codeArea.innerHTML = highlightSyntax(rawCode);

    back.disabled = true;
    back.style.backgroundColor ="#5d6f81"
    back.style.cursor = 'not-allowed';
};