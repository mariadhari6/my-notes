import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, createTheme, Rating, Typography, Container } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
const Notes = () => {
    const myTheme = createTheme({
        typography: {
            button: {
                textTransform: 'none'
            }
        }
    });
    const [ratingValue, setRatingValue] = useState(0);
    return (
        <ThemeProvider theme={myTheme}>
            <Container>
                <Favorite color="error" />
                <Typography variant="h3">
                    Ini halaman notes
                </Typography>
                <Rating
                    name="no-value"
                    value={ratingValue}
                    precision={0.1}
                    icon={<Favorite color="error" fontSize="inherit" />}
                    emptyIcon={<FavoriteBorder color="error" fontSize="inherit" />}
                    onChange={(e, newvalue) => {
                        setRatingValue(newvalue);
                    }} />
                <Button
                    variant="outlined"
                    disableElevation
                    color="error"
                    onClick={() => {
                        alert("Hello world")
                    }}
                >
                    Tambah Catatan
                </Button>
                <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    disableElevation
                    onClick={() => {
                        console.log("You clicked me");
                    }}
                >
                    Submit
                </Button>
                <Link to='/create'>Buat catatan</Link>
            </Container>
        </ThemeProvider>
    );
}
export default Notes;