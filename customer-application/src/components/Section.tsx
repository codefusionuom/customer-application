import React from 'react'

function Section({heading,description}) {
    return (
        <div className=' flex-col justify-content item-center gap-[32px]'>
            <div className='font-junge text-[40px] font-[400]  flex justify-center'>
               {heading}
            </div>
            
            <div className='font-lato font-light text-black text-[18px] flex justify-center'>
  <div className='w-[525px] text-center '>
    {description}
  </div>
 
  
</div>
         </div>
    )
}

export default Section