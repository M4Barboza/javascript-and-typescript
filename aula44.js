/* try {
    console.log(naoExisto);
} catch (err) {
    console.log('naoExisto não existe');
    console.log(err);
}
 */

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números');
    }
    return x + y;
}

try {
    console.log(soma(10, 11));
    console.log(soma('10', 11));
} catch (error) {
    //console.log(error);
    console.log('Deu erro ai meu bom');
}
