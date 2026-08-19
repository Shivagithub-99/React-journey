import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Student from '../components/Student'

const Home = () => {

    let [students, setStudents] = useState([])

    async function getStudents() {
        let res = await fetch('http://localhost:3000/students')
        let stds = await res.json()
        setStudents(stds)
    }

    useEffect(()=>{
        getStudents()
    },[])

    return (
        <div>
            <h1 className='bg-warning text-center p-2'>Student Management</h1>
            <div>
                {students.map((student)=>(
                    <Student stds={student}/>
                ))}
            </div>
        </div>
    )
}

export default Home