import React from 'react';
import './About.css';
import Abtlogo from '../assets/abtpic12.png'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate();

    useEffect(() => {
        //cannt use async inside useeffect but can use promises
        myfuncAbout();
    }, [])


    const myfuncAbout = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"
            });
            const data = await res.json();
            console.log(data);
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }

        }
        catch (err) {
            console.log(err);
            navigate('/login');

        }
    }


    return <div className='ac' id="abt">
        <div id='ac1' style={{ border: "none" }}> <img id='abtimg' src={Abtlogo} alt="" /></div>
        <div className='ac' id='ac2'>
            <p>Say goodbye to excuses
                and hello to positive uses
                of your time and energy as
                our website's the remedy for that you just have to
                join our fitness website today to
                find your motivation and stay
                with workouts, tips, and guidance too
                your goals are achievable, it's true.</p>
        </div>
        <div className='ac' id='ac3'>
            <ul>Why FitCrux ?
                <hr />
                <li>Free to use</li>
                <li>Home Workout plan</li>
                <li>Measure progress</li>
                <li>Schedule tasks</li>
                <li>Diet planner</li>
            </ul>
        </div>
    </div>
}

export default About;