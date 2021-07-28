import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import { useState } from "react"

function App() {
  const [ result, setResult ] = useState('')
  const convert = (input) => {
    // console.log(input)
    if (input.type === 'Fahrenheit') {
      const output = (Number(input.degree) - 32) * 5 / 9
      setResult(Number.parseFloat(output).toFixed(4) + '°C')
      // console.log(Number.parseFloat(output).toFixed(4) + '°C')
    } else {
      const output = (Number(input.degree) * 9 / 5) + 32
      setResult(Number.parseFloat(output).toFixed(4) + '°F')
      // console.log(Number.parseFloat(output).toFixed(4) + '°F')
    }
  }

  return (
    <div className="container">
      <Header />
      <Form onConvert={ convert }/>
      <Result result={ result }/>
    </div>
  );
}

export default App;
