import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%'
            }
        }>
            <CircularProgress color="secondary" />
        </div>
    );
}
export default Loading;