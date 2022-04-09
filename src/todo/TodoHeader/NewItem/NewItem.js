import React from 'react'
import styles from './NewItem.module.css'
import {connect} from 'react-redux'
import {setSettingsBarVisible} from '../../../store/actions/header'

function NewItem(props) {

  const cls = [
    styles.NewItem,
    'input-group',
    'items'
  ]

  const dictNewItem = [
   'Сходить в спортзал',
   'Купить молоко',
   'Заплатить налоги',
   'Заказать телефон',
   'Позвонить Лехе',
   'Навестить бабулю'
  ]

  const closeSettings = () => {
    props.setSettingsBarVisible(false)
  }

  const randomizerForNewItem = Math.floor(Math.random() * dictNewItem.length)
  const placeholderNewItem = dictNewItem[randomizerForNewItem]

  return (
     <form
       className={cls.join(' ')}
       onSubmit={props.submit}
     >
      <input
        className="form-control"
        type="text"
        placeholder={placeholderNewItem}
        onChange={props.change}
        value={props.value}
        onFocus={closeSettings}
      />
      <button
        className="btn btn-submit"
        type="submit"
      >
        Добавить
      </button>
     </form>
  )
}

function mapStateToProps(state) {
  return {
    value: state.todoList.value,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSettingsBarVisible: bool => dispatch(setSettingsBarVisible(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewItem)
