const App = () => {


  // let age = 1;
  // while (age < 20) {
  //   console.log('hello jee');
  //   console.log(age);
  //   age++;
  // }

  // console.log('after while loop');

  for (let i = 1; i <= 15; i++) {
    const random = Math.floor(Math.random() * 15 + 1);
    console.log(random);
  }

  return (
    <div>

    </div>
  )
}
export default App