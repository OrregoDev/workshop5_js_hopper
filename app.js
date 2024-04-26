// Taller Macondo

// Caso # 1

let budget = 2500000;

function getOption() {
  while (true) {
    const mealChoice = prompt(
      'Que te gustaria comer? \n1. Almojábana con gaseosa \n2. Subway con gaseosa \n3. Nada'
    );
    if (!isNaN(mealChoice) && mealChoice > 0 && mealChoice < 4) {
      return mealChoice;
    } else {
      alert('Por favor ingresa una opcion valida.');
    }
  }
}

const mealChoice = getOption();

if (mealChoice === '3') {
  alert('Te tocara comprar algo en Medellin');
} else if (mealChoice === '1') {
  alert(
    'Esta eleccion de comida te cae mal porque llevas mucho tiempo en el stand'
  );
  budget -= 15000;
} else if (mealChoice === '2') {
  alert('¡Quedas lleno y bien!');
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

const newUserSuitcaseDimensions = {
  height: userSuitcaseDimensions.height * minReductionFactor,
  length: Math.floor(userSuitcaseDimensions.length * minReductionFactor),
  width: Math.floor(userSuitcaseDimensions.width * minReductionFactor),
};

alert(
  `La maleta debe ajustarse a las medidas de: \nAlto: ${newUserSuitcaseDimensions.height}cm \nAncho: ${newUserSuitcaseDimensions.width}cm \nLargo: ${newUserSuitcaseDimensions.length}cm `
);

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

alert(
  `La clave del WiFi es ${password} y se te descontaran ${valueWifiHour} pesos por hora.`
);

budget -= valueWifiHour;

// Caso # 4

const statement = 'Taxi me puede llevar al hotel mariposas amarillas';
const statementWhitI = statement.replaceAll(/[aeou]/gi, 'i');
alert(statementWhitI);

// Caso # 5

const amountToPay = 300000;

function getChoice() {
  const options = ['papel', 'piedra', 'tijera'];
  return options[Math.floor(Math.random() * options.length)];
}

let hildebrandoChoice = getChoice();
let taxiDriverChoice = getChoice();

function determinateWinner(hildebrandoChoice, taxiDriverChoice) {
  if (hildebrandoChoice === taxiDriverChoice) {
    return 'empate';
  }
  if (
    (hildebrandoChoice === 'papel' && taxiDriverChoice === 'tijera') ||
    (hildebrandoChoice === 'piedra' && taxiDriverChoice === 'papel') ||
    (hildebrandoChoice === 'tijera' && taxiDriverChoice === 'piedra')
  ) {
    return 'taxista';
  }
  return 'Hildebrando';
}

function rockPaperScissors() {
  const result = determinateWinner(hildebrandoChoice, taxiDriverChoice);

  if (result === 'Hildebrando') {
    alert('Ganaste. No se te descontará el dinero del transporte.');
  } else if (result === 'taxista') {
    alert('El taxista gana. se te descontará el dinero del transporte');
    budget -= amountToPay;
  } else {
    alert('Empate. No pasa nada.');
  }
}
rockPaperScissors();

// Caso # 6

let daysInHotel = 0;
let isAlive = true;

for (let day = 1; day <= 4; day++) {
  alert(`Día ${day} de Hildebrando en Macondo`);

  function getClothesColor() {
    while (true) {
      const clothesColor = prompt(
        '¿Con que color deseas vestirte en el hotel? \n1. Amarillo \n2. Verde \n3. Roja  \n4. Azul'
      );
      if (!isNaN(clothesColor) && clothesColor > 0 && clothesColor < 5) {
        return clothesColor;
      } else {
        alert('Por favor selecciona un color valido.');
      }
    }
  }
  const clothesColor = getClothesColor();

  if (clothesColor === '1') {
    let goToPool = confirm('¿Quieres entrara la piscina?');
    if (goToPool) {
      isAlive = false;
      alert('Mueres por demasiado cloro en la piscina.');
      break;
    }
  } else if (clothesColor === '2') {
    let goForWalk = confirm('¿Quieres hacer la caminata completa?');
    if (goForWalk) {
      alert('Llegas a una hermosa cascada y tomas muchas fotos.');
    } else {
      alert(
        'Llegas hasta cierto punto, te devuelves solo y te pierdes toda la noche.'
      );
    }
  } else if (clothesColor === '3') {
    function getBeachActivity() {
      while (true) {
        const beachActivity = prompt(
          '¿Qué actividad deseas hacer en la playa? \n1. Voleibol \n2. Monta moto \n3. Tomar cocteles'
        );
        if (!isNaN(beachActivity) && beachActivity > 0 && beachActivity < 4) {
          return beachActivity;
        } else {
          alert('Por favor selecciona una actividad valida.');
        }
      }
    }
    const beachActivity = getBeachActivity();

    if (beachActivity === '1') {
      alert('Juegas Voleibol y la pasas genial.');
    } else if (beachActivity === '2') {
      alert('Montas moto y te diviertes mucho.');
    } else if (beachActivity === '3') {
      alert(
        'Te pones a tomar cocteles mientras descansas, de pronto sientes un fuerte dolor de cabeza y empiezas a perder la visión. Era chirrinchi adulterado, te tienes que devolver a tu ciudad de emergencia.'
      );
      break;
    }
  } else if (clothesColor === '4') {
    function getHotelActivity() {
      while (true) {
        const hotelActivity = prompt(
          '¿Qué actividad deseas hacer en el hotel? \n1. Bingo \n2. Bailar \n3. Casino'
        );
        if (!isNaN(hotelActivity) && hotelActivity > 0 && hotelActivity < 4) {
          return hotelActivity;
        } else {
          alert('Por favor selecciona una actividad valida.');
        }
      }
    }
    const hotelActivity = getHotelActivity();

    if (hotelActivity === '1') {
      alert('Te ganas 500.000 pesos en el Bingo.');
      budget += 500000;
    } else if (hotelActivity === '2') {
      alert('Bailas y la pasa muy bien.');
    } else if (hotelActivity === '3') {
      alert('Apuestas y solo te quedas con el pasaje de regreso.');
      budget -= 2000000;
    }
  }

  daysInHotel++;
}

spentMoney = 2500000 - budget;

alert(`Hildebrando estuvo ${daysInHotel} días en Macondo.`);
alert(`Hildebrando ${isAlive ? 'Pudo regresar' : 'Murió'}`);
alert(`Gastó ${spentMoney} pesos.`);
