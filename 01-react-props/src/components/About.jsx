import React from 'react'

const About = (props) => {
  return (
    <>
        <section>
            <p>{props.skill1}</p>
            <p>{props.skill2}</p>
            <p>{props.skill3}</p>
            <p>{props.skill4}</p>
            <p>{props.skill5}</p>
        </section>
    </>
  )
}

export default About