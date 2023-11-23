import './App.css'
import CounterComponent from './components/CounterComponent'
import { CounterProvider } from './context/CounterContext'

function App() {

  return (
    <CounterProvider>
      <div>
        <h1>Counter App</h1>
        <CounterComponent />
      </div>
    </CounterProvider>
  )
}

export default App
