// Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo. Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, anchura y altura.

// Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar todas las cajas en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así sucesivamente).

// Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una longitud de 2, una anchura de 3 y una altura de 2.

// Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2. Veamos unos ejemplos:

type Box = {
    l: number;
    w: number;
    h: number;
};

export function fitsInOneBox(boxes: Box[]): boolean {
    const orderBoxes:Box[] = boxes.sort((a, b) => {
        const aMax = Math.max(a.l, a.w, a.h);
        const bMax = Math.max(b.l, b.w, b.h);
        return aMax - bMax;
    });
    const oldBox: Box = { l: 0, w: 0, h: 0 };
    for (const box of orderBoxes) {
        if (box.l > oldBox.l && box.w > oldBox.w && box.h > oldBox.h) {
            oldBox.l = box.l;
            oldBox.w = box.w;
            oldBox.h = box.h;
        } else {
            return false;
        }
    }
    return true;
}
