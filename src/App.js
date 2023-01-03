import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, success) => {
    setAlert({
      message: message,
      type: success
    })
    setTimeout(() => { setAlert(null) }, 2000)
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success")
    } else {
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success")
    }
  }
  return (
    <>
      <Navbar title="TextAnalyer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Textarea heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
