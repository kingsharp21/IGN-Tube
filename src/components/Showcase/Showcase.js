import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import './Showcase.css'
import vid1 from '../../assests/vid/vid1.mp4'
import vid from '../../assests/vid/vid.mp4'
import screenfull from "screenfull";
import HoverVideoPlayer from 'react-hover-video-player';


// controlls 
import MobileControls from "../contols/mobilecontrols/MobileControls";
import DesktopControls from "../contols/desktopcontrols/DesktopControls";


// playedTime 
let PlayedhoursTime, PlayedminutesTime, PlayedsecondsTime
// TotalDuration 
let TotalDurationHours, TotalDurationMinutes, TotalDurationSeconds

function SecondsPlayed(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    PlayedhoursTime = hours
    PlayedminutesTime = minutes
    PlayedsecondsTime = seconds
    return hours + ':' + minutes + ':' + seconds; // Return is HH : MM : SS
}

function Showcase() {

    const [state, setState] = useState({
        playing: true,
        mute: true,
        volume: 0.5,
        played: 0,
        seeking: false,
        loop: false,
        fullscreen: false,
        pip: false,
        duration: 0
    })
    const { playing, mute, volume, played, seeking, loop, fullscreen, pip, duration } = state
    const playerContainerRef = useRef(null)
    const playingRef = useRef(null)

    const handlePlayPause = () => {
        setState({ ...state, playing: !state.playing })
    }
    const handleMute = () => {
        setState({ ...state, mute: !state.mute })
    }
    const handleVolumeChange = (e, newValue) => {
        setState({ ...state, volume: parseFloat(newValue / 100), muted: newValue === 0 ? true : false })

    }
    const handleVolumeSeekUp = (e, newValue) => {
        setState({ ...state, volume: parseFloat(newValue / 100), muted: newValue === 0 ? true : false })

    }

    // fullscreen 

    const toggleFullScreen = () => {
        screenfull.toggle(playerContainerRef.current)
        setState({ ...state, fullscreen: !fullscreen ? true : false })
    }

    // the progress bar 

    const handleProgress = (changeState) => {
        // console.log(changeState);
        if (!state.seeking) {
            setState({ ...state, ...changeState })
        }
    }

    const handleSeekChange = (e, newValue) => {
        setState({ ...state, played: parseFloat(newValue / 100) })
    }

    const handleSeekMouseDown = (e) => {
        setState({ ...state, seeking: true })
    }

    const handleSeekMouseUp = (e, newValue) => {
        setState({ ...state, seeking: false })
        playingRef.current.seekTo(newValue / 100)
    }

    // played seconds 
    const currentTime = state.playedSeconds
    const elapsedTime = SecondsPlayed(currentTime);

    const handleDuration = (duration) => {
        // console.log('onDuration', duration)
        const sec = parseInt(duration, 10); // convert value to number if it's string
        let hours = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
        let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
        // add 0 if value < 10; Example: 2 => 02
        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        // return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
        // this.setState({ duration })
        TotalDurationHours = hours
        TotalDurationMinutes = minutes
        TotalDurationSeconds = seconds
        // console.log(hours,minutes,seconds);
    }

    // loop 
    const handleLoop = () => {
        setState({ ...state, loop: !loop ? true : false })
    }
    // picture_In_Picture_Mode
    const pictureInPictureMode = () => {
        setState({ ...state, pip: !pip ? true : false })
    }


    const gitHubUrl = 'https://ign-apis.herokuapp.com/videos?startIndex=30&count=5';
    const [apiData, setApiData] = useState('')

    useEffect(() => {
        fetch(gitHubUrl)
            .then((response) => response.json())
            .then((data) => setApiData(data));
    }, []);

    return (
        <section className="showcase">
            <div className="container ">
                <div className="row d-flex align-items-start justify-content-between ">
                    <div ref={playerContainerRef} className="video-section col-sm-12 col-md-12 col-lg-8 col-xl-8">
                        <div className="active_video" style={{ borderRadius: '10px',background:'black' }}>
                            <ReactPlayer
                                // light='https://assets1.ignimgs.com/2021/05/21/rengoku-blogroll-1621631426779_large.jpg'
                                className='video'
                                style={{ borderRadius: '10px',background:'black' }}
                                width='100%'
                                height='100%'
                                playing={playing}
                                muted={mute}
                                volume={volume}
                                onProgress={handleProgress}
                                loop={loop}
                                pip={pip}
                                stopOnUnmount={false}
                                onDuration={handleDuration}
                                // url='https://assets14.ign.com/videos/zencoder/2022/03/28/640/777a42c4609c84b4f57a8d4c65ba4a97-752000-1648457309.mp4' />
                                url='https://assets14.ign.com/videos/zencoder/2022/04/05/640/234a4498f317bc8c5992f23b1b018069-500000-1649147469.mp4' />
                            {/* url='https://assets14.ign.com/videos/zencoder/2022/04/01/640/cf8195b4d4a14b3006fd0af2eafb3483-347000-1648865793.mp4' /> */}
                            {/* /> */}
                            <MobileControls
                                played={played}
                                handleSeekChange={handleSeekChange}
                                handleSeekMouseDown={handleSeekMouseDown}
                                handleSeekMouseUp={handleSeekMouseUp}
                                toggleFullScreen={toggleFullScreen}
                                playing={playing}
                                handlePlayPause={handlePlayPause}
                                handleMute={handleMute}
                                mute={mute}
                                volume={volume}
                                PlayedhoursTime={PlayedhoursTime}
                                PlayedminutesTime={PlayedminutesTime}
                                PlayedsecondsTime={PlayedsecondsTime}
                                TotalDurationHours={TotalDurationHours}
                                TotalDurationMinutes={TotalDurationMinutes}
                                TotalDurationSeconds={TotalDurationSeconds}
                            />
                            <DesktopControls
                                played={played}
                                handleSeekChange={handleSeekChange}
                                handleSeekMouseDown={handleSeekMouseDown}
                                handleSeekMouseUp={handleSeekMouseUp}
                                playing={playing}
                                handlePlayPause={handlePlayPause}
                                mute={mute}
                                volume={volume}
                                handleMute={handleMute}
                                toggleFullScreen={toggleFullScreen}
                                fullscreen={fullscreen}
                                handleVolumeChange={handleVolumeChange}
                                handleVolumeSeekUp={handleVolumeSeekUp}
                                handleLoop={handleLoop}
                                loop={loop}
                                pictureInPictureMode={pictureInPictureMode}
                                // elapsedTime={elapsedTime}
                                // totalDuration={totalDuration}
                                PlayedhoursTime={PlayedhoursTime}
                                PlayedminutesTime={PlayedminutesTime}
                                PlayedsecondsTime={PlayedsecondsTime}
                                TotalDurationHours={TotalDurationHours}
                                TotalDurationMinutes={TotalDurationMinutes}
                                TotalDurationSeconds={TotalDurationSeconds}
                            />
                        </div>
                        <Description />
                    </div>
                    <div className="list col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <div className="video_box">
                            <Playlist />
                        </div>
                        <button>Load More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Playlist() {
    const jj = 'https://assets1.ignimgs.com/thumbs/userUploaded/2022/4/1/tunic-br-1648838584873_large.jpg'
    return (
        <>
            <div className="playlist ">
                <div>
                    <img src={jj} alt="" />
                    <span>3:21</span>
                </div>
                <p>Hi, I am Kingsharp Nkansah</p>
            </div>
            <div className="playlist ">
                <div>
                    <img src={jj} alt="" />
                    <span>3:21</span>
                </div>
                <p>Hi, I am Kingsharp Nkansah</p>
            </div>
            <hr/>
            <div className="playlist ">
                <div>
                    <img src={jj} alt="" />
                    <span>3:21</span>
                </div>
                <p>Hi, I am Kingsharp Nkansah</p>
            </div>
            <div className="playlist ">
                <div>
                    <img src={jj} alt="" />
                    <span>3:21</span>
                </div>
                <p>Hi, I am Kingsharp Nkansah</p>
            </div>
            
        </>
    )
}

function Description() {
    return (
        <>
            <div className="description ">
                <div className="description_text ">
                    <h1>The Last Of Us Part || Review</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci voluptas saepe reprehenderit excepturi ipsa quam incidunt vitae odio molestias, nisi asperiores illum autem nostrum quasi enim temporibus dolorem. Ut.
                    </p>
                </div>

            </div>
        </>
    )
}




export default Showcase;