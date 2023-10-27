import Footer from "./components/Footer";
import Input from "./components/Input";
import Square from "./components/Square";
import { useState } from 'react'

function App() {

  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">

      <Square colorValue={colorValue} hexValue={hexValue} isDarkText={isDarkText} />
      <Input setColorValue={setColorValue} setHexValue={setHexValue}/>

      <button
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
      >
        Toggle Text Color
      </button>

      <Footer />
    </div>
  );
}

export default App;
