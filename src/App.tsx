import React, {useRef, useState} from 'react';
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

    const startRef = useRef<HTMLDivElement>(null)
    const abouteRef = useRef<HTMLDivElement>(null)
    const resumeRef = useRef<HTMLDivElement>(null)
    const contactsRef = useRef<HTMLDivElement>(null)

    const scrollToSection = (section: string) => {
        const sectionMap: Record<string, React.RefObject<HTMLDivElement | null> > = {
            [t('start')]: startRef,
            [t('aboutTitle')]: abouteRef,
            [t('resume')]: resumeRef,
            [t('contacts')]: contactsRef
        }
        const currentRef = sectionMap[section]
        if (currentRef && currentRef.current) {
            currentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <div className="App">
            <AppBarComponent onToggleLang={toggleLang} onNavigate={scrollToSection}/>
            <div ref={startRef}>
                <MainComponent/>
            </div>
            <div ref={abouteRef}>
                <AboutComponent />
            </div>
            <div ref={resumeRef}>
                <Resume />
            </div>
            <div ref={contactsRef} >
                <Contacts onNavigate={scrollToSection}/>
            </div>
        </div>
    );
}

export default App;
