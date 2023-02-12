import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import {mobile} from './mobile'
import green from '../Image/green.jpg'
const Container=styled.div`
    /* width: */
    /* margin-top:100vh; */
    display: flex;
    justify-content: space-between;
    padding:80px;
    color:#ababab;   
    /* background-color: #fff; */

    ${mobile({
      // display:"none"
        flexDirection:'column',
        padding:'40px'
    })}
`
const Left=styled.div`
    flex-basis:35%;
`

const Right=styled.div`
    flex-basis:60%;
    /* background-color: red; */
    justify-content:space-between;
    >p{
        font-size:1.2rem;
        color:rgb(209, 218, 250);
        color:white;
    }
`
const Image=styled.img`
    width:100%;
    height:400px;

    border-radius:35px;
    ${mobile({
        marginBottom:'3rem' 
    })}
`
const Title=styled.h1`
    font-size:60px;
    font-weight:600;
    color:white;
    text-shadow: -1px 1px 0 #000,
                          1px 1px 0 #000,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;
    >p{
        width:80%;
    }
    ${mobile({
        fontSize:'30px'
    })}
    
`
const TabTitle=styled.div`
    display: flex;
    margin:20px 0px 20px;
    justify-content:space-between;
    align-items: center;
    width:100%;
    color:#a5f0c7;
    ${mobile({
        margin:'20px 0px',
        width:'90%'
    })}
`
const TabLinks=styled.span`
    /* margin-right:50px; */
    font-size:1.6rem;
    font-weight:500;
    cursor:pointer;
    position:relative;
    &::after{
        content:"";
        width:${props=>props.activeIdx===props.myIdx?"100%":"0"};
        height:3px;
        background:#ff004f;
        position: absolute;
        left:0;
        bottom:-8px;
        transition:0.5s;
    }
    
`
const TabContent=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* width:90%; */
    /* aspect-ration:3/2; */
    color:rgb(209,218,250);
    
    display:${props=>props.activeIdx==props.myIdx?"block":"none"};

`
const School=styled.div`
    /* background-color: gray; */
    width:80%;
    font-size:1.4rem;
    margin:1rem 0;
`
const Year=styled.div`
    display: flex;
    justify-content: space-between;
    font-size:1rem;
    margin:0.4rem 0;
`
const Item=styled.div`
    font-size:1.2rem;
    margin:1rem 0;
    >span{
        font-weight:600;
        color:#c8b0ff;
    }
`
const About = () => {
    const [index,setIndex]=useState('1');
  return (
    <Container id="about" >
        <Left>
            <Image src={green}/>
        </Left>
        <Right>
            <Title>About Me</Title>
            <p>
            Thanks for your interest, here is a my quick story <br/>
            I am a Computer Science Student and an Aspiring Software Engineer from  Delhi. 
            I love to do Programming and learn algorithms which I generally prefer with C++ language . <br/>
            My Interests also includes Web Development which I personally enjoys a lot, UX Designing ,Branding and other creative stuffs ! <br/>
            Apart from technical things I also enjoy listening music and discovering different cultural art forms . 
            </p>

            <TabTitle>
                <TabLinks myIdx="1" activeIdx={index} onClick={()=>setIndex('1')}>Graduation</TabLinks>
                <TabLinks myIdx="2" activeIdx={index} onClick={()=>setIndex('2')}>High School</TabLinks>
                <TabLinks myIdx="3" activeIdx={index} onClick={()=>setIndex('3')}>Secondary School</TabLinks>
            </TabTitle>

            <TabContent myIdx="1" activeIdx={index}>
                <School>
                    Netaji Subhas University of Technology
                    <Year><span>Dwarka, Delhi</span> <span>2020-2024</span></Year>
                </School>
                <Item><span>CGPA :</span> 7.52</Item>
            </TabContent>
            <TabContent myIdx="2" activeIdx={index}>
                <School>
                DR. Rajendra Prasad Senior Secondary School
                <Year><span> President Estate, New Delhi</span><span>2017-2019</span></Year>
                </School>
                 <Item><span>Score : </span>86.2</Item>
                <Item><span>Board : </span>CBSE</Item>
                
            </TabContent>
            <TabContent myIdx="3" activeIdx={index}>
            <School>
                 Arunodaya Public School 
                <Year><span>Karkardooma, Delhi</span><span>2012-2017</span></Year>
                </School>
                <Item><span>CGPA : </span>9.2</Item>
                <Item><span>Board : </span>CBSE</Item>
            </TabContent>
        </Right>
    </Container>
  )
}

export default About
