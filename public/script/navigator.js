import { functii, siruri } from "./probleme.js";
import { highlightSyntax } from "./codeHighlighter.js";

const codeArea = document.getElementById("coder");

let back = document.getElementById("back");
let fwd = document.getElementById("fwd");
let txtLabel = document.getElementById("nav-ind");

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
    rawCode = probleme[curent].text;
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
    rawCode = probleme[curent].text;
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
        
    }
    else if(document.getElementById("structuri") !== null)
    {
        
    }
    else if(document.getElementById("divide") !== null)
    {
        
    }
    
    rawCode = probleme[0].text;
    codeArea.innerHTML = highlightSyntax(rawCode);
    txtLabel.innerText = `${curent + 1}/${probleme.length}`;
};