import React, {useState, useEffect} from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Free from './components/Free'
import Clients from './components/Clients'
import SuperRare from './components/SuperRare'
import Release from './components/Release'
import Like from './components/Like'
import Signup from './components/Signup'
import Footer from './components/Footer'
import "./scss/index.scss";
import scrollreveal from 'scrollreveal'




function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(`
      nav,.home,.free,.clients,.super-rare,.releases,.like,.signup,footer
      `,
      {interval: 500}
      );
    };
    registerAnimations();
  }, []);

  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByName("nav");
    nav[0].style.transform = "none";
  }, 1500);
    return (
    <div className='app-container' data-theme={theme} >
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <Signup />
      <Footer />

    </div>
  );
}

export default App;
