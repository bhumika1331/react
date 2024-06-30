import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    name:'bhumika',
    age:20,
    address:{
      city:'chennai',
      state:'tamil nadu',
      country:'india'
    }
  }

  let newArr=[1,2,3,4,5,6,7,8,9]

  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Hello world!</h1>
    <Card username = 'bhumika' myArr={newArr}/>
    <Card username = 'bhumi' post = 'manager'/>
    <Card />
    <Card />

    </>
  )
}

export default App
