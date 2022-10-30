import styled from 'styled-components'
import "../css/slide3.css"
const Slide3 = (props)=>{
    function myfunction(){
        var elemnt=document.getElementById('inactive')
        var element=document.getElementById('active')
        elemnt.classList.toggle("active")
        element.classList.toggle("active")
        
    }
    return (
        <div className='Slide3'>
            <textContent3 className="textContent3">
                <h2>Have fun with your friends and family.</h2>
                <form action="">
                <select name="" id="">
                    <option value="">AU +61</option>
                    <option value="">IN +91</option>
                    <option value="">BR +55</option>
                    <option value="">MX +52</option>
                    <option value="">US +1</option>
                </select>
                <input type="tel" id="input"  onFocus={myfunction}  placeholder='Phone Number'></input>
                <tryNow>
                    <button >Find your Friends</button>
                </tryNow>
                </form>
                
                <div className='inactive hoverText' id='inactive'>By clicking Try Now, I acknowledge that I have read the <u><b>Privacy Policy</b></u> and agreed to <u><b>Terms of Services.</b></u></div>
                <div className='inactive hoverText hoverText-2' id='active'>Message and data rates may apply.</div>
            </textContent3>
            <videoCont className="videoCont">
                <video src="https://videos.ctfassets.net/adclj4ijug4e/1dfUF5QOnuKK0dMcEBTeOD/6853319d0be226d0c3a877af0f99818f/J0863_AppTitles_IntroToSnap_SnapAd_6s_375x667_072721_DESKTOP.mp4" autoPlay muted loop playsInline></video>
            </videoCont>
        </div>
    )
}
export default Slide3;