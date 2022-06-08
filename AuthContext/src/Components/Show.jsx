import React from 'react'
const Show = ({user}) => {
  return (

    <div className="card w-25 m-auto ">
  <img src={user.data.avatar} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{user.data.first_name}</h5>
    <h5 className="card-title">{user.data.last_name}</h5>
    <p className="card-text">{user.data.email}</p>
    
  </div>
</div>
   
  )
}

export default Show