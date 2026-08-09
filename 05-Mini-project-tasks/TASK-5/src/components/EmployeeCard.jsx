import React from 'react'
import { useState } from 'react';

const EmployeeCard = ({ employee }) => {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <div className='d-flex gap-2 flex-wrap mx-5 my-5'>
                <div className="card shadow-sm" style={{ width: "300px" }} onClick={() => setShowDetails(!showDetails)}>
                    <div className="card-body">
                        <h2 className="card-title">{employee.name}</h2>
                        <p className='text text-secondary'>{employee.role}</p>
                        {!employee.isActive ? <p className='badge bg-danger'>Inactive</p> : <p className='badge bg-success'>Active</p>}
                    </div>
                    {showDetails && <p className='text text-secondary mx-5'>{employee.department} Department</p>}
                    {showDetails && <p className='text text-secondary mx-5'>{employee.email}</p>}
                </div>
            </div>
        </>
    )
}

export default EmployeeCard