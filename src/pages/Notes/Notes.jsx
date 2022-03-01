import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    createTheme,
    Rating,
    Typography,
    Container,
    Paper,
    Grid
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box } from "@mui/system";
import NoteCard from "../../components/NoteCard/NoteCard";
import Loading from "../../components/Loading";
const Notes = () => {
    const [loading, setLoading] = useState(false);
    const myTheme = createTheme({
        typography: {
            button: {
                textTransform: 'none'
            }
        }
    });
    const [catatan, setCatatan] = useState([]);
    const [ratingValue, setRatingValue] = useState(0);
    useEffect(() => {
        fetch('http://localhost:8080/catatan')
            .then(res => res.json())
            .then((res) => {
                setCatatan(res)
            })
    }, [])
    useEffect(() => {
        if (catatan.length == 0) {
            setLoading(true);
        }
        else {
            setLoading(false);
        }
    }, [catatan])
    const handleDelete = async (id) => {
        await fetch('http://localhost:8080/catatan/' + id, {
            method: 'DELETE',
        }).then(() => {
            const catatanBaru = catatan.filter(cat => cat.id != id)
            setCatatan(catatanBaru);
        })
    }
    // if (loading) {
    //     return <Loading />
    // }
    return (
        <Container>
            {loading ? <Loading /> : <Typography variant="h3">
                Daftar catatan
            </Typography>}

            <Grid
                container
                spacing={3}
            >
                {catatan?.map(cat => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={cat.id}
                    >
                        <NoteCard catatan={cat} handleDelete={handleDelete} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
export default Notes;