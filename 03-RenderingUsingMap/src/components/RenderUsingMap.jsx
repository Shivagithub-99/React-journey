import React from 'react'

const RenderUsingMap = (props) => {
  return (
    <>
        <div style={{width:"12rem", height:"auto", border:"1px solid grey", padding:"1rem"}}>
            <h3>{props.student.name}</h3>
            <h4>Roll No: {props.student.id}</h4>
            <h5>Course: {props.student.course}</h5>
            {
                props.student.marks > 35 ? <p>Passed</p> : <p>Failed</p>
            }
        </div>
    </>
  )
}

export default RenderUsingMap