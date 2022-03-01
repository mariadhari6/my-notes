import { deepPurple, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
    palette: {
        primary: {
            main: '#fefefe'
        },
        secondary: purple
    },
    typography: {
        fontFamily: "'Quicksand', sans-serif",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700
    }
});
export default theme;