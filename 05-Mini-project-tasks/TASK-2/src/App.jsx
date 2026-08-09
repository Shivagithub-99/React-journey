import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Shiva",
      subject: "React",
      marks: 25,
      isReviewed: false,
    },
    {
      id: 2,
      name: "Manish",
      subject: "React",
      marks: 85,
      isReviewed: false,
    },
    {
      id: 3,
      name: "Prakash",
      subject: "React",
      marks: 36,
      isReviewed: false,
    },
    {
      id: 4,
      name: "Rahul",
      subject: "React",
      marks: 95,
      isReviewed: false,
    },
    {
      id: 5,
      name: "Prabhu garu",
      subject: "React",
      marks: 88,
      isReviewed: false,
    },
    {
      id: 6,
      name: "Abhi",
      subject: "React",
      marks: 37,
      isReviewed: false,
    },
  ]);

  function markReview(id) {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return { ...student, isReviewed: true }
      }
      return student
    });
    setStudents(updatedStudents)
  }

  return (
    <>
      <div className='d-flex gap-2'>
        {
          students.map((student) => (
            <div>

              <div className="card my-3" style={{ width: "200px" }}>

                <div className="card-body">
                  <h5 className="card-title">{student.name}</h5>
                  <p className="card-text">{student.subject}</p>
                  <p className="status">Marks: {student.marks}</p>
                </div>

                {student.marks >= 40 ?
                  <p className='badge bg-success w-50 mx-3'>Pass</p> :
                  <p className='badge bg-danger w-50 mx-3'>Fail</p>}

                {student.marks >= 90 ?
                  <p className='badge bg-info w-50 mx-3'>A+</p> :
                  student.marks >= 75 ?
                    <p className='badge bg-info w-50 mx-3'>A</p> :
                    student.marks >= 60 ?
                      <p className='badge bg-info w-50 mx-3'>B</p> :
                      student.marks >= 40 ?
                        <p className='badge bg-info w-50 mx-3'>C</p> :
                        <p className='badge bg-info w-50 mx-3'>F</p>}

                <button
                  className="btn btn-secondary mx-3 my-2"
                  disabled={student.isReviewed}
                  onClick={() => markReview(student.id)}
                >
                  {student.isReviewed ? "✅Reviewed" : "Mark As Reviewed"}
                </button>
              </div>

            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
