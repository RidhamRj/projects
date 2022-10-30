import styled from 'styled-components'
import "../css/slide5.css"
const Slide5 = (props)=>{
    function myfunction(){
        var elemnt=document.getElementById('inactive')
        var element=document.getElementById('active')
        elemnt.classList.toggle("active")
        element.classList.toggle("active")
    }
    return (
        <div className='Slide5'>
            <textContent3 className="textContent3">
                <h2>Learn about the world on your most personal map.</h2>
                <form action="">
                <select name="" id="">
                    <option value="">AU +61</option>
                    <option value="">IN +91</option>
                    <option value="">BR +55</option>
                    <option value="">MX +52</option>
                    <option value="">US +1</option>
                </select>
                {/* <hi>hi</hi> */}
                <input type="tel" id="input"  onFocus={myfunction}  placeholder='Phone Number'></input>
                <tryNow>
                    <button >Explore Your Map</button>
                </tryNow>
                </form>
                
                <div className='inactive hoverText' id='inactive'>By clicking Try Now, I acknowledge that I have read the <u><b>Privacy Policy</b></u> and agreed to <u><b>Terms of Services.</b></u></div>
                <div className='inactive hoverText hoverText-2' id='active'>Message and data rates may apply.</div>
            </textContent3>
            <videoCont className="videoCont">
                <video src="https://videos.ctfassets.net/adclj4ijug4e/2i2amXQjhbrtpbldae6hwy/fc4d86a18bf233a667ff0c54f354437f/maps_video.mp4" autoPlay muted loop playsInline></video>
            </videoCont>
        </div>
    )
}
export default Slide5;