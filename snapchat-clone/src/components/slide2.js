import styled from 'styled-components'
import "../css/slide2.css"

const Slide2 = (props)=>{
    function myfunction(){
        var elemnt=document.getElementById('inactive')
        var element=document.getElementById('active')
        elemnt.classList.toggle("active")
        element.classList.toggle("active")
    }
    return (
        <div className='Slide2'>
            <div className="infiniteVideo">
                <video playsInline autoPlay loop muted>
                    <source src='https://videos.ctfassets.net/adclj4ijug4e/1HbHsu0is5rJNs4KLkYXRe/31cf8bd38511cef9fc197cf655e798ef/J0433_Lens_GradientTreatmentA_GENERIC_v06_10mb_BJP.mp4' type='video/mp4'></source>
                </video>
            </div>
            <div className='video-content'>
                <h2>Express yourself with millions of Lenses.</h2>
                <form action="">
                <select name="" id="">
                    <option value="">AU +61</option>
                    <option value="">IN +91</option>
                    <option value="">BR +55</option>
                    <option value="">MX +52</option>
                    <option value="">US +1</option>
                </select>
                <input type="tel" id="input" onFocus={myfunction}  placeholder='Phone Number'></input>
                <tryNow>
                    <button >Try Now</button>
                </tryNow>
                </form>
                
                <div className='inactive hoverText' id='inactive'>By clicking Try Now, I acknowledge that I have read the <u><b>Privacy Policy</b></u> and agreed to <u><b>Terms of Services.</b></u></div>
                <div className='inactive hoverText hoverText-2' id='active'>Message and data rates may apply.</div>
            </div>
            
        </div>
        
    )
    
};


// const TryNow = styled.button``
export default Slide2;