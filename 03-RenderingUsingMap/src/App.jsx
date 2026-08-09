
import './App.css'
import RenderUsingMap from './components/RenderUsingMap'

function App() {

  let studentsArr = [
    { id: 1, name: "Shiva", course: "React", marks: 92 },
    { id: 2, name: "Manish", course: "Node", marks: 34 },
    { id: 3, name: "Ashritha", course: "MongoDB", marks: 76 }
  ]

  return (
    <>
      {
        studentsArr.map((eachStudent) => {
          return <RenderUsingMap student = {eachStudent}/>
        })
      }
    </>
  )
}

export default App
