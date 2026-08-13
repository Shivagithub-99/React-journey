import React, { useState } from 'react'

const StudentCard = (props) => {
    const [marks, setMarks] = useState("")
    const [showResult, setShowResult] = useState(false)
    // 🤝🔴

    function resetResult(){
        setMarks("")
        setShowResult(false)
    }

  return (
    <>
        <h2>Student Result</h2>
        <div style={{border: "1px solid black", width: "200px", padding: "1rem"}}>
            <p>Student: <b>{props.name}</b></p>
            <input onChange={(e)=>setMarks(e.target.value)} value={marks} type="text" placeholder='Enter your marks' style={{marginBottom: "1rem"}}/>
            <button onClick={()=>setShowResult(true)} style={{marginRight: "0.5rem"}}>show result</button>
            <button onClick={resetResult}>reset</button>
                {showResult && <p>Marks: {marks}</p>}
                {showResult && 
                    (marks >= 90 ? <><p>🏆Excellent</p><p>Grade: A+</p></>:
                    marks >= 80 ? <><p>🎉 Very Good</p><p>Grade: A</p></>:
                    marks >= 70 ? <><p>🎉 Good</p><p>Grade: B+</p></>:
                    marks >= 60 ? <><p>🎉 Passed</p><p>Grade: B</p></>:
                    marks >= 50 ? <><p>🎉 Passed, Need Improving</p><p>Grade: C</p></>:
                    <><p>🔴 Failed</p><p>Grade: F</p></>)
                }
        </div>
    </>
  )
}

export default StudentCard