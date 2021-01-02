import React from "react"

export default function Section(props) {
  return (
    <div 
      className="section sticky-bounding-box" 
      id={props.id}
      >
      <div className="sticky-element">
        {props.children}
      </div>
    </div>
  )
}
