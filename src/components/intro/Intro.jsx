import React from 'react'
import "./intro.css";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Isa Almena</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Graphic Designer</div>
                            <div className="i-title-item">Photographer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img src="" alt="" className="i-img" />
            </div>

           
        </div>
    )
}

export default Intro
