import ReactDOM from 'react-dom'
import { App } from './App'
import Api from './services/api'

const runApp = async () => {
  Api.init()
  ReactDOM.render(<App />, document.getElementById('root'))
}

runApp()
