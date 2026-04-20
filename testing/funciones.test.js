const {sumar} = require('./funciones.js');

test('sumar(2,5) debe retornar (7)', () =>{
    // expect(sumar(2, 5)).toBe(4) //falla -> FAIL
    expect(sumar(2, 5)).toBe(7) // funciona -> PASS
})