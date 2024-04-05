import React from 'react'

const Mail = (props) => {
  return (
    <div className='bg-slate-400 w-[53vw] m-1 h-[88vh] rounded-[50px]'>
        <p>{props.body}</p>
    </div>
  )
}

export default Mail
