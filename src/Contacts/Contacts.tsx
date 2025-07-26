import * as React from 'react';
import classes from './Contacts.module.css';
import Box from "@mui/material/Box";
import i18n from "../i18n";
import { Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

interface propsType {
    onNavigate: (navigate: string) => void
}

interface contactType {
    text: string;
    href: string;
    icon: React.ReactNode;
}

export default function Contacts({onNavigate}: propsType) {
    const t: any = i18n.t;
    const lang = i18n.language;

    const navigateElements = [t('start'), t('aboutTitle'), t('resume'), t('contacts')];
    const contacts: contactType[] = [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/arina-kunashko/',
            icon: <LinkedInIcon />
        },
        {
            text: 'GitHub',
            href: 'https://github.com/arina-kunashko',
            icon: <GitHubIcon />
        },
        {
            text: 'kunashkoa@gmail.com',
            href: `mailto:kunashkoa@gmail.com`,
            icon: <EmailIcon />
        },
    ];

    const resumeFile =
        lang === 'ru'
            ? './Kunashko Arina CV Frontend Developer.pdf'
            : './Arina Kunashko  CV Frontend Developer.pdf';

    return (
        <div className={classes.wrapper}>
            <Box className={classes.container}>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <Typography sx={{ color: 'white', textAlign: 'left' }} variant="h6">
                        {t('slogan')}
                    </Typography>

                    <Box className={classes.contact} sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 5 }}>
                        <SimCardDownloadIcon sx={{ color: 'black' }} />
                        <a
                            href={resumeFile}
                            download="CV_Arina_Kunashko_Frontend_dev.pdf"
                            className={classes.contact}
                        >
                            <Typography>
                                {t('downloadRes')}
                            </Typography>
                        </a>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
                    <Box className={classes.title}>
                        <Typography variant="h6" sx={{ color: 'white' }}>
                            {t('navigate')}
                        </Typography>
                        {navigateElements.map(el => (
                            <Typography key={el} onClick={() => onNavigate(el)} className={classes.contact}>
                                {el}
                            </Typography>
                        ))}
                    </Box>

                    <Box className={classes.title}>
                        <Typography variant="h6" sx={{ color: 'white' }}>
                            {t('contact')}
                        </Typography>

                        {contacts.map((contact) => (
                            <a
                                href={contact.href}
                                key={contact.href}
                                className={classes.contact}
                                style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'black', textDecoration: 'none', marginBottom: 8 }}
                            >
                                {contact.icon}
                                <Typography>
                                    {contact.text}
                                </Typography>
                            </a>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Typography sx={{ color: 'black', padding: '2rem', fontWeight: 'bold' }}>
                {new Date().getFullYear()} - Arina Kunashko
            </Typography>
        </div>
    );
}
