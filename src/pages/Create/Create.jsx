import { Typography, Container, Button, ThemeProvider, TextField, FormLabel, FormControl, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { KeyboardArrowRight } from "@mui/icons-material";
import useStyles from './style.js';
import theme from "../../globals/theme.js";
import { Box } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
const Create = () => {
    const classes = useStyles();
    const [judul, setJudul] = useState('');
    const [detail, setDetail] = useState('');
    const [kategori, setKategori] = useState('');
    const [judulError, setJudulError] = useState(false);
    const [detailError, setDetailError] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const submitForm = (e) => {
        e.preventDefault();
        if (!judul) {
            setJudulError(true);
        }
        else {
            setJudulError(false);
        }
        if (!detail) {
            setDetailError(true);
        }
        else {
            setDetailError(false);
        }
        if (judul && detail) {
            if (!id) {
                fetch('http://localhost:8080/catatan', {
                    method: 'POST',
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({ judul: judul, detail: detail, kategori: kategori })
                }).then(() => navigate('/'))
            }
            else {
                fetch('http://localhost:8080/catatan/' + id, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        "judul": judul,
                        "detail": detail,
                        "kategori": kategori
                    }),
                    headers: { "Content-type": "application/json" }
                }).then(() => navigate("/"))
            }
            setJudul('');
            setDetail('');
        }
    }
    useEffect(() => {
        if (id) {
            fetch('http://localhost:8080/catatan/' + id)
                .then(res => res.json())
                .then((res) => {
                    setJudul(res.judul)
                    setDetail(res.detail)
                    setKategori(res.kategori)
                })
        }
    }, [])
    return (
        // <ThemeProvider theme={theme}>

        // </ThemeProvider>
        <Container>
            {id ? <Typography
                variant="h6"
                gutterBottom
                color="secondary"
            >
                Edit catatan
            </Typography> : <Typography
                variant="h6"
                gutterBottom
                color="secondary"
            >
                Buat catatan baru
            </Typography>}
            <Box sx={{ p: 2, border: '1px dashed grey' }}>
                <form noValidate autoComplete="off" onSubmit={submitForm}>
                    <TextField
                        value={judul}
                        id="standard-basic"
                        label="Judul catatan"
                        variant="outlined"
                        onChange={(e) => {
                            setJudul(e.target.value);
                        }}
                        color="secondary"
                        required
                        fullWidth
                        className={classes.field}
                        error={judulError}
                    />
                    <TextField
                        value={detail}
                        id="standard-basic"
                        label="Detail"
                        multiline
                        rows={3}
                        variant="outlined"
                        onChange={(e) => {
                            setDetail(e.target.value);
                        }}
                        color="secondary"
                        required
                        fullWidth
                        className={classes.field}
                        error={detailError}
                    />
                    <FormControl className={classes.field}>
                        <FormLabel>Kategori</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            row
                            value={kategori}
                            onChange={(e) => {
                                setKategori(e.target.value);
                            }}
                        >
                            <FormControlLabel
                                value="uang"
                                label="Uang"
                                control={<Radio color="secondary" />}
                            />
                            <FormControlLabel
                                value="jadwal"
                                label="Jadwal"
                                control={<Radio color="secondary" />}
                            />
                            <FormControlLabel
                                value="pengingat"
                                label="Pengingat"
                                control={<Radio color="secondary" />}
                            />
                            <FormControlLabel
                                value="pekerjaan"
                                label="Pekerjaan"
                                control={<Radio color="secondary" />}
                            />
                        </RadioGroup>
                    </FormControl>
                    <Button
                        type="submit"
                        variant="outlined"
                        color="secondary"
                        endIcon={<KeyboardArrowRight />}
                    >
                        Submit
                    </Button>
                </form>
            </Box>

            {/* <Button>
        <AcUnitOutlined color="error" />
    </Button> */}
        </Container>
    );

}
export default Create;