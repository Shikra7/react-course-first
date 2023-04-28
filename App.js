import React from 'react'
export default function App(){
    return (
        <div className="main">
            <img src="../images/Card.png" className="img"/>
            <div className="hero">
                <h1 className="name">Ahmad Abdulmajid</h1>
                <h2 className="title">Software Engineer</h2>
                <p className="website">Shikra.Website</p>
                <div className="links">
                    <button className="links-email"><i className="fa-solid fa-envelope"></i> Email</button>
                    <button className="linkes-ln"><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
                </div>
                <div className="info">
                    <h3 className="info-header">About</h3>
                    <p className="info-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h3 className="info-header">Interests</h3>
                    <p className="info-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
            <footer>
                <div className="footer">
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                    <i className="fa-brands fa-square-github"></i>
                </div>
            </footer>
        </div>
    )
}