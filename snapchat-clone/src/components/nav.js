import styled from 'styled-components'
import React from 'react'
// import { useRef , useEffect} from 'react'
import "../css/nav.css"
// import Styled from './styled'

const Nav = (props)=>{
    // function drop(){
    //     var dropdown=document.getElementById("dropdown")
    //     var features=document.querySelectorAll(".features")
    //     dropdown.classList.toggle("act")
        
    //     console.log("hi")
    // }   
    
    // function waffleclicked(){
    //     const waffleClick=document.getElementsByClassName(".waffleClicked")
    //     waffleClick.classList.toggle("inactive")
    // }

    function drop(){
        var dropdown=document.getElementById("dropdown")
        var nav=document.getElementById("nav")
        var up=document.getElementById("up")
        var down=document.getElementById("down")
        var features=document.getElementById("features")
        features.addEventListener("mouseover",()=>{
            dropdown.classList.remove("act")
            up.classList.remove("act")
            down.classList.add("act")
        })
        
        nav.addEventListener("mouseleave",()=>{
            dropdown.classList.add("act")
            
            up.classList.add("act")
            down.classList.remove("act")
        })
        
        console.log("hi")
    }   
    function waffleClick(){
        var waffle=document.getElementById("waffle")
        var cross=document.getElementById("cross")
        var waffleClicked=document.getElementById("waffle-click")
        // waffleClicked.classList.remove("act")
        
        waffle.addEventListener("click",()=>{
            console.log("hi2")
            waffleClicked.classList.remove("act")
        })
        cross.addEventListener("click",()=>{
            waffleClicked.classList.add("act")
        })
    }
    return (
        
        <NavContainer id='nav' className='navContainer' onMouseMove={drop}>
            <WaffleIcon className='icon-waffle' id='waffle' onMouseEnter={waffleClick}>
                {/* <svg></svg> */}
                <img className='none line-icon' src="https://www.svgrepo.com/show/80173/menu-symbol-of-three-parallel-lines.svg" alt="" />
                <svg className='waffle' width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path width="24px"  d="M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z" /></svg>
            </WaffleIcon>
            {/* <waffleClicked className="waffleClicked "></waffleClicked> */}
            <SnapLogo  className='SnapLogo'>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="38px" ><linearGradient id="QX5D~fZRbzuyxUWp6bUDBa" x1="32" x2="32" y1="8.66" y2="55.384" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#QX5D~fZRbzuyxUWp6bUDBa)" d="M32.303,56h-0.606c-3.164,0-5.21-1.475-7.015-2.776c-1.177-0.85-2.186-1.578-3.31-1.769 c-0.606-0.102-1.208-0.154-1.788-0.154c-1.043,0-1.855,0.162-2.509,0.292c-0.458,0.091-0.849,0.169-1.211,0.169 c-1.184,0-1.558-0.866-1.664-1.238c-0.118-0.413-0.205-0.813-0.288-1.202c-0.046-0.217-0.131-0.614-0.206-0.851 c-3.91-0.646-5.997-1.578-6.559-2.924c-0.087-0.213-0.135-0.423-0.146-0.631c-0.043-0.771,0.499-1.451,1.261-1.577 c6.31-1.062,9.395-8.068,9.425-8.139c0.223-0.463,0.426-1.053,0.245-1.489c-0.3-0.722-1.64-1.154-2.439-1.413 c-0.307-0.1-0.552-0.181-0.746-0.26c-1.983-0.8-2.836-1.754-2.761-3.091c0.043-0.798,0.521-1.581,1.214-1.994 c0.438-0.26,1.367-0.604,2.656,0.009c0.79,0.377,1.476,0.568,2.041,0.568c0.184,0,0.329-0.021,0.442-0.048 c-0.01-0.167-0.021-0.336-0.031-0.508l-0.021-0.361c-0.213-3.455-0.477-7.747,0.657-10.34c3.35-7.671,10.461-8.267,12.561-8.267 L32.474,8c2.104,0,9.229,0.597,12.582,8.273c1.136,2.598,0.87,6.892,0.656,10.343c0,0-0.027,0.44-0.053,0.868 c0.094,0.022,0.21,0.04,0.352,0.046c0.66-0.029,1.337-0.188,1.933-0.474c1.515-0.705,2.493-0.401,3.046-0.023 c0.783,0.537,1.087,1.489,1.041,2.195c-0.074,1.17-0.983,2.089-2.778,2.815c-0.208,0.083-0.469,0.169-0.746,0.258 c-0.8,0.259-2.14,0.693-2.438,1.412c-0.182,0.437,0.021,1.027,0.225,1.446c0.021,0.043,0.039,0.088,0.053,0.134l0,0 c0.006,0,3.083,6.985,9.396,8.048c0.76,0.129,1.299,0.81,1.256,1.583c-0.01,0.21-0.06,0.424-0.147,0.632 c-0.561,1.338-2.647,2.268-6.556,2.913c-0.079,0.248-0.167,0.663-0.205,0.844c-0.086,0.398-0.172,0.787-0.29,1.197 c-0.22,0.761-0.82,1.215-1.607,1.215c-0.368,0-0.763-0.049-1.263-0.15c-0.708-0.142-1.504-0.273-2.512-0.273 c-0.581,0-1.183,0.052-1.79,0.154c-1.122,0.191-2.13,0.918-3.298,1.76C37.513,54.525,35.465,56,32.303,56z M19.584,49.302 c0.69,0,1.404,0.061,2.121,0.182c1.584,0.269,2.882,1.206,4.138,2.112C27.563,52.835,29.178,54,31.696,54h0.606 c2.517,0,4.135-1.165,5.847-2.399c1.265-0.912,2.563-1.847,4.144-2.117c0.719-0.121,1.433-0.182,2.124-0.182 c1.183,0,2.096,0.15,2.906,0.313c0.285,0.058,0.484,0.086,0.62,0.1c0.072-0.278,0.131-0.547,0.189-0.819 c0.228-1.073,0.465-2.184,1.554-2.354c3.012-0.476,4.332-1.036,4.902-1.395c-6.46-1.563-9.64-8.101-10.093-9.118l-0.004,0.002 c-0.554-1.146-0.646-2.184-0.271-3.084c0.65-1.57,2.54-2.182,3.669-2.547c0.23-0.074,0.446-0.144,0.614-0.211 c1.034-0.418,1.514-0.845,1.529-1.082c0.007-0.104-0.05-0.337-0.176-0.423c-0.122-0.085-0.478-0.09-1.062,0.182 c-0.832,0.398-1.773,0.624-2.786,0.663c-1.313-0.049-1.944-0.615-2.109-0.788c-0.189-0.199-0.288-0.467-0.274-0.741 c0.023-0.436,0.089-1.507,0.089-1.507c0.2-3.236,0.449-7.264-0.492-9.419C40.356,10.51,34.271,10,32.474,10l-0.969,0.009 c-1.793,0-7.864,0.51-10.729,7.068c-0.94,2.151-0.692,6.176-0.493,9.41l0.022,0.368c0.023,0.393,0.047,0.776,0.066,1.146 c0.014,0.27-0.083,0.534-0.267,0.732c-0.175,0.188-0.85,0.8-2.208,0.8c-0.866,0-1.843-0.257-2.901-0.763 c-0.191-0.092-0.554-0.228-0.773-0.096c-0.16,0.095-0.235,0.298-0.24,0.385c-0.022,0.417,0.812,0.843,1.515,1.127 c0.159,0.064,0.357,0.127,0.566,0.195c1.173,0.379,3.063,0.989,3.716,2.563c0.374,0.9,0.283,1.938-0.271,3.084l-0.002-0.001 c-0.431,0.968-3.608,7.554-10.104,9.12c0.563,0.352,1.882,0.918,4.914,1.396c1.085,0.168,1.323,1.283,1.553,2.361 c0.059,0.273,0.118,0.552,0.192,0.838c0.182-0.023,0.402-0.067,0.618-0.11C17.385,49.493,18.344,49.302,19.584,49.302z M14.003,48.52c0.001,0,0.002,0,0.003,0C14.005,48.52,14.004,48.52,14.003,48.52z M8.594,45.313c-0.001,0-0.002,0-0.003,0.001 C8.592,45.313,8.593,45.313,8.594,45.313z"/><g><linearGradient id="QX5D~fZRbzuyxUWp6bUDBb" x1="36.939" x2="36.939" y1="11.979" y2="19.95" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#QX5D~fZRbzuyxUWp6bUDBb)" d="M32,21h9.879c-0.042-1.271-0.175-2.409-0.488-3.126C39.075,12.572,34.384,12,32.474,12 L32,12.004V21z"/></g></svg>
            </SnapLogo>
            <navItems className="navItems">
                <span className='link link-underline link-underline-black'>Advertisers</span>
                <span className='link link-underline link-underline-black'>Creators</span>
                <span className='link link-underline link-underline-black'>Developers</span>
                <span className='link link-underline link-underline-black'>Snap AR</span>
                <span id="features" className='features link link-underline link-underline-black'>Features  <i id='down' className='icon-down'><img width="10px" src="https://www.svgrepo.com/show/80156/down-arrow.svg" alt="" srcset="" /></i> <i id='up' className='act'><img width="10px" src="https://www.svgrepo.com/show/93813/up-arrow.svg" alt="" /></i></span>
            {/* </navItems> */}
                
            <navButtons className="navButtons">
                <DownButton className='DownButton'>
                    <phoneIcon className="phoneIcon"><img src="https://images.ctfassets.net/adclj4ijug4e/5gg68Pk496OvVArEZQzIJs/b7e7668255a3f36807a83665bc9148f4/Phone.svg" alt="" /></phoneIcon>
                    <text>Download</text>
                </DownButton>
                <LoginButton className='LoginButton'>
                    <laptopIcon className="lapIcon"><img src="https://images.ctfassets.net/adclj4ijug4e/2mdwMtA6MPyOcs52zq4Zws/b1ff63bd0cced29d5544cde242ade9d5/Laptop_icon.svg" alt="" /></laptopIcon>
                    <Text className='text'> Login to Chat</Text>
                </LoginButton>
            </navButtons>
            </navItems>
            <div className='dropdown dropdown1 act' id='dropdown'>
                    <div>spotlight</div>
                    <div>Maps</div>
                    <div>Stories</div>
                </div>
            <div className="waffle-click act" id="waffle-click">
                <div className='crossBorder'>
                    <cross onMouseEnter={waffleClick} id="cross" className="cross">
                        {/* <h1 className='cross-icon'>×</h1> */}
                        <i ><img className='cross-icon' width="50px" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-27/cross-circle-1.png" alt="" /></i>
                    </cross>
                </div>
                <portionLeft className="portionLeft">
                    <div className='left'>
                        <h1>Snapchat</h1>
                        <ol>
                            <li>Snapchat</li>
                            <li>Lenses</li>
                            <li>Stories</li>
                            <li>Maps</li>
                            <li>Store</li>
                            <li>Originals</li>
                            <li>Accounts</li>
                        </ol>
                        <h1>Business</h1>
                        <h1>Pixy</h1>
                        <h1>Snap AR</h1>
                        <h1>Spectacles</h1>
                    </div>
                    <img src="https://images.ctfassets.net/kp51zybwznx4/4benfiTpduypvxiJALwxfh/f028dc70bfeb6c9d4d5ff13e0367c086/03-OYS_Snapchatcom_Thumb_1920x1371.png?fm=avif&q=70&w=1440" alt="" />
                </portionLeft>
            </div>
        </NavContainer>
    )
}
const Text=styled.text``
const DownButton=styled.button``
const LoginButton=styled.button``
const SnapLogo=styled.div` `
const WaffleIcon = styled.button``
const NavContainer=styled.div``

export default Nav;