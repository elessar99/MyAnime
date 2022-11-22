import './App.css';
import Router from './router/Router';
import AnimeHead from "./components/AnimeHead"
import FoodAnime from './components/Food';
import TopAnimeList from './components/TopAnimeList';
import Popup from './components/Popup';
import AnimeTakvim from './components/AnimeTakvim';
import { useState } from 'react';

function App() {
  const [headKey, setHeadKey] = useState(1);
    const [logRegKey, setLogRegKey] = useState(0);
    const [control, setControl] = useState(false);
  return (
    <div className='app'>
        {control &&(<Popup onPageChange={logRegKey}/>)}
        {!control &&(<Popup onPageChange={logRegKey}/>)}
    <AnimeHead onLogReg={(i)=>{
      setLogRegKey(i)
      setControl(!control)
    }}
    onPageChange={(pKey)=>{
      setHeadKey(pKey)
    }}/>
    <TopAnimeList/>
    <Router/>
    <AnimeTakvim/>
    <FoodAnime/>
    </div>
  );
}

export default App;
