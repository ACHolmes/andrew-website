import './App.css';
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://cdn.jsdelivr.net/npm/p5@1.4.2/lib/p5.js";
    script.async = true;

    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div> Initial commit </div>
        <canvas></canvas>
      </header>
    </div>
  )
}

export default App;
