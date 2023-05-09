import React from 'react'

import { NavLink } from 'react-router-dom'

export const Navigate = () => {
    return (
        <div>
            <NavLink to={'/profile'}>Profile</NavLink>---
            <NavLink to={'/login'}>Login</NavLink>---
            <NavLink to={'/register'}>Register</NavLink>---
            <NavLink to={'/password_recovery'}>Password recovery</NavLink>---
            <NavLink to={'/check'}>Check email</NavLink>---
            <NavLink to={'/entering_new_password'}>New password</NavLink>---
            <NavLink to={'/packs_list'}>Packs</NavLink>---
        </div>
    )
}
