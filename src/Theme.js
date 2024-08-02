import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#007bff',
        },
        secondary: {
            main: '#6c757d',
        },
    },
    typography: {
        h4: {
            fontWeight: 700,
        },
        body1: {
            fontSize: '1.1rem',
        },
    },
});

export default theme;
