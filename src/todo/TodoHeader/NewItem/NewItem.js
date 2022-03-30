import React, {useEffect, useState} from 'react'
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

  let randomizerForNewItem = Math.floor(Math.random() * dictNewItem.length)
  let placeholderNewItem = dictNewItem[randomizerForNewItem]

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
        onClick={props.close}
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
