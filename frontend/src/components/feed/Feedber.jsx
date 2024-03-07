import Announce from './announce/Announce'
import './feedber.css'

export default function Feedber() {
  return (
    <div className='feedber'>
      <div className='feedberTop'>
          <img  className='feedberTopIng' src="https://ptcdn.info/doodle/2024/5d07273900d01f33da0f618c_l0e1qbuing.png" alt="" />
        </div>
      <div className="feedberWrapper">
        
        <Announce/>

      </div>
    </div>
  )
}
