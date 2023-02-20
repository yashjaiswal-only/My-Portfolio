import React from 'react'
import {init} from 'ityped'
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'
// import Cover from '../Image/cover.jpg'
import {mobile} from './mobile'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../Image/logo3.png'
const Container=styled.div`
  width:100%;
  height:100vh;
  overflow:hidden;
  background-size:cover;
  z-index:0;
  ${mobile({
      // display:"none"

    })}
`
const Navbar=styled.div`
  margin:10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap:wrap;
  /* padding:10px 10px; */
  ${mobile({
    

    })}

`
const Close=styled.div`
  display:none;
  ${mobile({
    display:'block',
    position:'absolute',
    top:'25px',
    left:'25px',
  })}

`
const Menu=styled.div`
  display:none;
  ${mobile({
    display:'block'

  })}
`

const Logo=styled.span`
  font-size:2rem;
`
const List=styled.ul`
  display:flex;
  justify-content: space-around;
  list-style:none;
  transition:right 0.5s;
  height:90%;
  z-index:2;
  width:60%;
  ${mobile({
    background:"#ff004f",
    position:'fixed',
    top:'0',
    // right:'0',
    // right:`${props=>props.menuActive?0:-200}px`,
    // right:`${props=>props.right}+"px"`,
    width:'200px',
    height:'100vh',
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center'
  })}
  `
const ListItem=styled.li`
  text-shadow: -1px 1px 0 #000,
                          1px 1px 0 #000,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;
  margin:0px 20px;
  position: relative;
  cursor:pointer;
  font-size:1.6rem;
  height:100%;
  &::after{
    content:'';
    width:0%;
    height:3px;
    background:#ff004f;
    position:absolute;
    left:0;
    bottom:-6px;
    transition :0.5s;
  }
  &:hover::after{
    width:100%;
  }
  ${mobile({
    // margin:'50px',
    fontSize:'2rem'
  })}
`
const Wrapper=styled.div`
  width:50%;
  /* margin-right:4rem; */
  height:70vh;
  display: flex;align-items: center;
  flex-direction: column;
  align-items:left;
  justify-content: center;
  ${mobile({
    marginLeft:'2rem'
  })}
`
const Intro=styled.div`
  text-shadow: -1px 1px 0 #000,
                          1px 1px 0 #000,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;
 >h1{
    font-size:60px;
    margin:10px 0px;
  }
  >h2{
    font-size:35px;
  }
  >h3{
    font-size:30px;
    color:red;
  
    >.ityped-cursor{
      animation:blink 1s infinite;
    }
    @keyframes blink{
      50%{
        opacity:1;
      }
      100%{
        opacity:0;
      }
    }
  }
`
const Arrow=styled.div`
  margin:0 auto;
  height:20vh;
  text-align:center;
  animation: MoveUpDown 3s ease infinite;

  @keyframes MoveUpDown {
      0%, 100% {
        transform: translateY(-50px);
      }
      50% {
        transform: translateY(0px);
      }
    }
`
const Image=styled.img`
    width:20rem;
`
const Home = () => {
    const textRef=useRef();
    useEffect(()=>{
      init(textRef.current,{
        showCursor:true,
        backDelay:1000,
        backSpeed:100,
        strings:["Web Developer", "UI/UX Designer","Software Developer"]
      });
    },[])
    const [menuActive,setMenuActive]=useState(false);

    return (
    <Container id="home">
      <Navbar>
        <Logo><Image /></Logo>
        <List  
        style={{right:`${menuActive?0:-200}px`}}>
          <ListItem><a href="#home">Home</a></ListItem>
          <ListItem><a href="#about">About</a></ListItem>
          <ListItem><a href="#skills">Skills</a></ListItem>
          <ListItem><a href="#work">Portfolio</a></ListItem>
          <ListItem><a href="#contact">Contact</a></ListItem>
          <Close onClick={()=>setMenuActive(false)}><CloseIcon className='mobile' /></Close>
        </List>
        <Menu onClick={()=>setMenuActive(true)}><MenuIcon  className='mobile'/></Menu>
      </Navbar>
      <Wrapper>
        <Intro>

          <h2>Hii There , I'm</h2>
          <h1>Yash Jaiswal</h1>
          <h3>
            <span  ref={textRef}></span>
          </h3>
        </Intro>
      </Wrapper>

      <a href="#about"><Arrow><KeyboardArrowDownIcon sx={{color:'white',fontSize:'4rem'}}/></Arrow></a>
    </Container>
  )
}

export default Home
