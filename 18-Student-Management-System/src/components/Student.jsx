import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Student = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.stds.name}</h5>
                    <p className="card-text">{props.stds.course}</p>
                    <p className="card-text">{props.stds.age}</p>
                    <p className="card-text">{props.stds.location}</p>
                    <p className="card-text">{props.stds.marks}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default Student