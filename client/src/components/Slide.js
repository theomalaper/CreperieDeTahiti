import React from 'react'
import classNames from 'classnames'

export default function Slide(props) {

  let slideClass = classNames('slides', {
    'slides show': props.selected,
  })

  return (
    <img className={slideClass} src={props.src} alt="Gallery Image"/>
  )
}