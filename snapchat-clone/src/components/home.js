import styled from 'styled-components'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import "../css/home.css"
import Nav from './nav'
import Hero from './hero'
import Slide2 from './slide2';
import Slide3 from './slide3';
import Slide4 from './slide4';
import Slide5 from './slide5';
const Home = ()=>{
    
    return (
        <div className='home'>
    <Nav/>
    <Hero/>
    <Slide2/>
    <Slide3/>
    <Slide4/>
    <Slide5/>
        </div>
    
    
        
    )

}
const hi  =styled.div``
export default Home;