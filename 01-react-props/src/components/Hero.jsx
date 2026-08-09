import React from 'react'

const Hero = (props) => {
    return (
        <>
            <section>
                <h3>{props.name} - {props.role}</h3>
            </section>
        </>
    )
}

export default Hero