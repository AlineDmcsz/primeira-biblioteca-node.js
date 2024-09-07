// Referenciando a biblioteca fs (file system) para interagir com o sistema de arquivos
const fs = require('fs');

// Obtendo os argumentos passados na linha de comando
const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; // O terceiro argumento deve ser o caminho do arquivo

// Verificando se o caminho do arquivo foi passado
if (!link) {
    console.error('Por favor, forneça o caminho para o arquivo.');
    process.exit(1); // Sai do programa com erro
}

// Lendo o arquivo com o encoding 'utf-8'
fs.readFile(link, 'utf-8', (erro, texto) => {
    quebraDePalavras(texto);
    //verificaPalavrasDuplicadas(texto);
    });

// O sistema de encoding UTF-8 é utilizado para codificar caracteres no nosso idioma e em muitos outros idiomas que utilizam a escrita latina.

//criar um array com as palavras
// contar as ocorrencias
//montar um objeto com o resultado

function quebraDePalavras(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.map((paragrafo) => {
        return verificaPalavrasDuplicadas(paragrafo);
    })
    console.log(contagem);
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    //objeto[propriedade] = valor;
    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1
    })
    return resultado;
}
