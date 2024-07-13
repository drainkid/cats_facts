// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { TextField } from '@mui/material';
import {Box} from "@mui/material";
import AcceptButton from "./acceptButton.jsx";



const TextForm = () => {

    const [Inputval,SetInputval] = useState('')
    const getText = (txt) => {

        SetInputval(txt)
    }

    return (

        <div>

            <h1 className = 'header'> Random facts about cats </h1>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="80vh"

            >

            <TextField
                id= 'text'
                label = 'Факт о котах'
                multiline
                rows={10}
                value={Inputval}
                color = 'secondary'
                sx = {{
                    width: 700,
                }
            }
                onChange= {(e) => SetInputval(e.target.value)}
           />

            </Box>

            <AcceptButton take={getText}/>


        </div>
    );

};

export default TextForm;