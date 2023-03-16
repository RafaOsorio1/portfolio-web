import React from 'react'
import './cardpost.css'
export const Cardpost = (props: {img:string}) => {
  return (
    <article className='card-post'>
        <div className='cont-img-card-post'>
            <img className='img-card-post' src={props.img} alt="image post 1" />
        </div>
        <div className='cont-text-card-post'>
            <h2>Typography example</h2>
            <h4>Feb 5, 2020</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi.</p>
        </div>
    </article>
  )
}

