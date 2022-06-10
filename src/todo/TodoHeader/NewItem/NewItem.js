import React from 'react'
import styles from './NewItem.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {setSettingsBarVisible} from '../../../store/actions/todoList'

export default function NewItem(props) {
  const dispatch = useDispatch()
  const value = useSelector(state => state.todo.value)

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
        onFocus={() => dispatch(setSettingsBarVisible(false))}
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
