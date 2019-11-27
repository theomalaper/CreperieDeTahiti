import React from 'react';
import classNames from 'classnames'

export default function SelectionDot({ selected }) {
  let selectionDotClass = classNames('selection-dot', {
    'selection-dot active': selected,
  })
  
  return (
    <span className={selectionDotClass}></span>
  )
}