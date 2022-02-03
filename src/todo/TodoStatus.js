import React from 'react'

const TodoStatus = props => {
  return (
        <div className="TodoStatus row justify-content-center">
          {props.values
            ? props.done
                ? <h2 className="status col-auto">{props.done}/{props.values}</h2>
                : <h2 className="status col-auto">{props.values}</h2>
            : null
          }
        </div>
  )
}

export default TodoStatus
