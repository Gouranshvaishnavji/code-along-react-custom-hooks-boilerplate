import './App.css'
import Storage from './container/Usestorage'

function App() {
  const [input, setInput] = Storage('Input');
  console.log(input);
  return (
    <>
    <input type="text" 
    value={input} 
    onChange={(e) => setInput(e.target.value)
    } />
     
    </>
  )
}

export default App
