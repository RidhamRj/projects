import styled from 'styled-components'
import "../css/hero.css"
// import "../css/nav.css"
const Hero = (props)=>{
    return (
        <heroContainer className="heroContainer">
            <textContainer className="textContainer">
                <h1> Snapchat is  now on the web!</h1>
                <h3>Chat, Snap, and video call your friends from wherever you are.</h3>
                <LoginButton className='LoginButton'>
                    <laptopIcon className="lapIcon"><img src="https://images.ctfassets.net/adclj4ijug4e/2mdwMtA6MPyOcs52zq4Zws/b1ff63bd0cced29d5544cde242ade9d5/Laptop_icon.svg" alt="" /></laptopIcon>
                    <text className='text'> Login to Chat</text>
                </LoginButton>
                <arrow>
                <div className='arrow-up'>
                    <img width="15px" src="https://www.svgrepo.com/show/93813/up-arrow.svg" alt="" />
                </div>
                </arrow>
            </textContainer> 
            
            <imgContainer className="imgContainer">
                <img  src="https://images.ctfassets.net/adclj4ijug4e/1OLjjom9uwOP1QlUIjAYtP/2238a3cd65d8206fafc1a71c3d55c51a/snapchat-web-laptop.png?fm=avif&h=600" alt="" />
            </imgContainer>
            
        </heroContainer>
    )
}
const LoginButton=styled.button``
export default Hero;