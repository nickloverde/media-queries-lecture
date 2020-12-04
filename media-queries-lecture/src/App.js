import './App.css';
import {useState} from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="App">
      <header className="header">
        <h1>The Andy Zone</h1>
        <nav className="nav-bar">
          <p className="nav-item">Home</p>
          <p className="nav-item">About</p>
          <p className="nav-item">Contact</p>
        </nav>
        <img onClick={toggleMenu} className="hamburger" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"></img>
        <nav className={`mobile-nav ${isMenuOpen ? null : 'mobile-nav-hide'}`}>
          <p className="mobile-nav-item">Home</p>
          <p className="mobile-nav-item">About</p>
          <p className="mobile-nav-item">Contact</p>
        </nav>
      </header>
       <div className='red-box'></div>
    </div>
  );
}

export default App;
