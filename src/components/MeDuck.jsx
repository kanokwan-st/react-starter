import React from 'react'

function MeDuck(props) {
  return (
    <>
      <div className='w-[60%] h-20 bg-red-200 m-auto'>
        <img src="../../public/quack.png" alt="quack" className='w-[100px]'/>
      </div>
      <div className='mt-10 bg-amber-300'>
        <p className={`${props.bgColor}`}>{props.bgColor}</p>
      </div>
    </>
  )
}

export default MeDuck
