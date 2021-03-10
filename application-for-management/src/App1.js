import React from 'react'
import './App.scss'
import ListItem from './ListItem/ListItem'
import { I18nProvider, LOCALES } from './i18n'
import translate from './i18n/translate'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key)
    this.setState({
      items: filteredItems
    })
  }
  setUpdate(text, key) {
    const items = this.state.items
    items.map(item => {
      if (item.key === key) {
        item.text = text
      }
      return item.text
    })
    this.setState({
      items: items
    })
  }
  // setTranslate() {
  //   let [locale, setLocale] = React.useState(LOCALES.ENGLISH)
  // }
  render() {

    return (
      <I18nProvider locale={LOCALES.ENGLISH}>
        <div className="App">
          <h1 className="heading">{translate("heading")}</h1>
          <div className="whrapper">
            <header className="header">
              <form id="todo-form" className="form" onSubmit={this.addItem}>
                <input className="enter-task" type="text" placeholder="..." value={this.state.currentItem.text} onChange={this.handleInput} />
                <button className="add" type="submit">{translate("add")}</button>
              </form>
            </header>
            <main className="main">
              <ListItem items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
            </main>
            <footer>
              <div>
                {/* <button onClick={() => setLocale(LOCALES.ENGLISH)}>English</button> */}
                {/* <button onClick={() => setLocale(LOCALES.RUSSIAN)}>Russian</button> */}
              </div>
            </footer>
          </div>
        </div>
      </I18nProvider>
    )
  }
}

export default App
