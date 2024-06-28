const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>total of {sum} exercises</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    parts.map( part => (<Part part={part} key={part.id} />))
  )
}

const Course = ({course}) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0 )
  return(
    <div>
    <Header course = {course.name} />
    <Content parts = {course.parts} />
    <Total sum = {total}/>
    </div>
  )
  
}

export default Course