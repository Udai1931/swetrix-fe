import React, { memo } from 'react'

const Progress = ({ now }) => (
  <div className='relative'>
    <div className='overflow-hidden h-2 text-xs flex rounded bg-blue-200'>
      <div style={{ width: `${now}%` }} className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500' />
    </div>
  </div>
)

export default memo(Progress)