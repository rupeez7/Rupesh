import './Day1.css';
const Day1 = () => {

  const age = 90;
  const isShow = false;

  const newsTitle = 'Today News';
  const calcAge = () => {

  }

  return (
    <div>
      <div>

        <h3>{age > 50 ? 'senior' : 'junior'}</h3>
        <p>{`show is ${isShow}`}</p>
        <h1>{newsTitle} {age}</h1>
      </div>

    </div>
  )
}

export default Day1