import './App.css';
import Stuff from './SomeStuff'
import x from './export'

function App() {
  const element = (
    <h1 className="welcome">
      Hello, world!
    </h1>
  )

  const numbers = [1, 2, 3, 4, 5]

 var forNumbers = () => {
   for(var i=0 ; i< numbers.length ; i++){
     console.log(numbers[i])
   }
 }

 var renderNumbers = () => {
    return(
    <ul className='numbers'>
      {numbers.map((number) => (
        <li>{number}</li>
      ))
      }
    </ul>
    )
  }

  return (
    <>
      {element}
      <div>{forNumbers()}</div>
    </>
  );
}

export default App;
