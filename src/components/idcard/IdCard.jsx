import React from 'react'

const IdCard = (props) => {
    const { lastName, firstName,  gender,  height,  birth, picture} = props;
    return (
        <div>
            <p><b>First name:</b>{firstName}</p>
            <p><b>Last name:</b> {lastName}</p>
            <p><b>Gender:</b>{gender}</p>
            <p><b>Height:</b>{height}</p>
            <p><b>Birth: </b>{String(birth)}</p>
            <img src={picture} alt={firstName}/>
        </div>
    )
    }
export default IdCard