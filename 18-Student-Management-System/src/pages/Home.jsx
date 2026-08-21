import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Student from '../components/Student'
import { Link } from 'react-router-dom'

const Home = () => {

    const [students, setStudents] = useState([])

    async function getStudents() {
        try {
            const res = await fetch('https://student-management-backend-gs1g.onrender.com/students')
            const stds = await res.json()

            setStudents(stds)
        } catch (error) {
            console.log("Error fetching students:", error)
        }
    }

    useEffect(() => {
        getStudents()
    }, [])

    return (
        <div className="min-vh-100 bg-light">

            <div className="bg-info py-3 shadow-sm">
                <h1 className="text-center fw-bold mb-0">
                    Student Management
                </h1>
            </div>

            <div className="container py-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>
                        <h3 className="fw-bold mb-1">
                            Students
                        </h3>

                        <p className="text-muted mb-0">
                            Manage your student records
                        </p>
                    </div>

                    <Link
                        className="btn btn-primary"
                        to="/create"
                    >
                        + Add Student
                    </Link>

                </div>

                <div className="row">

                    {students.map((student) => (
                        <Student
                            key={student.id}
                            stds={student}
                        />
                    ))}

                </div>

                {students.length === 0 && (
                    <div className="text-center py-5">

                        <h5 className="text-muted">
                            No students found
                        </h5>

                        <p className="text-muted">
                            Add a student to get started.
                        </p>

                        <Link
                            className="btn btn-primary"
                            to="/create"
                        >
                            Add Student
                        </Link>

                    </div>
                )}

            </div>

        </div>
    )
}

export default Home