import { DeleteOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
const NoteCard = ({ catatan, handleDelete }) => {
    const navigate = useNavigate();
    return (
        // <Grid item xs={12} sm={6} md={3}>

        // </Grid>
        <Card elevation={1}>
            {/* <CardContent>
                <Typography gutterBottom variant="h5">
                    {catatan?.judul}
                </Typography>
            </CardContent> */}
            <CardHeader
                action={
                    <IconButton
                        onClick={(e) => {
                            handleDelete(catatan.id)
                        }}
                        aria-label="settings"
                    >
                        <DeleteOutlined />
                    </IconButton>
                }
                title={
                    <Link to={`/catatan/${catatan.id}`} style={{ textDecoration: "none", color: "black" }}>
                        <Typography variant="h5">
                            {catatan.judul}
                        </Typography>
                    </Link>
                }
                subheader={catatan.kategori}

            >
            </CardHeader>
            <CardContent>
                <Typography variant="body2">
                    {catatan.detail}
                </Typography>
            </CardContent>
        </Card>
    );
}
export default NoteCard;