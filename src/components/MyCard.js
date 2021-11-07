import React from 'react';
import Button from "@mui/material/Button";
import {Card, CardContent, Chip} from "@mui/material";


const MyCard = ({score, ifClicked}) => {
    return (
        <Card sx={{width: '35vw', height: '30vh'}}>
            <CardContent>
                <Chip label={score} color='primary'/>
            </CardContent>
            <Button variant='contained' style={{marginTop: 30, textTransform: 'lowercase'}} onClick={ifClicked}>
                click to score double </Button>
        </Card>
    );
};

export default MyCard;