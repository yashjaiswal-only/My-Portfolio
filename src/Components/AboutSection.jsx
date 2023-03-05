import React, { useState } from 'react'
import styled from 'styled-components'
import {mobile} from './mobile'
import codinggif from '../Image/codinggif.gif'
import codinggif2 from '../Image/codinggif2.gif'
const Container=styled.div`
    /* width: */
    /* margin-top:100vh; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding:80px;
    ${mobile({
        padding:'20px'
    })}
`

const Title=styled.span`
    font-size:60px;
    font-weight:600;
    color:white;
    >p{
        width:80%;
    }
    ${mobile({
        fontSize:'30px'
    })}
    
`
const Point=styled.div`
    display: flex;
    align-items: center;
    position: relative;
    flex-direction:${props=>props.no=='second'?'row-reverse':'row'};
    ${mobile({
        flexDirection:'column',
    })}
`
const Text=styled.div`
    width:50%;
    >p{
        font-size:1.2rem;
        color:rgb(209, 218, 250);
        color:white;
        ${mobile({
           fontSize:'0.8rem'
        })}
    }
    ${mobile({
        width:'100%'
    })}
`
const Show=styled.div`
    width:50%;
    /* background-color: white; */
    display: flex;
    justify-content: center;
    >img{
        width:60%;
    }
    ${mobile({
        width:'100%'
    })}
`
const TabTitle=styled.div`
    display: flex;
    /* margin:20px 0px 20px; */
    justify-content:space-around;
    align-items: center;
    width:100%;
    margin:2rem 0;
    ${mobile({
        margin:'20px 0px',
        width:'90%'
    })}
`
const TabLinks=styled.span`
    font-size:1.6rem;
    font-weight:500;
    width:25%;
    text-align:center;
    cursor:pointer;
    position:relative;
    background: radial-gradient(64.18% 64.18% at 71.16% 35.69%,#def9fa .89%,#bef3f5 17.23%,#9dedf0 42.04%,#7de7eb 55.12%,#5ce1e6 71.54%,#33bbcf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &::after{
        content:"";
        width:${props=>props.activeIdx===props.myIdx?"100%":"0%"};
        height:3px;
        background:#ababab;
        position: absolute;
        left:0;
        bottom:-2px;
        transition:0.8s;
    }
    
`
const TabContent=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding:0 1rem;
    width:30%;
    display:block;
    border-radius:10px;
    opacity:${props=>props.activeIdx==props.myIdx?1:0.6};
    color:${props=>props.activeIdx==props.myIdx?'black':'white'};
    font-weight:500;
    background: rgb(176,228,227);
    background: ${props=>props.activeIdx==props.myIdx?
        'linear-gradient(-168.39deg, rgba(176,228,227,1) 10%, rgba(20,48,54,1) 100%)':
        'linear-gradient(-168.39deg,#ffffff -278.56%,#6d6d6d -78.47%,#11101d 91.61%)'};
    /* background: ${props=>props.activeIdx==props.myIdx?
        'linear-gradient(-168.39deg, rgba(176,228,227,1) 0%, rgba(20,48,54,1) 100%)':
        'linear-gradient(-168.39deg,#ffffff -278.56%,#6d6d6d -78.47%,#11101d 91.61%)'}; */
    transform:scale(${props=>props.activeIdx==props.myIdx?1.1:1});
    transition : transform 1s ease;
    
`
const School=styled.div`
    /* background-color: gray; */
    /* width:80%; */
    font-size:1.1rem;
    margin:1rem 0;
`
const Year=styled.div`
    display: flex;
    flex-direction: column;
    font-size:0.8rem;
    margin:0.4rem 0;
`
const Item=styled.div`
    font-size:1rem;
    margin:1rem 0;
    >span{
        font-weight:600;
        color:#ababab;
    }
`
const Cards=styled.div`
    display: flex;
    justify-content: space-around;
`
const AboutSection = () => {
    const [index,setIndex]=useState('1');

  return (
    <Container id='about'>
    <Title>About Me</Title>
    <Point no={"first"}>
        <div  style={{height:'100%',width:'30%',position:'absolute',right:'0',background: 'linear-gradient(90deg,#f4c4f3 0%,#fc67fa 100%)',filter:'blur(250px)',zIndex:'0'}}/>
        <Text>

        <p>
        Thanks for your interest, here is a my quick story <br/>
        I am a Computer Science Student and an Aspiring Software Engineer from  Delhi. 
        I love to do Programming and learn algorithms which I generally prefer with C++ language . <br/>
        </p>
        </Text>
        <Show>
            <img src={codinggif}/>
        </Show>
    </Point>
    <Point no={'second'}>
    <div  style={{height:'100%',width:'40%',position:'absolute',top:'0',background: 'linear-gradient(180deg,rgba(188,165,255,0) 0%,#214d76 100%)',filter:'blur(120px)',zIndex:'0'}}/>
     
        <Text>

        <p>
        My Interests also includes Web Development which I personally enjoys a lot, UX Designing ,Branding and other creative stuffs ! <br/>
        Apart from technical things I also enjoy listening music and discovering different cultural art forms . 
        </p>
        </Text>
        <Show>
            <img src={codinggif2}/>
        </Show>
    </Point>

{/* 
    <TabTitle>
        <TabLinks myIdx="1" activeIdx={index} onClick={()=>setIndex('1')}>Graduation</TabLinks>
        <TabLinks myIdx="2" activeIdx={index} onClick={()=>setIndex('2')}>High School</TabLinks>
        <TabLinks myIdx="3" activeIdx={index} onClick={()=>setIndex('3')}>Secondary School</TabLinks>
    </TabTitle>
    <Cards>

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
    </Cards> */}

    </Container>
  )
}

export default AboutSection
