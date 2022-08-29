import React from 'react'

function User(props) {
    const {userInfo} = props
    console.log(props)
  return (
    <div>
        <span className="user">
            <span className="name">{userInfo.name}</span>
            <span className="handle">@{userInfo.handle}</span>
        </span>
    </div>
  )
}

export default User