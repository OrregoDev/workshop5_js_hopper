// Taller Macondo

// Caso # 1

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
  height: 55,
  length: 40,
  width: 20,
};

const userSuitcaseDimensions = {
  height: 60,
  length: 40,
  width: 20,
};

let reductionFactorHeight =
  allowedSuitcaseDimensions.height / userSuitcaseDimensions.height;
let reductionFactorLength =
  allowedSuitcaseDimensions.length / userSuitcaseDimensions.length;
let reductionFactorWidth =
  allowedSuitcaseDimensions.width / userSuitcaseDimensions.width;

let minReductionFactor = Math.min(
  reductionFactorHeight,
  reductionFactorLength,
  reductionFactorWidth
);

userSuitcaseDimensions.height *= minReductionFactor;
userSuitcaseDimensions.length *= minReductionFactor;
userSuitcaseDimensions.width *= minReductionFactor;

console.log(userSuitcaseDimensions);

// Caso # 3

const valueWifiHour = 50000;

function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

function decimalToCharacter(decimal) {
  return String.fromCharCode(decimal);
}

const binaryPassword = '01110010_01101001_01110111_01101001';
const binarySegments = binaryPassword.split('_');
const password = binarySegments
  .map(binaryToDecimal)
  .map(decimalToCharacter)
  .join('');

console.log(password);

budget -= valueWifiHour;

// Caso # 4

const statement = 'Taxi me puede llevar al hotel mariposas amarillas';
const statementWhitI = statement.replaceAll(/[aeou]/gi, 'i');
console.log(statementWhitI);

// Caso # 5

const amountToPay = 300000;

function runTaxiDriverChoice() {
  const options = ['papel', 'piedra', 'tijera'];
  return options[Math.floor(Math.random() * options.length)];
}

function determinateWinner(hildebrandoChoice, taxiDriverChoice) {
  if (hildebrandoChoice === taxiDriverChoice) {
    return 'empate';
  }
  if (
    (hildebrandoChoice === 'papel' && taxiDriverChoice === 'tijera') ||
    (hildebrandoChoice === 'piedra' && taxiDriverChoice === 'papel') ||
    (hildebrandoChoice === 'tijera' && taxiDriverChoice === 'piedra')
  ) {
    return 'pasajero';
  }
  return 'taxista';
}

function rockPaperScissors(hildebrandoChoice) {
  const taxiDriverChoice = runTaxiDriverChoice();
  const result = determinateWinner(hildebrandoChoice, taxiDriverChoice);

  if (result === 'pasajero') {
    console.log('El pasajero gana. Se le descontará el dinero de la deuda.');
    budget -= amountToPay;
  } else if (result === 'taxista') {
    console.log('El taxista gana. No se le descontará nada al pasajero.');
  } else {
    console.log('Empate. No pasa nada.');
  }
}

rockPaperScissors(prompt('piedra, papel o tijera?').toLowerCase());

// Caso # 6

let daysInHotel = 0;
let isAlive = true;

for (let day = 1; day <= 4; dia++) {
  console.log(`Día ${dia} de Hildebrando en Macondo`);
  let activity = prompt(
    '¿Qué actividad deseas realizar hoy? \n1. Amarillo \n2. Verde \n3. Roja  \n4. Azul)'
  );

  if (activity === '1') {
    let goToPool = confirm('¿Quieres ir a la piscina?');
    if (goToPool) {
      isAlive = false;
      console.log('Murió por demasiado cloro en la piscina.');
      break;
    }
  } else if (activity === '2') {
    let goForWalk = confirm('¿Quieres ir a la caminata?');
    if (goForWalk) {
      console.log('Irás a una hermosa cascada y tomarás fotos.');
    } else {
      console.log('Llegarás a cierto punto, te devolverás solo y te perderas.');
    }
  } else if (activity === '3') {
    let beachActivity = prompt(
      '¿Qué actividad deseas hacer en la playa? \n1. Voleibol \n2. Montar moto \n3. Tomar cocteles'
    );
    if (beachActivity === '1') {
      console.log('Voleibol, juega y la pasa genial.');
    } else if (beachActivity === '2') {
      console.log('Monta moto.');
    } else if (beachActivity === '3') {
      console.log(
        'te pones a tomar cocteles mientras descansas, de pronto sientes un fuerte dolor de cabeza y empiezas a perder la visión. Era chirrinchi adulterado, te tienes que devolver de emergencia.'
      );
      break;
    }
  } else if (actividad === '4') {
    let hotelActivity = prompt(
      '¿Qué actividad deseas hacer dentro del hotel? \n1. bingo \n2. bailar \n3. casino'
    );
    if (hotelActivity === '1') {
      console.log('Bingo, se lo gana y aumenta su dinero.');
      budget += 500000;
    } else if (hotelActivity === '2') {
      console.log('Bailar, y la pasa muy bien.');
    } else if (hotelActivity === '3') {
      console.log('Casino y apuesta, y solo se queda con pasaje de regreso.');
      budget -= 2000000;
      break;
    }
  }

  daysInHotel++;
}

spentMoney = 2500000 - budget;

console.log(`Hildebrando estuvo ${diasEnHotel} días en Macondo.`);
console.log(`${isAlive ? 'Pudo regresar' : 'Murió'} a casa.`);
console.log(`Gastó ${spentMoney} pesos.`);
