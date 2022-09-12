import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './components/Pages';

const App = () => {
  const [selectedTab, setSeletedTab] = useState('about');

  const onHeadertabsClick = (value) => {
    setSeletedTab(value)
  }

  return (
    <div>
      <Header onTabClick={onHeadertabsClick} />
      <div className='container'>
        <LandingPage selectedTab={selectedTab} />
      </div>
      <Footer onTabClick={onHeadertabsClick}/>
    </div>
  )
}

export default App;
