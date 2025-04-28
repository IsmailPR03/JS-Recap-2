const salary = 21001;
const isBCS = true;
const height = 68;
const hasCar = false;

// Ekta single Equal ("=") dewa mane man set kora ba man ta k boshano.
// jokhon double Equal ("==") dicchi er mane hocche ami compare kortesi

// if (salary > 20000 && height > 66) {
//     console.log('suuuuu---partro');
// } 
// else {
//     console.log('onno patro khuji');
// }
// Jodi '&&' thake tahole duitai shorto fullfill korte hobe

// if (salary > 25000 || height > 72) {
//     console.log('esho baba kobul');
// } 
// else {
//     console.log('vaag tui mokbul');
// }
// Jodi '||' thake tahole duitar ekta shorto fullfill korlei hobe

// More and More Condition
// if (salary > 25000 || height > 72 || isBCS == true) {
//     console.log('esho baba kobul');
// } 
// else {
//     console.log('vaag tui mokbul');
// }

if (salary > 25000 && height > 72 && isBCS == true) {
    console.log('esho baba kobul');
} 
else {
    console.log('vaag tui mokbul');
}

/**-----------------COMPLEX CONDITION---------------*/
if ((salary > 25000 && hasCar == true) || isBCS == true) {
    console.log('Tomar 14 gusti raji');
} 

if ((salary > 25000 || hasCar == true) && isBCS == true) {
    console.log('Tomar 14 gusti raji');
} 