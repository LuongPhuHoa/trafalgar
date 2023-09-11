import { createTheme } from "@mui/material";

const theme =  createTheme({
    typography:{
        fontFamily: ['Mulish', 'sans-serif'].join(','),
    },
    palette:{
        primary:{
            main: '#458FF6',
            contrastText: '#FFFFFF'
        },
        secondary:{
            main: '#FFFFFF',
            contrastText: '#000000'
        }
    }
})

export default theme;