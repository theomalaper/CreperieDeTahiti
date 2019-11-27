import React from 'react'
import Slide from './Slide'

export default function SlideList({imageGallery, slideIndex}) {
  const imageList = []
  for (let i = 1; i < imageGallery.length; i++) {
    if (i === slideIndex) {
      imageList.push(<Slide selected={true} src={imageGallery[i - 1]} />)
    } else {
      imageList.push(<Slide selected={false} src={imageGallery[i - 1]} />)
    }
  }
  return imageList
}