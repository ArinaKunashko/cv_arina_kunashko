import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import i18n from "../i18n";
import { Typography } from "@mui/material";

type AppBarComponentProps = {
    onToggleLang: () => void;
};

export default function AppBarComponent({ onToggleLang }: AppBarComponentProps) {
    const t: any = i18n.t;

    const navigationItems = [t('aboutTitle'), t('portfolio'), t('resume'), t('contacts')];
    function handleChangeLang() {
        onToggleLang();
    }

    return (
        <AppBar component="nav" position="fixed" sx={{ backgroundColor: 'gray' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Имя слева */}
                <Typography variant="h6" sx={{ flexShrink: 0 }}>
                    {t('performanceName')}
                </Typography>

                {/* Навигация по центру */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, flexGrow: 1, justifyContent: 'center' }}>
                    {navigationItems.map((item) => (
                        <Button key={item} sx={{ color: '#fff' }}>
                            {item}
                        </Button>
                    ))}
                </Box>

                {/* Кнопка справа */}
                <Box sx={{ flexShrink: 0 }}>
                    <Button variant="outlined" onClick={handleChangeLang}>
                        {t('lg')}
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
