// import Day1 from "./js/Day1.js"


// const App = () => {
//   return (
//     <div>
//       <Day1 />
//     </div>
//   )
// }

// export default App



const App = () => {


  const person = {
    firstName: 'ram',
    lastName: 'sharma',
    age: 90,
    isAdmin: true,
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },

  };



  return (
    <div>
      <h1 className="text-red-700">{person.fullName()}</h1>

      <h1>{person.isAdmin.toString()}</h1>


    </div>
  )
}
export default App