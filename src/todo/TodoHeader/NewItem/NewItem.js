import React from 'react'
import styles from './NewItem.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {setSettingsBarVisible} from '../../../store/actions/header'

export default function NewItem(props) {
  const dispatch = useDispatch()
  const value = useSelector(state => state.todoList.value)

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
    dispatch(setSettingsBarVisible(false))
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
        value={value}
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
