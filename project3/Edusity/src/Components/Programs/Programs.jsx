import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1}/>
      </div>
      <div className="program">
        <img src={program_2}/>
      </div>
      <div className="program">
        <img src={program_3}/>
      </div>
    </div>
  )
}

export default Programs
