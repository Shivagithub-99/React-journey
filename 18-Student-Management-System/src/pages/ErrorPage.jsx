import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h1
                    className="fw-bold text-warning"
                    style={{ fontSize: "100px" }}
                >
                    404
                </h1>

                <h2 className="fw-bold mb-2">
                    Page Not Found
                </h2>

                <p className="text-muted mb-4">
                    Sorry, the page you're looking for doesn't exist.
                </p>

                <Link
                    to="/"
                    className="btn btn-warning px-4 fw-semibold"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage