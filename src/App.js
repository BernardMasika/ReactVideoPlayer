import './App.css';
import {useRef, useState} from "react";
import {
    Alert,
    AppBar, Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    CssBaseline,
    Grid, LinearProgress, TextField,
    Toolbar,
    Typography
} from "@mui/material";
import {Forward5, Pause, PersonalVideo, PlayArrow, Replay5} from "@mui/icons-material";
import useStyles from "./Styles";

const cards = [1]

function App() {
    const videoRef = useRef(null)
    const classes = useStyles()
    const [playing, setPlaying] = useState(false);
    const [videoTime, setVideoTime] = useState(0)
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [textValue, setTextValue] = useState('https://res.cloudinary.com/dssvrf9oz/video/upload/v1635662987/pexels-pavel-danilyuk-5359634_1_gmixla.mp4')


    const videoHandler = (control) => {
        if (control === "play") {
            videoRef.current.play();
            setPlaying(true)
            let vid = document.getElementById("video89");
            setVideoTime(vid.duration);
        } else if (control === "pause") {
            videoRef.current.pause();
            setPlaying(false)
        }
        console.log('the vlaue link: ', textValue)
    };

    const fastForward = () => {
        videoRef.current.currentTime += 5;
    }
    const fastRevert = () => {
        videoRef.current.currentTime -= 5;
    }
    window.setInterval(function () {
        setCurrentTime(videoRef.current?.currentTime);
        setProgress((videoRef.current?.currentTime / videoTime) * 100);
        if (progress === 100) {
            setPlaying(false)
        }

    }, 1000);


    return (
        <>
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <PersonalVideo className={classes.icon}/>
                    <Typography variant='h6'>Player Video</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth='sm' className={classes.container}>
                        <Typography variant='h4' align='center' color='textPrimary' gutterBottom>
                            Personal Video Player
                        </Typography>
                        <Typography variant='subtitle1' align='center' color='textSecondary' paragraph>
                            hello everyone, this is any type video player, in case you don't feel like installing any
                            those vlc things!
                            Your most Welcome! 🤠
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid key={card} item xs={12} sm={12} md={12}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} component='video' ref={videoRef}
                                               id='video89'
                                               image={textValue}
                                               title='the image'/>
                                    <CardContent className={classes.cardContent}>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginTop: 2
                                        }}>
                                            <Alert severity="info" sx={{width: '60%'}}>Paste a link below to watch ya
                                                video meen!</Alert>
                                        </Box>
                                        <Box sx={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                                            <TextField variant='outlined' fullWidth={true}
                                                       onChange={event => setTextValue(event.target.value)}
                                                       placeholder={textValue}/>
                                            <Button size='small' variant='contained'
                                                    style={{margin: '0px 18px', textTransform: 'lowercase'}}
                                                    color='primary'>
                                                {playing ?
                                                    <Typography variant='button' sx={{textTransform: 'lowercase'}}
                                                                onClick={() => videoHandler('pause')}>pause</Typography> :
                                                    <Typography variant='button' sx={{textTransform: 'lowercase'}}
                                                                onClick={() => videoHandler('play')}>play</Typography>}
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>

                                <Box className='controlsContainer'>
                                    <Box className='controls'>
                                        <Replay5 fontSize='large' sx={{cursor: 'pointer'}} onClick={fastRevert}/>
                                        {playing
                                            ? <Pause fontSize='large' onClick={() => videoHandler('pause')}
                                                     sx={{cursor: 'pointer'}}/> :
                                            <PlayArrow fontSize='large' onClick={() => videoHandler('play')}
                                                       sx={{cursor: 'pointer'}}/>
                                        }
                                        <Forward5 fontSize='large' sx={{cursor: 'pointer'}} onClick={fastForward}/>
                                    </Box>
                                    <Box className='timeControls'>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            color: 'white'
                                        }}>
                                            <p className="controlsTime">
                                                {Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}
                                            </p>
                                            <p className="controlsTime">
                                                {Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}
                                            </p>
                                        </Box>
                                        <LinearProgress variant='determinate' value={progress}/>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/*<footer style={{padding: 30, marginTop: 15}}>*/}
            {/*    <Box sx={{border: '1px dashed grey', height: 170, padding: '20px 0'}}>*/}
            {/*        <Typography variant='h6' align='center'>*/}
            {/*            this is footer*/}
            {/*        </Typography>*/}
            {/*        <Typography variant='subtitle1' align='center'>*/}
            {/*            this is the subtitle*/}
            {/*        </Typography>*/}
            {/*    </Box>*/}
            {/*</footer>*/}
        </>
    );
}

export default App;
