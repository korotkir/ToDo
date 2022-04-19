import React from 'react'
import Item from './item/Item'
import Start from './item/animation/Start'
import Success from './item/animation/Success'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import styles from './TodoItems.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {setSettingsBarVisible} from '../../store/actions/todoList'

export default function TodoItems(props) {
  const items = useSelector(state => state.items)
  const series = useSelector(state => state.series)
  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()

    return (
      <div className={styles.TodoItems} onClick={() => dispatch(setSettingsBarVisible(false))}>
        {
          items.length
            ? <div className="col-12 col-sm-10 col-md-8">
              <TransitionGroup>{
                [...items].map((el, i) =>
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
                          remove={() => props.remove(items[i])}
                          performed={props.performed}
                    />
                  </CSSTransition>)}
              </TransitionGroup>
            </div>
            : <div className="icons align-self-center">
              {!series ? <Start theme={theme}/> : <Success theme={theme}/>}
            </div>
        }
      </div>
    )
}
