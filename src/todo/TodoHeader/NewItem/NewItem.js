import React from 'react'
import styles from './NewItem.module.css'

class NewItem extends React.Component {
 render() {
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
   'Навестить бабулю']
  let randomizerForNewItem = Math.floor(Math.random() * dictNewItem.length)
  let placeholderNewItem = `Например: ${dictNewItem[randomizerForNewItem]}`

  return(
     <form
       className={cls.join(' ')}
       onSubmit={this.props.submit}
     >
      <input
        className="form-control"
        type="text"
        placeholder={placeholderNewItem}
        onChange={this.props.change}
        value={this.props.value}
      />
      <button className="btn btn-submit" type="submit" >Добавить</button>
     </form>


  )
 }
}

export default NewItem
