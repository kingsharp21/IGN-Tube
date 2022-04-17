import React from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Slider from '@mui/material/Slider';

// css 
import './MobileControls.css'



function MobileControls({ played, 
    handleSeekChange, 
    handleSeekMouseDown, 
    handleSeekMouseUp, 
    toggleFullScreen, 
    playing, 
    handlePlayPause, 
    handleMute,
    mute, 
    volume,
    PlayedhoursTime,
    PlayedminutesTime,
    PlayedsecondsTime,
    TotalDurationHours,
    TotalDurationMinutes,
    TotalDurationSeconds }) {
    return (
        <>
            <div className="mobilecontrols">
                <div className="vid-top">
                    <span>Movie Title</span>

                </div>
                {playing ? <PauseIcon className="react-player__play-icon"
                    onClick={handlePlayPause}
                    sx={{
                        width: '35px',
                        color: 'white',
                        height: '30px',
                        marginRight: '15px',
                        cursor: 'pointer',
                    }}
                /> :
                    <PlayArrowIcon className="react-player__play-icon"
                        onClick={handlePlayPause}
                        sx={{
                            width: '35px',
                            color: 'white',
                            height: '30px',
                            marginRight: '15px',
                            cursor: 'pointer',
                        }}
                    />}
                <div className="slide">
                    <span>{PlayedhoursTime>0? PlayedhoursTime:''}{PlayedminutesTime>0? PlayedminutesTime:'0'}:{PlayedsecondsTime}</span>
                    <Slider
                        // defaultValue={30}
                        value={played * 100}
                        onChange={handleSeekChange}
                        onMouseDown={handleSeekMouseDown}
                        onChangeCommitted={handleSeekMouseUp}
                        sx={{
                            width: '65%',
                            color: 'white',
                            margin: '0 1rem',
                            '& .MuiSlider-thumb': {
                                width: '17px',
                                height: '17px',
                                borderRadius: '10px',
                                background: 'red',
                                border: '5px solid white',
                                
                                
                            },
                        }}
                        />
                        <span>{TotalDurationHours>0? TotalDurationHours:''}{TotalDurationMinutes>0? TotalDurationMinutes:'0'}:{TotalDurationSeconds>0? TotalDurationSeconds:'00' }</span>
                    {mute || volume === 0 ? <VolumeOffIcon
                        onClick={handleMute}
                        sx={{
                            width: '30px',
                            color: 'white',
                            height: '30px',
                            marginRight: '10px',
                            cursor: 'pointer',
                        }}
                    />
                        : <VolumeUpIcon className="sound"
                            onClick={handleMute}
                            sx={{
                                width: '35px',
                                color: 'white',
                                height: '30px',
                                marginRight: '5px',
                                cursor: 'pointer',
                            }}
                        />}

                    <FullscreenIcon
                        onClick={toggleFullScreen}
                        sx={{
                            width: '35px',
                            color: 'white',
                            height: '25px',
                            // marginRight: '10px',
                            cursor: 'pointer',
                        }}
                    />
                </div>

            </div>
        </>
    )
}

export default MobileControls