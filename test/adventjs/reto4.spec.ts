// Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo. Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, anchura y altura.

// Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar todas las cajas en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así sucesivamente).

// Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una longitud de 2, una anchura de 3 y una altura de 2.

// Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2. Veamos unos ejemplos:

import { fitsInOneBox } from '../../src/adventjs/reto4';

describe('reto4', () => {
    it('should 2 boxes true', () => {
        expect(
            fitsInOneBox([
                { l: 1, w: 1, h: 1 },
                { l: 2, w: 2, h: 2 }
            ])
        ).toBe(true);
    });

    it('should boxes false', () => {
        expect(
            fitsInOneBox([
                { l: 1, w: 1, h: 1 },
                { l: 2, w: 2, h: 2 },
                { l: 3, w: 1, h: 3 }
            ])
        ).toBe(false);
    });
});
