import React from 'react'
import Item from './item/Item'
import Start from './item/animation/Start'
import Success from './item/animation/Success'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import styles from './TodoItems.module.css'

class TodoItems extends React.Component {

   componentDidUpdate() {
      localStorage.setItem('items', JSON.stringify(this.props.items))
    }

  render() {
    return (
      <div className={styles.TodoItems}>
        {
          this.props.items.length
            ? <div className="col-12 col-sm-10 col-md-8">
              <TransitionGroup>{
                [...this.props.items].map((el, i) =>
                  <CSSTransition
                    key={el.id}
                    in={this.props.isAnimation}
                    classNames="alert"
                    timeout={150}
                    unmountOnExit
                    onEnter={() => this.props.add}
                    onExited={() => this.props.remove}>
                    <Item key={el.id}
                          index={i}
                          value={el.value}
                          checked={el.checked}
                          remove={() => this.props.remove(this.props.items[i])}
                          items={this.props.items}
                          performed={this.props.performed}
                    />
                  </CSSTransition>)}
              </TransitionGroup>
            </div>
            : <div className="icons align-self-center">
              {!this.props.series ? <Start theme={this.props.theme}/> : <Success theme={this.props.theme}/>}
            </div>
        }
      </div>
    )
  }
}

export default TodoItems
