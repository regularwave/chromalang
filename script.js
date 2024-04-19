var convertedOutput = document.getElementById('converted');

function doconvert() {
    var inputText = document.getElementById('inputText').value;
    convertedOutput.innerHTML = '';
    const eArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '.', ',', '?', '!', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const cArr = ['∴', '‡', '∨', '≤', '•', '‡', '≥', '≤', '∸', '∦', '∨', '‡', '≡', '∧', '≔', '≥', '∦', '≤', '∧', '∧', '≕', '∨', '≥', '≡', '∦', '≡', '‒', '≀', '~', '∘', '▣', '◳', '◲', '◱', '◰', '◯', '◷', '◶', '◵', '◴', ' ', '∴', '‡', '∨', '≤', '•', '‡', '≥', '≤', '∸', '∦', '∨', '‡', '≡', '∧', '≔', '≥', '∦', '≤', '∧', '∧', '≕', '∨', '≥', '≡', '∦', '≡'];
    const uArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const colorCArr = ['f', 'g', 'h', 'j', 's', 'v', 'z', 'F', 'G', 'H', 'J', 'S', 'V', 'Z'];
    const colorMArr = ['b', 'd', 'k', 'p', 'q', 't', 'x', 'B', 'D', 'K', 'P', 'Q', 'T', 'X'];
    const colorYArr = ['c', 'l', 'm', 'n', 'r', 'w', 'y', 'C', 'L', 'M', 'N', 'R', 'W', 'Y'];
    const colorKArr = ['a', 'e', 'i', 'o', 'u', '.', ',', '!', '?', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'E', 'I', 'O', 'U'];

    // const inputText = "AThis is a te+st . .+z";

    for (let i = 0; i < inputText.length; i++) {
        if (uArray.includes(inputText[i])) {
            var span = document.createElement('span');
            span.classList.add('k');
            span.appendChild(document.createTextNode("|"));
            convertedOutput.appendChild(span);
        }

        var span = document.createElement('span');
        if (eArr.includes(inputText[i])) {
            if (colorCArr.includes(inputText[i])) { span.classList.add('c') }
            if (colorMArr.includes(inputText[i])) { span.classList.add('m') }
            if (colorYArr.includes(inputText[i])) { span.classList.add('y') }
            if (colorKArr.includes(inputText[i])) { span.classList.add('k') }
            span.appendChild(document.createTextNode(cArr[eArr.indexOf(inputText[i])]));
        } else {
            span.classList.add('f');
            span.appendChild(document.createTextNode(inputText[i]));
        }
        convertedOutput.appendChild(span);

    }
}
