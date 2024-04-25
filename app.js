// Taller Macondo

// Caso # 1

let daysInMacondo = 4;
let isAlive = true;
let budget = 2500000;

let mealChoice = prompt(
  'Que te gustaria comer? \n1. Almojábana con gaseosa \n2. Subway con gaseosa \n3. Nada'
);

if (mealChoice === '3') {
  alert('Te tocara comprar algo en Medellin');
} else if (mealChoice === '1') {
  alert(
    'Esta eleccion de comida puede caerte mal porque llevas mucho en el stand'
  );
  budget -= 15000;
} else if (mealChoice === '2') {
  alert('¡Quedaras lleno y bien!');
  budget -= 23000;
}
// Caso # 2

const allowedSuitcaseDimensions = {
  Height: 55,
  Length: 40,
  Width: 20,
};

const userSuitcaseDimensions = {
  Height: 60,
  Length: 40,
  Width: 20,
};

let reductionFactorHeight =
  allowedSuitcaseDimensions.Height / userSuitcaseDimensions.Height;
let reductionFactorLength =
  allowedSuitcaseDimensions.Length / userSuitcaseDimensions.Length;
let reductionFactorWidth =
  allowedSuitcaseDimensions.Width / userSuitcaseDimensions.Width;

let minReductionFactor = Math.min(
  reductionFactorHeight,
  reductionFactorLength,
  reductionFactorWidth
);

userSuitcaseDimensions.Height *= minReductionFactor;
userSuitcaseDimensions.Length *= minReductionFactor;
userSuitcaseDimensions.Width *= minReductionFactor;

console.log(userSuitcaseDimensions);
