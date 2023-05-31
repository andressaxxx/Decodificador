/* CRIPTOGRAFAR

    Verificar o método replace():
        Solução: O método replace pode ser utilizado com expressçoes regulares. Um ponto de atenção é que o método replace() não altera a string de origem, ela retorna a string com a modificação, por isso é necessário assimilá-lo à uma variável.
    Fazer a codificação da frase utilizando o replace:
        Tentativa 1: usar o método replace com uma regEx global para alterar todos os valor da frase.
            Dificuldade: Como vou passar os todos os valores a serem trocados de uma unica vez após a regEx dentro replace. 
        - O replace só faz a alteração de um único argumento
                Verificar se o replace() aceita mais de um argumento.
        Tentativa 2: abrir a string, fazer o replace para cada váriavel com case e dafault, atribuir todos esses valores a um novo array e fazer o join dele sem nem uma separação.
*/

let keys = [ 
    [ "decryption", {
        "a": /ai/g,
        "e": /enter/g,
        "i": /imes/g,
        "o": /ober/g,
        "u": /ufat/g
        }   
    ], 
    [ "cryptography", [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"],
        ]
    ]
];


const encryptButton = document.querySelector(".botao-criptografar");
const decryptButton = document.querySelector(".botao-descriptografar");


function encrypt() {

    let userCode = document.querySelector(".texto-digitado");
    
    const encryptedArray = [];

    for ( let letter of userCode.value ) {
        
        switch ( letter ) {
            case "a":
                encryptedArray.push(letter.replace(keys[1][1][0][0], keys[1][1][0][1]));
                break;
            case "e" :
                encryptedArray.push(letter.replace(keys[1][1][1][0], keys[1][1][1][1]));
                break;
            case "i":
                encryptedArray.push(letter.replace(keys[1][1][2][0], keys[1][1][2][1]));
                break;
            case "o":
                encryptedArray.push(letter.replace(keys[1][1][3][0], keys[1][1][3][1]));
                break;
            case "u":
                encryptedArray.push(letter.replace(keys[1][1][4][0], keys[1][1][4][1]));
                break;
            default:
                encryptedArray.push(letter);     
        }
    };

    userCode.value = encryptedArray.join("");

};

encryptButton.onclick = encrypt; 

/*
    DESCRIPTOGRAFAR

    O método replace funciona letra a letra. Dessa vez será preciso percorrer o arrai e utilizar a expressão regular para fazer a descriptografia mas pode usar o mesmo processo do cripografador
        -Tentativa1: Percorrer a string com as regEx de descriptografia, porém aqui o processo é inverso, será usada uma regEx global para fazer as todas as alterações do mesmo valor da chave de uma única vez
*/


function decrypt() {

    let userCode = document.querySelector(".texto-digitado");
    
    let userCodeDecrypted = userCode.value;

    for ( let property in keys[0][1] ) {
    
        userCodeDecrypted = userCodeDecrypted.replace(keys[0][1][property], property);

    };
    
   userCode.value = userCodeDecrypted
    
};

decryptButton.onclick = decrypt;
 



