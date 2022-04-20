import React, { useState, useEffect, useRef } from "react";
import './DesktopControls.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import HdSharpIcon from '@mui/icons-material/HdSharp';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
// import FourKIcon from '@mui/icons-material/FourK';
import FourKOutlinedIcon from '@mui/icons-material/FourKOutlined';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Slider from '@mui/material/Slider';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import screenfull from "screenfull";

function DesktopControls({ played,
    handleSeekChange,
    handleSeekMouseDown,
    handleSeekMouseUp,
    playing,
    handlePlayPause,
    mute,
    volume,
    handleMute,
    toggleFullScreen,
    fullscreen,
    handleVolumeChange,
    handleVolumeSeekUp,
    handleLoop,
    loop,
    pictureInPictureMode,
    elapsedTime,
    totalDuration,
    playedSec,
    PlayedhoursTime,
    PlayedminutesTime,
    PlayedsecondsTime,
    TotalDurationHours,
    TotalDurationMinutes,
    TotalDurationSeconds }) {

    return (
        <div className='controls'>
                <div className="vid-top">
                    <span>Movie Title</span>
                </div>
                <div>
            <div className="track d-flex align-items-center justify-content-center">
                <Slider
                    // defaultValue={30}
                    min={0}
                    max={100}
                    value={played * 100}
                    onChange={handleSeekChange}
                    onMouseDown={handleSeekMouseDown}
                    onChangeCommitted={handleSeekMouseUp}
                    sx={{
                        width: '90%',
                        color: 'white',
                        '& .MuiSlider-thumb': {
                            width: '17px',
                            height: '17px',
                            borderRadius: '10px',
                            background: 'red',
                            border: '5px solid white',

                        },
                    }}
                />

            </div>
            <div className="control_container">
            <div className="control-btn d-flex align-items-center justify-content-between ">
                <div className="right-section col-auto d-flex align-items-center">
                    {playing ? <PauseIcon title="click here"
                        onClick={handlePlayPause}
                        sx={{
                            width: '35px',
                            color: 'white',
                            height: '30px',
                            marginRight: '15px',
                            cursor: 'pointer',
                        }}
                    /> :
                        <PlayArrowIcon title="click here"
                            onClick={handlePlayPause}
                            sx={{
                                width: '35px',
                                color: 'white',
                                height: '30px',
                                marginRight: '15px',
                                cursor: 'pointer',
                            }}
                        />}
                    {!loop ? <AllInclusiveIcon className="loop"
                        onClick={handleLoop}
                        sx={{
                            width: '35px',
                            color: 'white',
                            height: '30px',
                            marginRight: '15px',
                            cursor: 'pointer',
                        }}
                    /> :
                        <AllInclusiveIcon className="loop"
                            onClick={handleLoop}
                            sx={{
                                width: '35px',
                                color: 'white',
                                height: '30px',
                                borderRadius: '5px',
                                background: '#bf1313',
                                marginRight: '15px',
                                cursor: 'pointer',
                            }} />
                    }
                    {mute || volume === 0 ? <VolumeOffIcon
                        onClick={handleMute}
                        sx={{
                            width: '35px',
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
                    {mute ? "" : <Slider
                        min={0}
                        max={100}
                        // defaultValue={30}
                        value={volume * 100}
                        onChange={handleVolumeChange}
                        onChangeCommitted={handleVolumeSeekUp}
                        sx={{
                            width: '50px',
                            color: 'white',
                            // marginRight: '15px',
                            '& .MuiSlider-thumb': {
                                width: '17px',
                                height: '17px',
                                borderRadius: '10px',
                                background: 'red',
                                border: '5px solid white',

                            },
                        }}
                    />}
                    <p className="track-length"><span style={{ marginRight: 'px' }}>{PlayedhoursTime > 0 ? PlayedhoursTime : ''}{PlayedminutesTime > 0 ? PlayedminutesTime : '0'}:{PlayedsecondsTime > 0 ? PlayedsecondsTime : '00'}</span><span style={{ marginLeft: 'px' }}><span >/</span> {TotalDurationHours > 0 ? TotalDurationHours : ''}{TotalDurationMinutes > 0 ? TotalDurationMinutes : '0'}:{TotalDurationSeconds > 0 ? TotalDurationSeconds : '00'}</span> </p>
                </div>
                <div className="left-section col-auto">
                    <div className="fourk">
                    <HdSharpIcon className="HD"
                        sx={{
                            width: '35px',
                            color: 'white',
                            height: '30px',
                            // marginRight: '10px',
                            cursor: 'pointer',
                        }}
                    />
                    <span>4k</span>
                    </div>

                    <span className="ccicon">cc</span>
                    {/* <FourKOutlinedIcon
                        sx={{
                            width: '35px',
                            color: 'red',
                            height: '30px',
                            marginRight: '10px',
                            cursor: 'pointer',
                        }}
                    /> */}
            
                    {!fullscreen ? <FullscreenIcon
                        onClick={toggleFullScreen}
                        sx={{
                            width: '35px',
                            color: 'white',
                            height: '25px',
                            marginRight: '10px',
                            cursor: 'pointer',
                        }}
                    /> :
                        <FullscreenExitIcon
                            onClick={toggleFullScreen}
                            sx={{
                                width: '35px',
                                color: 'white',
                                height: '25px',
                                marginRight: '10px',
                                cursor: 'pointer',
                            }}
                        />
                    }
                    <PictureInPictureAltIcon
                        onClick={pictureInPictureMode}
                        sx={{
                            width: '35px',
                            color: 'white',
                            height: '25px',
                            marginRight: '10px',
                            cursor: 'pointer',
                        }}
                    />
                </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default DesktopControls;