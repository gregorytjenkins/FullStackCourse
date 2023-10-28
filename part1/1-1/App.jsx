import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Header = ({ courseTitle }) => (
  <h1>{courseTitle}</h1>
)

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Content = (eachItem) => {
	return (
		<>
			<p>{eachItem.part1}: {eachItem.exercises1}</p>
			<p>{eachItem.part2}: {eachItem.exercises2}</p>
			<p>{eachItem.part3}: {eachItem.exercises3}</p>
		</>
	)
};

const App = () => {

  const courseDetails = {
    name: 'Half Stack application development',

    }

  return (
    <div>
    <Header courseTitle={courseDetails.name} />
    <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
