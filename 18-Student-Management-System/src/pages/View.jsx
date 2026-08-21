import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const View = () => {

    const [std, setStd] = useState({})
    const { id } = useParams()

    async function getStudent() {
        try {
            const res = await fetch(
                `https://student-management-backend-gs1g.onrender.com/students/${id}`
            )

            const data = await res.json()
            setStd(data)

        } catch (error) {
            console.log("Error fetching student:", error)
        }
    }

    useEffect(() => {
        getStudent()
    }, [id])

    return (
        <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center p-3">
            <div className="card border-0 shadow" style={{ width: "420px" }}>
                <div className="card-header bg-info text-center border-0 py-3">

                    <h4 className="fw-bold mb-1">
                        Student Details
                    </h4>
                    <small>
                        Student ID: {std.id}
                    </small>
                </div>

                <div className="card-body px-4 py-3">
                    <div className="text-center mb-3">
                        <div
                            className="rounded-circle bg-info d-flex align-items-center justify-content-center mx-auto mb-2"
                            style={{
                                width: "55px",
                                height: "55px",
                                fontSize: "23px",
                                fontWeight: "bold"
                            }}
                        >
                            {std.name
                                ? std.name.charAt(0).toUpperCase()
                                : "S"}
                        </div>

                        <h5 className="fw-bold mb-0">
                            {std.name}
                        </h5>
                    </div>

                    <div>
                        <div className="d-flex justify-content-between border-bottom py-2">
                            <span className="text-muted">
                                Course
                            </span>
                            <span className="fw-semibold">
                                {std.course}
                            </span>
                        </div>

                        <div className="d-flex justify-content-between border-bottom py-2">
                            <span className="text-muted">
                                Age
                            </span>
                            <span className="fw-semibold">
                                {std.age}
                            </span>
                        </div>

                        <div className="d-flex justify-content-between border-bottom py-2">
                            <span className="text-muted">
                                Location
                            </span>
                            <span className="fw-semibold">
                                {std.location}
                            </span>
                        </div>

                        <div className="d-flex justify-content-between border-bottom py-2">
                            <span className="text-muted">
                                Marks
                            </span>
                            <span className="fw-bold">
                                {std.marks}
                            </span>
                        </div>

                        <div className="d-flex justify-content-between align-items-center py-2">
                            <span className="text-muted">
                                Attendance
                            </span>
                            {std.isPresent ? (
                                <span className="badge bg-success-subtle text-success">
                                    ● Present
                                </span>
                            ) : (
                                <span className="badge bg-danger-subtle text-danger">
                                    ● Absent
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="d-flex gap-2 mt-3">
                        <Link
                            className="btn btn-outline-secondary btn-sm flex-fill"
                            to="/"
                        >
                            ← Back
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default View