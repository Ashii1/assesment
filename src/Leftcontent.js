import React from 'react'
import Right from './Right'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
const Leftcontent = () => {
    return (
        <div className='content'>
            <div className='left-content'>
                <h1>Board</h1>
                <div  className='listcontainer'>
                    <div className='listdata'>
                        <FontAwesomeIcon icon={faHouse} />
                        <h4>Home</h4>

                    </div>
                    <div className='listdata'>
                        <FontAwesomeIcon icon={faUser} />
                        <h4>User</h4>

                    </div>
                    <div className='listdata'>
                        <FontAwesomeIcon icon={faStar} />
                        <h4>Favourite</h4>

                    </div>
                    <div className='listdata'>
                        <FontAwesomeIcon icon={faUser} />
                        <h4>User</h4>

                    </div>
                    <div className='listdata'>
                        <FontAwesomeIcon icon={faHouse} />
                        <h4>Home</h4>

                    </div>
                </div>
                <div className='contact'>

                    <h5>Help</h5>
                    <h5>contact Us</h5>
                </div>
                
            </div>


            <div className='right-content'>
                <Right />
            </div>
        </div>
    )
}

export default Leftcontent