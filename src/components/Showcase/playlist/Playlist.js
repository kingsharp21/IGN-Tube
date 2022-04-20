import React from "react";
import ReactPlayer from "react-player";
import vid from '../../../assests/vid.mp4'
import vid1 from '../../../assests/vid1.mp4'

// TotalDuration 
// let TotalDurationHours, TotalDurationMinutes, TotalDurationSeconds
const playlistDuration =[]

function Playlist() {

    const play = document.querySelector('.playlist');
    for (let x = 0; x < playlistDuration.length; x++) {
       
        
    }

    const jj = 'https://assets1.ignimgs.com/thumbs/userUploaded/2022/4/1/tunic-br-1648838584873_large.jpg';


    const handleDuration = (duration) => {
        const sec = parseInt(duration, 10); 
        let hours = Math.floor(sec / 3600);
        let minutes = Math.floor((sec - (hours * 3600)) / 60);
        let seconds = sec - (hours * 3600) - (minutes * 60); 
        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        const jj =  minutes + ':' + seconds
        playlistDuration.push(jj)
        console.log(playlistDuration);
    }

    return (
        <>
            <div className="playlist">
                <div>
                    <ReactPlayer
                        className='thumbnail-video'
                        onDuration={handleDuration}
                        style={{ borderRadius: '10px' }}
                        width='170px'
                        height='100%'
                        url={vid} />
                        {/* // url='https://assets14.ign.com/videos/zencoder/2022/04/05/640/234a4498f317bc8c5992f23b1b018069-500000-1649147469.mp4' /> */}
                    <span>{playlistDuration[0]}</span>
                </div>
                <p>Hi, I am Kingsharp Nkansah</p>
            </div>
            <div className="playlist">
                <div>
                    <ReactPlayer
                        className='thumbnail-video'
                        onDuration={handleDuration}
                        style={{ borderRadius: '10px' }}
                        width='170px'
                        height='100%'
                        url={vid1} />
                        {/* // url='https://assets14.ign.com/videos/zencoder/2022/04/05/640/234a4498f317bc8c5992f23b1b018069-500000-1649147469.mp4' /> */}
                    <span>{playlistDuration[1]}</span>
                </div>
                <p>Hi, I am Kingsharp Nkansah</p>
            </div>
            <div className="playlist">
                <div>
                    <ReactPlayer
                        className='thumbnail-video'
                        onDuration={handleDuration}
                        style={{ borderRadius: '10px' }}
                        width='170px'
                        height='100%'
                        url={vid} />
                        {/* // url='https://assets14.ign.com/videos/zencoder/2022/04/05/640/234a4498f317bc8c5992f23b1b018069-500000-1649147469.mp4' /> */}
                    <span>{playlistDuration[2]}</span>
                </div>
                <p>Hi, I am Kingsharp Nkansah</p>
            </div>
            <div className="playlist">
                <div>
                    <ReactPlayer
                        className='thumbnail-video'
                        onDuration={handleDuration}
                        style={{ borderRadius: '10px' }}
                        width='170px'
                        height='100%'
                        url={vid1} />
                        {/* // url='https://assets14.ign.com/videos/zencoder/2022/04/05/640/234a4498f317bc8c5992f23b1b018069-500000-1649147469.mp4' /> */}
                    <span>{playlistDuration[3]}</span>
                </div>
                <p>Hi, I am Kingsharp Nkansah</p>
            </div>
            
            
        </>
    )
}

export default Playlist