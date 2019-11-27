import React from 'react'
import SelectionDot from './SelectionDot'

export default function SelectionDotList({ slideIndex }) {
  let selectionDotList = []
  for (let i = 1; i < 6; i++) {
    if (i === slideIndex) {
      selectionDotList.push(<SelectionDot selected={true}/>)
    } else {
      selectionDotList.push(<SelectionDot selected={false}/>)
    }
  }
  return selectionDotList
}