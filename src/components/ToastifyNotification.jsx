import React from 'react'

const ToastifyNotification = ({ title, body }) => {
    return (
        <div className="push-notification">
            <h2 className="push-notification-title">{title}</h2>
            <p className="push-notification-text">{body}</p>
        </div>
    )
}
export default ToastifyNotification
