import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [age, setAge] = useState("")
    const [location, setLocation] = useState("")
    const [marks, setMarks] = useState("")
    const [isPresent, setIsPresent] = useState("")

    async function collectDetails(e) {
        e.preventDefault()

        const student = {
            name,
            course,
            age: Number(age),
            location,
            marks: Number(marks),
            isPresent: isPresent === "true"
        }

        try {
            await axios.post(
                "http://localhost:3000/students",
                student
            )

            navigate("/")
        } catch (error) {
            console.log("Error adding student:", error)
        }
    }

    return (
        <div className="min-vh-100 bg-light py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7">
                        <div className="card border-0 shadow-lg">
                            <div className="card-header bg-info border-0 py-4 text-center">
                                <h2 className="fw-bold mb-1">
                                    Add Student
                                </h2>

                                <p className="text-dark mb-0">
                                    Enter the student's details below
                                </p>
                            </div>

                            <div className="card-body p-4 p-md-5">

                                <form onSubmit={collectDetails}>

                                    <div className="row g-3">

                                        <div className="col-12">
                                            <label
                                                htmlFor="name"
                                                className="form-label fw-semibold"
                                            >
                                                Student Name
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Enter student name"
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label
                                                htmlFor="course"
                                                className="form-label fw-semibold"
                                            >
                                                Course
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                id="course"
                                                placeholder="e.g. MERN"
                                                value={course}
                                                onChange={(e) =>
                                                    setCourse(e.target.value)
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label
                                                htmlFor="age"
                                                className="form-label fw-semibold"
                                            >
                                                Age
                                            </label>

                                            <input
                                                type="number"
                                                className="form-control"
                                                id="age"
                                                placeholder="Enter age"
                                                min="1"
                                                value={age}
                                                onChange={(e) =>
                                                    setAge(e.target.value)
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label
                                                htmlFor="location"
                                                className="form-label fw-semibold"
                                            >
                                                Location
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                id="location"
                                                placeholder="e.g. Hyderabad"
                                                value={location}
                                                onChange={(e) =>
                                                    setLocation(e.target.value)
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label
                                                htmlFor="marks"
                                                className="form-label fw-semibold"
                                            >
                                                Marks
                                            </label>

                                            <input
                                                type="number"
                                                className="form-control"
                                                id="marks"
                                                placeholder="Enter marks"
                                                min="0"
                                                max="100"
                                                value={marks}
                                                onChange={(e) =>
                                                    setMarks(e.target.value)
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label
                                                htmlFor="attendance"
                                                className="form-label fw-semibold"
                                            >
                                                Attendance
                                            </label>

                                            <select
                                                className="form-select"
                                                id="attendance"
                                                value={isPresent}
                                                onChange={(e) =>
                                                    setIsPresent(e.target.value)
                                                }
                                                required
                                            >
                                                <option value="">
                                                    Select attendance
                                                </option>
                                                <option value="true">
                                                    Present
                                                </option>
                                                <option value="false">
                                                    Absent
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-2 mt-4">
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary flex-fill"
                                            onClick={() => navigate("/")}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-info fw-semibold flex-fill"
                                        >
                                            Add Student
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create