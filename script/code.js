function highlightSyntax(code)
{
    alert("did");
    let highlightedCode = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const rules = [
        // 1. Comments (single-line)
        { pattern: /(\/\/[^\n\r]*)/g, className: 'cpp-comment' },

        // 2. Preprocessor directives (e.g., #include <iostream>, #define PI 3.14)
        // Matches from start of line (optional whitespace) #directive followed by the rest of the line.
        { pattern: /^(?:[ \t]*)(#.*(?:\\(?:\r\n|\n|\r)|[^(\r\n)]*))/gm, className: 'cpp-preprocessor' },


        // 3. String literals (double-quoted) and Character literals (single-quoted)
        { pattern: /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g, className: 'cpp-string' },

        // 4. Numbers (integers, floating-point)
        { pattern: /\b([0-9]+\.[0-9]*([0-9]+)?|\.[0-9]+([0-9]+)?|[0-9]+([0-9]+)|[0-9])\b/g, className: 'cpp-number' },


        // 5. Keywords (common C++ keywords)
        { pattern: /\b(int|unsigned|using|namespace|float|char|const|while|for|if|else)\b/g, className: 'cpp-keyword' },

        // 6. Common types and standard library elements (e.g., std::string, cout, vector)
        { pattern: /\b(std::\w+|cout|cin|endl|)\b/g, className: 'cpp-type' },
    ];

    let charStyled = new Array(highlightedCode.length).fill(false);
    let matchesToApply = [];

    rules.forEach(rule => {
        let match;

        rule.pattern.lastIndex = 0;
        while((match = rule.pattern.exec(highlightedCode)) !== null)
        {
            const startInd = match.index;
            const endInd = startInd + match[0].length;

            let styled = false;
            for(let i = startInd; i < endInd; i++)
            {
                if(charStyled[i])
                {
                    styled = true;
                    break;
                }
            }

            if(!styled)
            {
                matchesToApply.push({
                    start: startInd,
                    end: endInd,
                    className: rule.className,
                    text: match[0]
                });

                for(let i = startInd; i < endInd; i++)
                {
                    charStyled[i] = true;
                }
            }
        }
    });

    matchesToApply.sort((a, b) => a.start - b.start);

    let finalHtml = "";
    let i = 0;
    matchesToApply.forEach(match => {
        finalHtml += highlightedCode.substring(i, match.start);
        finalHtml += '<span class = "${match.className}">${match.text}</span>';
        i = match.end;
    });

    finalHtml += highlightedCode.substring(i);

    alert("did");
    return finalHtml;
}

function loaded()
{
    let ht = document.getElementById("coder");
    alert("did2");
    ht.innerHTML = highlightSyntax(ht.innerText);
}