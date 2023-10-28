import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Header = ({ courseTitle }) => (
  <h1>{courseTitle}</h1>
)

const Part = ({ item, total }) => (
  <p>{item} {total}</p>
)

const Content = ({ partsAndTotal }) => (
  partsAndTotal.map(item => (
      <Part key={item.name} item={item.name} total={item.total} />
  ))
)

const Total = ({ partsAndTotal }) => (
  <p>Number of exercises {partsAndTotal.map(item => item.total).reduce((p, n) => p + n)}</p>
)

const App = () => {

  const courseDetails = {
    name: 'Half Stack application development',
    
    partsAndTotal: [
      { name: 'Fundamentals of React', total: 10 },
      { name: 'Using props to pass data', total: 7 },
      { name: 'State of a component', total: 14 }
    ]
  }

  return (
    <div>
      <Header courseTitle={courseDetails.name} />
      <Content partsAndTotal={courseDetails.partsAndTotal} />
      <Total partsAndTotal={courseDetails.partsAndTotal} />
    </div>
  )
}

export default App
