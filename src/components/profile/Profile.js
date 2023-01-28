import React, { useContext } from 'react';
import "./Profile.css";
import mugshot from '../../assets/mugshot.jpeg';
import { CardContext } from '../context/CardContextProvider';

function Profile() {

    const { setShowFront, zoomedIn, setZoomedIn } = useContext(CardContext);

    return (
        <div id={"profile"}>
            <div id={'mugshot'}>
                <img src={mugshot} alt="" />
            </div>
            <div id="about">
                <h1>Jethro</h1>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, debitis mollitia, reprehenderit illum tempore, atque id obcaecati rerum minus laboriosam sed nam. Officiis ad veritatis alias quo omnis quia explicabo.
            </div>
            <div id="links">
                <ul>
                <li>
                    blog: <a href="https://dutch-dev.blogspot.com/">aspiring dev</a>
                </li>
                <li>
                    github: <a href="https://github.com/J-Segers/">github</a>
                </li>
                </ul>
            </div>
            <div id="flip" onClick={() => {
                setShowFront(true);
                setZoomedIn(false);
                }}>
                &#10558;
            </div>
        </div>
    );
}

export default Profile;