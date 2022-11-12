import React from 'react'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'



const FAQ = ({question,answer}) => {
    const [isAnsweShowing,setIsAnswerShowing]= useState(false);


  return (
    <article className='faq' onClick={()=>setIsAnswerShowing(prev=>!prev)}>
        <div>
            <h4>{question}</h4>
            <button className="faq__icon">
                {
                    isAnsweShowing? <AiOutlineMinus/> : <AiOutlinePlus/>
                }
            </button>
            </div>
            {isAnsweShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ