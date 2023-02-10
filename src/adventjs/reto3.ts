// Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

// Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un límite de peso máximo que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

// Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.

export function distributeGifts(packOfGifts:string[], reindeers:string[]){

  // 1. Calcular el peso de cada regalo
  const packsOdGiftsWeight = packOfGifts.map((gift) => gift.length);

  // 2. Calcular el peso total de la caja de regalos
  const totalWeight = packsOdGiftsWeight.reduce((a, b) => a + b, 0);

  // 3. Calcular el peso máximo que puede llevar cada reno
  const reindeersMaxWeight = reindeers.map((reindeer) => reindeer.length * 2);

  // 4. Calcular el peso máximo que puede llevar el trineo
  const sleighMaxWeight = reindeersMaxWeight.reduce((a, b) => a + b, 0);

  // 5. Calcular el número de cajas de regalos que puede llevar el trineo
  return Math.floor(sleighMaxWeight / totalWeight);

}