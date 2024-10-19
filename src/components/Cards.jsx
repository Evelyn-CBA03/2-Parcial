import React from 'react'
import Information from './Information'
import "./Profile.css"

const Profile = (props) => {
    const cards=props.cards;
    return (
    <div className='contenedor'>
        <img className='topic' src="../components/Ellipse 1.png" alt="" />
        <Information name={profile.name} info={profile.info}/>
        <Buttons/>
    </div>
  )
}

export default Profile