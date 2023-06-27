import { pinyinToWadeTable, pinyinToZhuyinTable } from "./dictionary.js";

const inputText = document.querySelector('#inputText');
const conversionType = document.querySelector('#conversionType');
const convertBtn = document.querySelector('#convertBtn');
const outputText = document.querySelector('#outputText');

console.log ('this is good.')
console.log (pinyinToWadeTable) 
convertBtn.addEventListener("click", () => {
    const inputTextValue = inputText.value;
    const inputWords = inputTextValue.split(' ');
    let dictionary;

    if (conversionType.value === "wade-giles") {
        dictionary = pinyinToWadeTable;
    } else if (conversionType.value === "zhuyin") {
        dictionary = pinyinToZhuyinTable;
    }

    outputText.value = inputWords.map(word => dictionary[word]).join(' ');
});



