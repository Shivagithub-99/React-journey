import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Student = (props) => {

    async function handleDelete() {

        try {
            await axios.delete(
                `https://student-management-backend-gs1g.onrender.com/students/${props.stds.id}`
            )

            window.location.reload()

        } catch (error) {
            console.log("Error deleting student:", error)
        }
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">

            <div
                className="card h-100 border-0 shadow-sm"
                style={{
                    borderRadius: "12px",
                    transition: "0.2s ease-in-out"
                }}
            >

                <div className="card-body d-flex flex-column">

                    <div className="mb-3">
                        <h5 className="card-title fw-bold mb-1 text-dark">
                            {props.stds.name}
                        </h5>

                        <small className="text-muted">
                            Student ID: {props.stds.id}
                        </small>
                    </div>

                    <div className="mb-3">

                        <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">
                                Course
                            </span>

                            <span className="fw-semibold">
                                {props.stds.course}
                            </span>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">
                                Age
                            </span>

                            <span className="fw-semibold">
                                {props.stds.age}
                            </span>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">
                                Location
                            </span>

                            <span className="fw-semibold">
                                {props.stds.location}
                            </span>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">
                                Marks
                            </span>

                            <span className="fw-bold">
                                {props.stds.marks}
                            </span>
                        </div>

                    </div>

                    <div className="mb-3">

                        {props.stds.isPresent ? (
                            <span className="badge bg-success-subtle text-success px-3 py-2">
                                ● Present
                            </span>
                        ) : (
                            <span className="badge bg-danger-subtle text-danger px-3 py-2">
                                ● Absent
                            </span>
                        )}

                    </div>

                    <div className="mt-auto d-flex gap-2">

                        <Link
                            className="btn btn-primary btn-sm flex-fill"
                            to={`/view/${props.stds.id}`}
                        >
                            View
                        </Link>

                        <Link
                            className="btn btn-info btn-sm flex-fill text-white"
                            to={`/edit/${props.stds.id}`}
                        >
                            Edit
                        </Link>

                        <button
                            className="btn btn-danger btn-sm flex-fill"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Student