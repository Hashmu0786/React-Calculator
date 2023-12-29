import { Grid, Typography, TextField, ButtonGroup, Button } from "@mui/material"
import "../Components/styles.css"
import { useState } from "react";

export default function Interface() {

    const [show, setShow] = useState('');
    const [input, setInput] = useState('0');


    const handleinput = (num) => {
        if (show === '0' && num !== '.') {
            setInput(num);
            setShow(num);
        } else {
            setInput((prevInput) => prevInput + num);
            setShow((prevShow) => prevShow + num);
        }
    };



    const handleOperations = () => {
        try {
            const result = eval(input);
            setInput(String(result));
            setShow(String(result));
        } catch (e) {
            setInput("Error");
            setShow("Error");
        }
    };


    const handleclear = () => {
        setInput('');
        setShow('');
    }

    const row1 = [
        <Button className="btn" sx={{ width: '100px', height: '65px', color: '#696969', borderColor: "#696969", backgroundColor: "#FFFAFA" }}
            onClick={() => handleinput('%')}
        >% </Button>,
        <Button sx={{ width: '100px', height: '65px', color: '#696969', borderColor: "#696969", backgroundColor: "#FFFAFA" }}
            onClick={() => handleinput('+/-')}
        >+/-</Button>,
        <Button sx={{ width: '100px', height: '65px', color: '#696969', borderColor: "#696969", backgroundColor: "#FFFAFA" }}
            onClick={() => handleclear()}
        >C</Button>,
        <Button sx={{ width: '100px', height: '65px', backgroundColor: '#8A2BE2', color: "white", borderColor: "#8A2BE2" }}
            variant="contained" onClick={() => handleinput('/')}
        >/</Button>
    ];
    const row2 = [
        <Button sx={{ width: '100px', height: '65px', color: '#696969', borderColor: "#696969", backgroundColor: "#FFFAFA" }}
            onClick={() => handleinput('7')}
        >7</Button>,
        <Button sx={{ width: '100px', height: '65px', color: '#696969', borderColor: "#696969", backgroundColor: "#FFFAFA" }}
            onClick={() => handleinput('8')}
        >8</Button>,
        <Button sx={{ width: '100px', height: '65px', color: '#696969', borderColor: "#696969", backgroundColor: "#FFFAFA" }}
            onClick={() => handleinput('9')}
        >9</Button>,
        <Button sx={{ width: '100px', height: '65px', backgroundColor: '#8A2BE2', color: "white", borderColor: "#8A2BE2" }}
            variant="contained" onClick={() => handleinput('*')}
        >*</Button>
    ];
    const row3 = [
        <Button sx={{ width: '100px', height: '65px', color: '#696969', borderColor: "#696969", backgroundColor: "#FFFAFA" }}
            onClick={() => handleinput('4')}
        >4 </Button>,
        <Button sx={{ width: '100px', height: '65px', color: '#696969', borderColor: "#696969", backgroundColor: "#FFFAFA" }}
            onClick={() => handleinput('5')}>5</Button>,
        <Button sx={{ width: '100px', height: '65px', color: '#696969', borderColor: "#696969", backgroundColor: "#FFFAFA" }}
            onClick={() => handleinput('6')}
        >6</Button>,
        <Button sx={{ width: '100px', height: '65px', backgroundColor: '#8A2BE2', color: "white", borderColor: "#8A2BE2" }}
            variant="contained" onClick={() => handleinput('-')}
        >-</Button>
    ];
    const row4 = [
        <Button sx={{ width: '100px', height: '65px', color: '#696969', borderColor: "#696969", backgroundColor: "#FFFAFA" }}
            onClick={() => handleinput('1')}
        >1</Button>,
        <Button sx={{ width: '100px', height: '65px', color: '#696969', borderColor: "#696969", backgroundColor: "#FFFAFA" }}
            onClick={() => handleinput('2')}
        >2</Button>,
        <Button sx={{ width: '100px', height: '65px', color: '#696969', borderColor: "#696969", backgroundColor: "#FFFAFA" }}
            onClick={() => handleinput('3')}
        >3</Button>,
        <Button sx={{ width: '100px', height: '65px', backgroundColor: '#8A2BE2', color: "white" }}
            variant="contained" onClick={() => handleinput('+')}
        >+</Button>
    ];
    const row5 = [
        <Button sx={{ width: '100px', height: '65px', color: '#696969', borderColor: "#696969", backgroundColor: "#FFFAFA" }}
            onClick={() => handleinput('0')}
        >0 </Button>,
        <Button sx={{ width: '100px', height: '65px', color: '#696969', color: '#696969', fontWeight: 'bold', borderColor: "#696969", backgroundColor: "#FFFAFA" }}
            onClick={() => handleinput('.')}
        >.</Button>,
        <Button sx={{ width: '200px', height: '65px', backgroundColor: '#C70039', color: "white", borderColor: '#C70039' }}
            variant="contained" onClick={() => handleOperations('=')}
        >=</Button>,
    ];

    return (
        <>

            <Grid container spacing={1} className="root">
                <Grid item xs={12}>
                    <Typography variant="h3" className="heading"
                        sx={{ textAlign: "center" }}
                    >Calculator</Typography>
                </Grid>

                <Grid container className="container" sx={{ marginTop: "-100px" }}>
                    <Grid item xs={12}>
                        <TextField className="textfield" sx={{ width: 395, color: "secondary" }}
                            //  background: "rgb(2,0,36)"
                            value={show}
                            disabled />
                    </Grid>
                    <Grid item xs={12} >
                        <ButtonGroup size="large" aria-label="large button group">
                            {row1}
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={12} >
                        <ButtonGroup size="large" aria-label="large button group">
                            {row2}
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={12} >
                        <ButtonGroup size="large" aria-label="large button group">
                            {row3}
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={12} >
                        <ButtonGroup size="large" aria-label="large button group">
                            {row4}
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={12} >
                        <ButtonGroup size="large" aria-label="large button group">
                            {row5}
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}