import React from 'react'

const Notifications = () => {

    const notifications = [
        {
            id: 1,
            message: "Assignment submitted successfully",
            read: true
        },
        {
            id: 2,
            message: "New React course available",
            read: false
        },
        {
            id: 3,
            message: "Applications Pending",
            read: true

        },
        {
            id: 4,
            message: "New Sign in alert",
            read: false
        }
    ]

    return (
        <>
            <h2>✉️Notifications</h2>
            {
                notifications.map((notification)=>(
                    <div key={notifications.id}>
                        {!notification.read?<p className='fw-bold'>{notification.message}</p>:<p>{notification.message}</p>}
                    </div>
                ))
            }
        </>
    )
}

export default Notifications