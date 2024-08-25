
const toggleOutput = () => {
    const divEmpty = document.querySelector('#container-text-result-empty');
    divEmpty.classList.toggle('hidden');
    divEmpty.classList.toggle('flex');

    const divFilled = document.querySelector('#container-text-result-filled');
    divFilled.classList.toggle('hidden');
    divFilled.classList.toggle('flex');

    const copyBtn = document.querySelector('.container-copy');
    copyBtn.classList.toggle('hidden');
    copyBtn.classList.toggle('flex');
}

const encrypt = (text) => {
   const mapChar = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
   }

   return text.split('').map(char => mapChar[char] || char).join('');
}

const decrypt = (text) => {
    mapWord = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    }

    return text.replace(/enter|imes|ai|ober|ufat/g, match => mapWord[match]);
}

const cripBtn = document.querySelector('#crip-btn');
cripBtn.addEventListener('click', () => {
    const output = document.querySelector('#container-text-result-empty');
    if (output.classList.contains('hidden')) {
        document.querySelector('#textarea-output').value = '';
        toggleOutput();
    } 
    const input = document.querySelector('#textarea-input');
    const regex = /^[a-z\s.,!?;:'"]+$/;
    if (regex.test(input.value)) {
        const textEncrypt = encrypt(input.value);
        input.value = '';
        const output = document.querySelector('#textarea-output');
        output.value = '';
        output.value = textEncrypt;
        toggleOutput();
    } 
    else {
        Swal.fire({
            icon: "error",
            text: "Utilize apenas letras minúsculas e sem acento."
        })
    }
})

const descripBtn = document.querySelector('#descrip-btn');
descripBtn.addEventListener('click', () => {
    const divEmpty = document.querySelector('#container-text-result-empty');
    if (divEmpty.classList.contains('hidden')) {
        document.querySelector('#textarea-output').value = '';
        toggleOutput();
    } 
    const input = document.querySelector('#textarea-input');
    if (!input.value) return;
    textDecrypit = decrypt(input.value);
    input.value = '';
    const output = document.querySelector('#textarea-output');
    output.value = textDecrypit;
    console.log(textDecrypit);
    
    toggleOutput();
})

const copyBtn = document.querySelector('#copy-btn');
copyBtn.addEventListener('click', () => {
    const output = document.querySelector('#textarea-output');
    navigator.clipboard.writeText(output.value);
    output.value = '';
    toggleOutput();
})