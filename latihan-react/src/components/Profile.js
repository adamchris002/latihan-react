import React from 'react'

const Profile = (informasi) => {
  const {name, hobby} = informasi
    return (
        <>
        <div className="m-5">
          <h3 className='text-primary'>Nama Saya {name}</h3>
          <p className='text-primary'>Hobby saya adalah {hobby}</p>
        </div>
        </>
    )
}

export default Profile;