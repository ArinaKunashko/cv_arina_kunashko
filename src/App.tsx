import React, {useState} from 'react';
import './App.css';
import AppBarComponent from "./AppBar/AppBarComponent";
import MainComponent from "./MainComponent/MainComponent";
import i18n from './i18n';
import AboutComponent from "./About/AboutComponent";
import Resume from "./Resume/Resume";
import Contacts from "./Contacts/Contacts";


function App() {
    const [lang, setLang] = useState(i18n.language);
    const toggleLang = () => {
        const newLang = lang === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLang);
        setLang(newLang);
    };

    const t: any = i18n.t;

    return (
        <div className="App">
            <AppBarComponent onToggleLang={toggleLang} />
            <MainComponent/>
            <AboutComponent />
            <Resume />
            <Contacts />
        </div>
    );
}

export default App;
