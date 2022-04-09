import React from 'react'
import Item from './item/Item'
import Start from './item/animation/Start'
import Success from './item/animation/Success'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import styles from './TodoItems.module.css'
import {connect} from 'react-redux'

function TodoItems(props) {

   // useEffect(() => {
   //   localStorage.setItem('items', JSON.stringify(props.items))
   // }, [props.items])

    return (
      <div className={styles.TodoItems}>
        {
          props.items.length
            ? <div className="col-12 col-sm-10 col-md-8">
              <TransitionGroup>{
                [...props.items].map((el, i) =>
                  <CSSTransition
                    key={el.id}
                    classNames="alert"
                    timeout={150}
                    unmountOnExit
                    onEnter={() => props.add}
                    onExited={() => props.remove}>
                    <Item key={el.id}
                          index={i}
                          value={el.value}
                          checked={el.checked}
                          remove={() => props.remove(props.items[i])}
                          performed={props.performed}
                    />
                  </CSSTransition>)}
              </TransitionGroup>
            </div>
            : <div className="icons align-self-center">
              {!props.series ? <Start theme={props.theme}/> : <Success theme={props.theme}/>}
            </div>
        }
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    items: state.todoList.items,
    series: state.todoList.series,
    theme: state.todoList.theme,
  }
}

export default connect(mapStateToProps)(TodoItems)
