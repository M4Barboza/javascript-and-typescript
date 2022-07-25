/* try {
    //console.log(a);
    console.log('Abri o arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
    try {
        console.log(b);
    } catch (e) {
        console.log('Deu erro');
    } finally {
        console.log('Também sou FINALLY');
    }
    //É executada quando não há erros
} catch (e) {
    //É executada quando há erros
    console.log('Tratando o erro');
} finally {
    console.log('Eu, FINALLY, sempre sou executado');
    //sempre
} */

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        second: '2-digit',
        minute: '2-digit',
    })
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(11);
    console.log(hora);
} catch (e) {
    //Tratar erro
} finally {
    console.log('Tenha um bom dia');
}