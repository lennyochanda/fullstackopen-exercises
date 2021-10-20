import React from 'react'

const Header = ({ course }) => {
    return (
	<div>
	    <h1>{course.name}</h1>
	</div>
    )
}


const Content = ({ parts }) => {
    console.log(parts)
    return (
	<div>
	    <Part title={parts.parts[0].name} exerciseCount={parts.parts[0].exercises} />
	    <Part title={parts.parts[1].name} exerciseCount={parts.parts[1].exercises} />
	    <Part title={parts.parts[2].name} exerciseCount={parts.parts[2].exercises} />
	</div>

    )
}


const Part = ({ title, exerciseCount }) => {
    return (
	<p>
	    {title} {exerciseCount}
	</p>
   ) 
}


const Total = ({ parts }) => {
    return (
	<>
	    <p>Number of exercises {parts.parts[0].exercises +
		    parts.parts[1].exercises +
		    parts.parts[2].exercises}</p>
	</>
    )
}


const App = () => {
    const course = {
	name: 'Half Stack application development',
	parts: [
    {
	name: 'Fundamentals of React',
	exercises: 10
    },
    {
	name: 'Using props to pass data',
	exercises: 7
    },
    {
	name: 'State of a component',
	exercises: 14
    }
    ]
    }

    return (
	<div>
	    <Header course={course} />
	    {/* decided not to use parts={course.parts}
	    incase more object properties are added to course */}
	    <Content parts={course} />
	    <Total parts={course} />
	</div>
    )

}


export default App;
