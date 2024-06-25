import React from 'react'
import { motion } from 'framer-motion'

const ToastifyNotification = ({ title, body }) => {
    return (
        <motion.div
            initial={{ y: '-3rem' }}
            animate={{ y: 0 }}
            className="push-notification absolute top-5 right-5 rounded-xl shadow-xl shadow-gray-200 border border-gray-300 p-4 bg-white flex flex-col justify-end items-end">
            <h2 className="push-notification-title font-semibold text-lg">{title}</h2>
            <p className="push-notification-text font-normal text-gray-600">{body}</p>
        </motion.div>
    )
}
export default ToastifyNotification
