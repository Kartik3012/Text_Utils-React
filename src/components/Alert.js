import React from 'react'

export default function Alert(props) {
  return (
    props.alert && 
    <div>
        <div class={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}role="alert">
        {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
         <strong>{props.alert.type}! </strong>{props.alert.msg}
        
      </div>
    </div>
  )
}
