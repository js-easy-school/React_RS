import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from '../api'
import { useHistory } from 'react-router-dom'
import QualitiesList from './qualitiesList'

const UserPage = ({ userId }) => {
    const history = useHistory()
    const [user, setUser] = useState()
    console.log(api.users)
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data))
    })
    console.log(userId)
    const handleClick = () => {
        history.push(userId)
    }
    // {
    //     /* <h1>UserPage {userId}</h1>
    //         <h1>{user ? user.name : 'loading'}</h1> */
    // }
    return (
        <>
            {user
                ? (
                    <div className="m-3">
                        <h1>{user.name}</h1>
                        <h2>Профессия: {user.profession.name}</h2>
                        <p>
                            <QualitiesList qualities={user.qualities} />
                        </p>
                        <p>completedMeetings: {user.completedMeetings}</p>
                        <h2>Rate: {user.rate}</h2>
                        <button className="btn btn-dark"
                            onClick={() => {
                                handleClick()
                            }}
                        >
                            Все пользователи
                        </button>
                    </div>
                )
                : (
                    <h1 className="m-3">Loading...</h1>
                )
            }
        </>
    )
}

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
}

export default UserPage
