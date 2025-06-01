import { functii, siruri, structuri, recursivitate, divide } from "./probleme.js";
import { highlightSyntax } from "./codeHighlighter.js";

const codeArea = document.getElementById("coder");

const back = document.getElementById("back");
const fwd = document.getElementById("fwd");
const txtLabel = document.getElementById("nav-ind");
const numLabel = document.getElementById("numLabel");
const cerLabel = document.getElementById("cerLabel");
const probLabel = document.getElementById("probName");

let curent = 0;
let rawCode = "";
let probleme = [];

back.addEventListener("click", function()
{
    curent--;
    if(curent == 0)
    {
        back.disabled = true;
    }
    txtLabel.innerText = `${curent + 1}/${probleme.length}`;
    rawCode = probleme[curent].code;
    cerLabel.innerText = probleme[curent].text;
    numLabel.innerText = `#${probleme[curent].nr}`;
    probLabel.innerText = probleme[curent].name;
    fwd.disabled = false;
    console.log("current= " + curent);

    codeArea.innerHTML = highlightSyntax(rawCode);
});

fwd.addEventListener("click", function()
{
    curent++;
    if(curent == probleme.length - 1)
    {
        fwd.disabled = true;
    }
    txtLabel.innerText = `${curent + 1}/${probleme.length}`;
    rawCode = probleme[curent].code;
    cerLabel.innerText = probleme[curent].text;
    numLabel.innerText = `#${probleme[curent].nr}`;
    probLabel.innerText = probleme[curent].name;
    back.disabled = false;
    console.log("current= " + curent);

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
    else if(document.getElementById("recursivitate") !== null)
    {
        probleme = recursivitate;
    }
    else if(document.getElementById("structuri") !== null)
    {
        probleme = structuri;
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

    rawCode = probleme[0].code;
    codeArea.innerHTML = highlightSyntax(rawCode);
    txtLabel.innerText = `${curent + 1}/${probleme.length}`;
    numLabel.innerText = `#${probleme[0].nr}`;
    cerLabel.innerText = probleme[0].text;
    probLabel.innerText = probleme[0].name;
};