import React from 'react'

const User = ({user, getDob}) => {
  return (
    <>
      <div className="bg-white px-10 py-8 sm:flex items-center gap-16 rounded-lg shadow-md">
        <div className="flex flex-col items-center justify-center ">
          <img className="w-60 h-60 rounded-full object-cover border-4 border-blue-400 " src={user.picture?.large} alt="user" />
          <h2 className="text-4xl font-bold my-3 text-center">{user.name?.first} {user.name?.last}</h2>
        </div>
        <div>
          <h4 className="text-base font-semibold ">Username: <span className="text-base font-normal">{user.login?.username}</span></h4>

          <h4 className="text-base font-semibold ">Gender: <span className="text-base font-normal">{user.gender}</span></h4>

          <h4 className="text-base font-semibold ">Phone: <span className="text-base font-normal">{user.phone}</span></h4>

          <h4 className="text-base font-semibold ">Cell: <span className="text-base font-normal">{user.cell}</span></h4>

          <h4  className="text-base font-semibold ">Email: <span className="text-base font-normal"> {user.email}</span></h4>

          <h4 className="text-base font-semibold ">DOB: <span className="text-base font-normal">{getDob(user.dob?.date)}</span></h4>

          <h4 className="text-base font-semibold ">Age: <span className="text-base font-normal">{user.dob?.age}</span></h4>

          <h4 className="text-base font-semibold ">Street: <span className="text-base font-normal">{user.location?.street.name}, {user.location?.street.number}</span></h4>

          <h4 className="text-base font-semibold ">City: <span className="text-base font-normal">{user.location?.city}</span></h4>

          <h4 className="text-base font-semibold ">State: <span className="text-base font-normal">{user.location?.state}</span></h4>

          <h4 className="text-base font-semibold ">Postcode: <span className="text-base font-normal">{user.location?.postcode}</span></h4>

          <h4 className="text-base font-semibold ">Country: <span className="text-base font-normal">{user.location?.country}</span></h4>
          
          <h4 className="text-base font-semibold ">Timezone: <span className="text-base font-normal">{user.location?.timezone.offset}</span></h4>
        </div>
      </div>
    </>
  )
}

export default User

