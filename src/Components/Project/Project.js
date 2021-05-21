import React from 'react';
import './Project.css';
import P1 from './p1.jpg';
import P2 from './p2.jpg';
import P3 from './p3.jpg';
import '../scroll';
import ScrollAnimation from 'react-animate-on-scroll';

const Project = ()=>{
    return(
            <div className='ultimate-project-wrapper show-on-scroll'>
            <h1 className="project-head">PROJECTS</h1>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' scrollableParentSelector='.ultimate-project-wrapper'>
            <div className='project-wrapper'>
                    
                <div className='project'>
                   
                    <div className='description'>
                        <h2>Chat App</h2>
                        <div className='detail'>
                            <p>Fully dynamic chat app wherein you and your friends can join and enjoy unlimited chatting.Some of the main features - </p><ul>
                                <li>Completely responsive and Easy to use UI</li>
                                <li>Cute little Avatar given to each user</li>
                                <li>Dynamic list of the online users</li>
                                <li>Notification when a user join/leave</li>
                                <li>Share your location with everyone in no time!</li>
                            </ul>
                        </div>
                        <div className='button-wrapper'>
                        <a href='https://thirsty-bohr-f004f0.netlify.app/' rel="noreferrer" className='anchor' target='_Blank'><button className='buttons'>See Live</button></a>
                        <a href='https://github.com/utkarshsangwan7/Chat-app' rel="noreferrer" className='anchor' target='_Blank'><button className='buttons'>Source Code</button></a>
                        </div>
                    </div>
                    <div className="image-wrapper"><img className='photo' src={P1} alt=''></img></div>
                   
                </div>
                <div className='project'>
                    <div className='description'>
                    <h2>Face Detection App</h2>
                    <p>Face detection app based on the machine learning model wherein you can enter the link of any image containing the face, it forms a box around the face of the person in the image.<br/>Moreover there is a login and Signup form where you can login/register yourself. Also it also maintains a count of the number of faces detected</p>
                    <div className='button-wrapper'>
                        <a href='https://my-smart-face-detector-app.herokuapp.com/' rel="noreferrer" className='anchor' target='_Blank'><button className='buttons'>See Live</button></a>
                        <a href='https://github.com/utkarshsangwan7/Face-detection-app' rel="noreferrer" className='anchor' target='_Blank'><button className='buttons'>Source Code</button></a>
                    </div>
                    </div>
                    <div className="image-wrapper"><img className='photo' src={P2} alt=''></img></div>
                </div>
                <div className='project'>
                    <div className='description'>
                    <h2>Weather App</h2>
                    <div className='detail'>
                        <p>A real time weather monitoring app wherein you can get the weather info of the any city across globe. Also it shows a dynamic map of the city entered in the searchfield.<br/>Besides from the temperature it also gives info of various parametes like - </p>
                        <ul>
                            <li>Wind direction</li>
                            <li>Wind speed</li>
                            <li>Pressure</li>
                            <li>Humidity</li>
                            <li>Precipitation</li>
                            <li>UV index</li>
                        </ul>
                    </div>
                    <div className='button-wrapper'>
                        <a href='https://climaxweather.herokuapp.com/' rel="noreferrer" className='anchor' target="_Blank"><button className='buttons'>See Live</button></a>
                        <a href='https://github.com/utkarshsangwan7/Weather-App' rel="noreferrer" className='anchor' target="_Blank"><button className='buttons'>Source Code</button></a>
                    </div>
                    </div>
                    <div className="image-wrapper"><img className='photo' src={P3} alt=''></img></div>
                </div>
                <a href='https://github.com/utkarshsangwan7' className='anchor' target="_Blank" rel="noreferrer"><button className='buttons'>More Projects</button></a>
            </div>
            </ScrollAnimation>
        </div>
    );
}
export default Project;