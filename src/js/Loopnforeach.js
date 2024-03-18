// import React from 'react';

// const App = () => {
//   const numbers = [11, 22, 44, 55, 77];

//   for (let n of numbers) {
//     console.log(n);
//   }

//   let totalSum = 0;

//   for (let n of numbers) {
//     totalSum += n;
//   }

//   return (
//     <div>
//       <p>Total Sum of Array: {totalSum}</p>
//     </div>
//   );
// };

// export default App;



import React from 'react';

const App = () => {


  const users = [
    { id: 1, name: 'ram', age: 90, gender: 'male' },
    { id: 2, name: 'rita', age: 70, gender: 'female' },
    { id: 3, name: 'hari', age: 60, gender: 'male' },
    { id: 4, name: 'sita', age: 50, gender: 'female' },
  ];

  let totalAge = 0;

  users.forEach(user => {
    totalAge += user.age;
  });

  users.forEach((user, i) => {
    console.log(user, i);
  });

  return (
    <div>
      <p>Total Age: {totalAge}</p>
    </div>
  );
};

export default App;
