import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import i18n from "../i18n";
import { Typography } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
type AppBarComponentProps = {
    onToggleLang: () => void;
    onNavigate: (section: string) => void;
};

export default function AppBarComponent({ onToggleLang, onNavigate }: AppBarComponentProps) {
    const t: any = i18n.t;

    const navigationItems = [t('aboutTitle'), t('resume'), t('contacts')];
    function handleChangeLang() {
        onToggleLang();
    }

    return (
        <AppBar component="nav" position="fixed" sx={{ backgroundColor: 'gray' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ flexShrink: 0 }}>
                    {t('performanceName')}
                </Typography>

                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, flexGrow: 1, justifyContent: 'center' }}>
                    {navigationItems.map((item) => (
                        <Button key={item} sx={{ color: '#fff' }} onClick={() => onNavigate(item)}>
                            {item}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ flexShrink: 0 }}>
                    <Button variant="outlined" onClick={handleChangeLang} sx={{color: '#fff', borderColor: '#fff', display: 'flex', flexDirection: 'row', gap: '5px'}}>
                        <LanguageIcon />
                        {t('lg')}
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
