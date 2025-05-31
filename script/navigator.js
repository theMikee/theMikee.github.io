import { probleme } from "./probleme.js";
import { highlightSyntax } from "./codeHighlighter.js";

// let back = document.getElementById("");
// let fwd = document.getElementById("");
// let txtLabel = document.getElementById("");

let curent = 0;
let rawCode = probleme[0].text;

// back.addEventListener("click", function()
// {
//     curent--;
//     if(current == 0)
//     {
//         back.disabled = true;
//     }
//     txtLabel.innerText = `${current + 1}/${probleme.length}`;
//     rawCode = probleme[curent].text;

//     highlightSyntax(rawCode);
// });

// fwd.addEventListener("click", function()
// {
//     curent++;
//     if(current == probleme.length - 1)
//     {
//         fwd.disabled = true;
//     }
//     txtLabel.innerText = `${current + 1}/${probleme.length}`;
//     rawCode = probleme[curent];

//     highlightSyntax(rawCode);
// });

window.onload = function()
{
    highlightSyntax(rawCode);
    alert("sad");
};