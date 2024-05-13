import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggetions from './GPTMovieSuggetions'
import { BG_URL } from '../utils/constant'

function GPTSearch() {
  return (
    <div>
        <div className='fixed -z-10 '>
            <img className=" grayscale-50 " src={BG_URL} alt='background'/>
        </div>
        {/* {
        - GPTSearhBar
        - GPTMovieSuggetions
        } */}
        <GPTSearchBar/>
        <GPTMovieSuggetions/>
    </div>
  )
}

export default GPTSearch