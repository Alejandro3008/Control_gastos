/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const Message = ({children,tipo}) => {
    return (
        <div className={`alerta ${tipo}`}>{children}</div>
    )
}
