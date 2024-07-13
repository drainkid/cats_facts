import React from 'react';
import {Box, Button} from '@mui/material';
import axios from "axios";


const AcceptButton = ({take}) => {

    const fetchEmotion =  () => {

       // const req = JSON.stringify(req)
        const req = 'https://catfact.ninja/fact'
        axios.get(req).then(value => take((value.data.fact)))

    }


    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"

            >

            <Button variant="contained" size = 'large'
            sx = {{
                bottom: 150
            }}
            onClick = {fetchEmotion}
            >
               GET

            </Button>

            </Box>
        </div>
    );
};

export default AcceptButton;