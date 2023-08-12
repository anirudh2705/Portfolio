import React, { useState } from 'react'
import { useEffect } from 'react'
import './scroll.css'
import {AiOutlineArrowUp} from 'react-icons/ai'

const Scroll = () => {
  const [toTopButton, setToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100){
        setToTopButton(true)
      }else{
        setToTopButton(false)
      }
    })
  },[])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div>
      {toTopButton && (
        <a class="scroll__btn-top" onClick={scrollUp}  > <AiOutlineArrowUp id='scroll__up-icon'/>  </a>
      )}
    </div>
  )
}

export default Scroll