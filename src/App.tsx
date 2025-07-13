import React, {useState} from 'react';
import './App.css';
import AppBarComponent from "./AppBar/AppBarComponent";
import MainComponent from "./MainComponent/MainComponent";
import i18n from './i18n';
import AboutComponent from "./About/AboutComponent";

function App() {
    const [lang, setLang] = useState(i18n.language);
    const toggleLang = () => {
        const newLang = lang === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLang);
        setLang(newLang);
    };

    const t: any = i18n.t;

    return (
        <div>
            <AppBarComponent onToggleLang={toggleLang} />
            <MainComponent/>
            <AboutComponent />
        </div>
    );
}

export default App;
