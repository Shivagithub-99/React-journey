import React from 'react'

const StudentStatus = (props) => {
  return (
    (props.isPlaced && props.marks > 35) ? 
    <>
        <h2>Shiva 🎉 Congratulations! You are Placed.</h2>
        <h2>Passed in test</h2>
    </> : 
    <>
        <h2>Shiva 📚 Keep Practicing.</h2>
        <h2>Failed in test</h2>
    </>
  )
}

export default StudentStatus