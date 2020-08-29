import React from 'react'
import './App.scss'
import ListItem from './ListItem/ListItem'
import { I18nProvider, LOCALES } from './i18n'
import translate from './i18n/translate'

function App(props) {
  const [items, setItems] = React.useState([])
  const [currentItem, setCurrentItem] = React.useState({
    text: '',
    key: ''
  })

  let handleInput = (e) => {
    setCurrentItem({
      text: e.target.value,
      key: Date.now()
    })
  }
  let addItem = (e) => {
    e.preventDefault()
    const newItem = currentItem
    if (newItem.text !== "") {
      const newItems = [...items, newItem]

      setItems(newItems)
      setCurrentItem({
        text: '',
        key: ''
      })
    }
  }
  let deleteItem = (key) => {
    const filteredItems = items.filter(item =>
      item.key !== key)
    setItems(filteredItems)
  }
  let setUpdate = (text, key) => {
    items.map(item => {
      if (item.key === key) {
        item.text = text
      }
      return item.text
    })
    setItems(items)
  }
  let [locale, setLocale] = React.useState(LOCALES.ENGLISH)
  return (
    <I18nProvider locale={locale}>
      <div className="App">
        <h1 className="heading">{translate("heading")}</h1>
        <div className="whrapper">
          <header className="header">
            <form id="todo-form" className="form" onSubmit={addItem}>
              <input className="enter-task" type="text" placeholder="..." value={currentItem.text} onChange={handleInput} />
              <button className="add" type="submit">{translate("add")}</button>
            </form>
          </header>
          <main className="main">
            <ListItem items={items} deleteItem={deleteItem} setUpdate={setUpdate} />
          </main>
          <footer className="footer">
            <div className="translate english" onClick={() => setLocale(LOCALES.ENGLISH)}></div>
            <div className="translate russian" onClick={() => setLocale(LOCALES.RUSSIAN)}></div>
          </footer>
        </div>
      </div>
    </I18nProvider>
  )
}

export default App
