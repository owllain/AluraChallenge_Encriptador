const input = document.getElementById("input-text");
const output = document.getElementById("output-text");

// Función para verificar si una cadena contiene solo minúsculas y caracteres permitidos
function onlyContainsLowercase(str) {
return /^[a-z0-9/ /:;,.¿?¡!]+$/.test(str);
}

// Función para encriptar el texto de entrada
function encrypt() {
    const chars = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };

    if (onlyContainsLowercase(input.value)) {
        let encryptedText = input.value.replace(/[aeiou]/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("result").classList.add("show");
        output.textContent = encryptedText;
    } else {
        alert("Recuerda, sólo letras minúsculas y sin acentos");
    }

    document.getElementById("paste").style.display = "none";
}

// Función para desencriptar el texto de entrada
function desencrypt() {
    const chars = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    };

    if (onlyContainsLowercase(input.value)) {
        let desencriptedText = input.value.replace(/ai|enter|imes|ober|ufat/g, c => chars[c]);
        document.getElementById("not-found").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("result").classList.add("show");
        output.textContent = desencriptedText;
    } else {
        alert("Recuerda, sólo letras minúsculas y sin acentos");
    }

    document.getElementById("paste").style.display = "none";
}


// Función para copiar el texto encriptado/desencriptado al portapapeles
function copy() {
let copyText = document.getElementById("output-text").innerText;
navigator.clipboard.writeText(copyText);
document.getElementById("paste").style.display = "block";
}

// Función para pegar el texto del portapapeles en el campo de entrada
function paste() {
navigator.clipboard.readText().then((clipText) => {
    input.value = clipText;
});
}
