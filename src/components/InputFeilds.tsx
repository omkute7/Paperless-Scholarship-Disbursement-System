import React from 'react'

function InputFeilds(inputKey, inputLabel) {
  return (
    <div>
         <p className='mb-3'>{inputLabel}</p>
         <input
         className="rounded-lg h-8 text-xl "
         key={inputKey}


        />
    </div>
  )
}

export default InputFeilds