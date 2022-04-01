import React from 'react'
import styles from './NewItem.module.css'

export default function NewItem(props) {

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
        value={props.value}
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
