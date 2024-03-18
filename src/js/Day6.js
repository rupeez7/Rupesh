// // const App = () => {

// //   const posts = [
// //     {
// //       "id": 1,
// //       "title": "His mother had always taught him",
// //       "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
// //       "userId": 9,
// //       "tags": [
// //         "history",
// //         "american",
// //         "crime"
// //       ],
// //       "reactions": 2
// //     },
// //     {
// //       "id": 2,
// //       "title": "He was an expert but not in a discipline",
// //       "body": "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
// //       "userId": 13,
// //       "tags": [
// //         "french",
// //         "fiction",
// //         "english"
// //       ],
// //       "reactions": 2
// //     }
// //   ];

// //   return (
// //     <div className="p-4 max-w-xs">

// //       {posts.map((post) => {
// //         return <div className="bg-slate-400 space-y-5 mb-2 p-2" key={post.id}>
// //           <h1>{post.title}</h1>
// //           <p>{post.body}</p>


// //         </div>
// //       })}

// //     </div>
// //   )
// // }
// // export default App






// const App = () => {


//   const carts = [
//     { id: 1, name: 'shoes', qty: 2, price: 10 },
//     { id: 2, name: 'mac', qty: 3, price: 20 },
//     { id: 4, name: 'mc', qty: 2, price: 30 },
//   ];


//   const total = carts.reduce((a, b) => {

//     return a + (b.qty * b.price);
//   }, 0);
//   console.log(total);

//   // const numbers = [22, 44, 55, 77, 99];

//   // const nio = numbers.reduce((c, n) => {
//   //   console.log('lio');
//   //   return c + n;
//   // }, 0);

//   // console.log(nio);

//   return (
//     <div>




//     </div>
//   )
// }
// export default App



const App = () => {


  const carts = [
    { id: 1, name: 'shoes', qty: 2, price: 10 },
    { id: 2, name: 'mac', qty: 3, price: 20 },
    { id: 4, name: 'mc', qty: 2, price: 30 },
  ];


  // const newCarts = carts.map((cart) => {
  //   return cart.id === 1 ? { ...cart, name: 'lios' } : cart;
  // });
  // console.log(newCarts);

  const updateArray = (index, id) => {
    const cart = carts.find((cart) => cart.id === id);
    carts[index] = { ...cart, name: 'lkhjklh' };
  }


  updateArray(0, 1);

  console.log(carts);


  return (
    <div>




    </div>
  )
}
export default App