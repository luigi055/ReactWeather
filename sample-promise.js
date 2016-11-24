// function getTempCallback(location, callback) {
//   callback(undefined, 70);
//   callback('City not found');
// }

// getTempCallback('Philadelphia', (err, temp) => {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('Success', temp);
//   }
// });

// function getTempPromise (location) {
//   return new Promise((resolve, reject) => {
//     setTimeout( () => {
//       resolve(79);
//       reject('City not found!');
//     }, 1000); //Creating delay;
//   });
// }

//.then(success case function, error case function)
// getTempPromise('Philadelphia').then(temp => {
//   console.log('Promise Success', temp);
// }, err => {
//   console.log('Promise Error', err);
// });

//Challange Area

function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A & B need to be numbers');
    }
  });
}

addPromise(2, 5).then(sum => {
  console.log('Success', sum);
}, err => {
  console.log('Error', err);
});

addPromise('2', 5).then(sum => {
  console.log('Success', sum);
}, err => {
  console.log('Error', err);
});

addPromise(2, false).then(sum => {
  console.log('Success', sum);
}, err => {
  console.log('Error', err);
});


