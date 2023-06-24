import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTentArrowDownToLine, faTentArrowLeftRight, faTentArrowTurnLeft, faTentArrowsDown } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Data from './Data'
import Ldata from './Ldata'

const Right = () => {

    return (
        <div className='right-container'>
            <div className='top-content'>
                <h2>Dashboard</h2>

                <FontAwesomeIcon icon={faUser} />
                <input type='search' placeholder='Search'></input>
            </div>


            <div className='box-content'>

                <div className='box'>
                    <FontAwesomeIcon icon={faTentArrowLeftRight} />
                    <h4>Total Reward</h4>
                    <p> $2,123,340</p>

                </div>
                <div className='box'>
                    <FontAwesomeIcon icon={faTentArrowDownToLine} />

                    <h4>Total Transaction</h4>
                    <p> $2,123,340</p>
                </div>
                <div className='box'>
                    <FontAwesomeIcon icon={faTentArrowsDown} />
                    <h4>Total Points</h4>
                    <p> $2,123,340</p>
                </div>
                <div className='box'>
                    <FontAwesomeIcon icon={faTentArrowTurnLeft} />
                    <h4>Total Reward</h4>
                    <p> $2,123,340</p>
                </div>
            </div>
            <div className='chart'>
              
                <Ldata />
                
            </div>
            <div className='text-container'>
            <div className='chart1'>
        
            <Data />
           
            </div>
            <div className='text-content'>
            
                <h3>Today's Schedule</h3>
                <div className='text'>
                             <h5>Meeting with  suppliers from kuta Bali</h5>
                             <h6>7:00 - 8:00</h6>
                             <h6>at Sunset road kuta ,Bali</h6>

                </div>
                <div className='text'>
                             <h5>Check operation at Giga factory 1</h5>
                             <h6>7:00 - 8:00</h6>
                             <h6>at Central jakarta</h6>

                </div>
            </div>
            </div>



        </div>

    )
}

export default Right