import React from 'react';
import './Project.css';
import P1 from './p1.jpg';
import P2 from './p2.jpg';
import P3 from './p3.jpg';
import meetify_img from './meetify.jpg';
import '../scroll';
import ScrollAnimation from 'react-animate-on-scroll';

const Project = ()=>{
    return(
            <div className='ultimate-project-wrapper show-on-scroll'>
            <h1 className="project-head">PROJECTS</h1>
            <ScrollAnimation animateIn='fadeIn'
                animateOut='fadeOut' scrollableParentSelector='.ultimate-project-wrapper'>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                <div className="card my-card">
                    <img src={meetify_img} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                    <h5 className="card-title">Meetify</h5>
                    <p className="card-text">meetify is a video-conference-calling platform. It enables users to make video calls to multiple users in real time using a high-definition video meeting. Apart from video call you can also chat with the participants of the meeting using the same platform. It also includes some other features like –  <ul>
                                <li>Audio mute/Unmute in just a click</li>
                                <li>Video ON/OFF</li>
                                <li>Live Screen Sharing which is also visible in real time</li>
                            </ul>And guess what it is going to be Free always!!</p>
                    </div>
                    <div className="card-footer">
                    <div className='button-wrapper'>
                        <a href='https://my-meetify.herokuapp.com/' rel="noreferrer" className='anchor' target='_Blank'><button className='buttons'>See Live</button></a>
                        <a href='https://github.com/utkarshsangwan7/Meetify' rel="noreferrer" className='anchor' target='_Blank'><button className='buttons'>Source Code</button></a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card my-card">
                    <img src={P2} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                    <h5 className="card-title">Smart Brain</h5>
                    <p className="card-text">Face detection app based on the machine learning model wherein you can enter the link of any image containing the face, it forms a box around the face of the person in the image.<br/>Moreover there is a login and Signup form where you can login/register yourself. Also it also maintains a count of the number of faces detected</p>
                    </div>
                    <div className="card-footer">
                    <div className='button-wrapper'>
                        <a href='https://my-smart-face-detector-app.herokuapp.com/' rel="noreferrer" className='anchor' target='_Blank'><button className='buttons'>See Live</button></a>
                        <a href='https://github.com/utkarshsangwan7/Face-detection-app' rel="noreferrer" className='anchor' target='_Blank'><button className='buttons'>Source Code</button></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card my-card">
                    <img src={P3} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                    <h5 className="card-title">Climax Weather</h5>
                    <p className="card-text">A real time weather monitoring app wherein you can get the weather info of the any city across globe. Also it shows a dynamic map of the city entered in the searchfield.<br/>Besides from the temperature it also gives info of various parametes like -
                        <ul>
                            <li>Wind direction</li>
                            <li>Wind speed</li>
                            <li>Pressure</li>
                            <li>Humidity</li>
                            <li>Precipitation</li>
                            <li>UV index</li>
                        </ul>
                    </p>
                    </div>
                    <div className="card-footer">
                    <div className='button-wrapper'>
                        <a href='https://climaxweather.herokuapp.com/' rel="noreferrer" className='anchor' target="_Blank"><button className='buttons'>See Live</button></a>
                        <a href='https://github.com/utkarshsangwan7/Weather-App' rel="noreferrer" className='anchor' target="_Blank"><button className='buttons'>Source Code</button></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="card my-card">
                    <img src={P1} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                    <h5 className="card-title">Chat App</h5>
                    <p className="card-text">Fully dynamic chat app wherein you and your friends can join and enjoy unlimited chatting.Some of the main features - <ul>
                                <li>Completely responsive and Easy to use UI</li>
                                <li>Cute little Avatar given to each user</li>
                                <li>Dynamic list of the online users</li>
                                <li>Notification when a user join/leave</li>
                                <li>Share your location with everyone in no time!</li>
                            </ul></p>
                    </div>
                    <div className="card-footer">
                    <div className='button-wrapper'>
                        <a href='https://thirsty-bohr-f004f0.netlify.app/' rel="noreferrer" className='anchor' target='_Blank'><button className='buttons'>See Live</button></a>
                        <a href='https://github.com/utkarshsangwan7/Chat-app' rel="noreferrer" className='anchor' target='_Blank'><button className='buttons'>Source Code</button></a>
                        </div>
                    </div>
                </div>
                </div>
                
                </div>
            </ScrollAnimation>
            <a href='https://github.com/utkarshsangwan7' className='anchor' target="_Blank" rel="noreferrer"><button className='buttons'>More Projects</button></a>
        </div>
    );
}
export default Project;