import React, { useState } from 'react'
import styled from 'styled-components'
import pl from '../Image/pl.jpg'
import db from '../Image/db.jpg'
import web from '../Image/web.jpg'
import { Tooltip } from '@mui/material'
import { mobile } from './mobile'
const Container=styled.div`
    padding: 0 80px ;
    ${mobile({
        padding:'20px'
    })}
`
const Wrapper=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:20px 0;
    ${mobile({
        flexDirection:'column'
    })}
`
const Title=styled.h1`
    font-size:4rem;
    margin:2rem 0 ;
    ${mobile({
        fontSize:'30px'
    })}
`
const Skill=styled.div`
    background-color: white;
    width:30%;
    height:60vh;
    border-radius:10px;
    position:relative;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition:transform 0.5s;
    cursor:pointer;
    &:hover{
        transform:scale(1.2);
    }
    ${mobile({
       width:'90%',
       height:'50vh',
       margin:'2rem 0'
    })}
`
const Span=styled.span`
    z-index:3;
    display:${props=>(props.id===props.hov)?'none':'block'};
    font-size:2rem;
    font-weight:600;
    text-shadow: -1px 1px 0 #000,
                          1px 1px 0 #000,
                         1px -1px 0 #000,
                        -1px -1px 0 #000;
    text-align:center;
    /* color:black; */
`
const Image=styled.img`
    width:100%;
    height:100%;
    border-radius:10px;
    transform:scale(${props=>(props.id===props.hov)?'1.1':1});
    transition:transform 0.5s;
    position:absolute;
    top:0;
    left:0;
`
const Layer=styled.div`
    position:absolute;
    width:100%;
    height:${props=>(props.id===props.hov)?'100%':'0'};
    /* height:100%; */
    background:linear-gradient(rgba(0,0,0,0.6),#ff004f);
    left:0;
    bottom:0;
    overflow:hidden;
    transition:height 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    `
const List=styled.div`
    display: flex;
    width:100%;
    height:100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    
`
const ListItems=styled.div`
    font-size:1.2rem;
    font-weight:600;
    text-align:center;
    /* background-color: black; */
    width:90%;
    padding:0.5rem 0rem;
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    >span{
        display:block!important;
        font-size:1rem;
        color:white;
        font-weight:400;
    }
    &:hover{
        background-color: rgba(0,0,0,0.4);
        cursor:pointer;
    }
`
const Icon=styled.img`
    width:15%;
    margin-right:0.8rem;
`
const Skills = () => {
    const [hov,setHov]=useState(0);
  return (
    <Container id="skills">
      <Title>My Skills</Title>
      <Wrapper>
        <Skill onMouseOver={()=>setHov(1)} onMouseOut={()=>setHov(0)}>
            <Image id={1} hov={hov} src={pl}/>
            <Span id={1} hov={hov} >Programming</Span>
            <Layer id={1} hov={hov}>
                <List>
                    <Tooltip 
                    title={<span style={{color:'white',width:'100%'}}>Solved 600+ Questions on Various Platforms</span> }
                   >
                    <ListItems>
                        <Icon src="https://img.icons8.com/color/512/c-plus-plus-logo.png" alt='here'/>
                    C/C++
                    </ListItems>
                    </Tooltip>
                    
                    <ListItems><Icon src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-python-an-interpreted-high-level-general-purpose-programming-language-logo-color-tal-revivo.png" alt='here'/>Python</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/color/512/javascript.png" alt='here'/>Javascript</ListItems>
                </List>
            </Layer>
        </Skill>
        <Skill onMouseOver={()=>setHov(2)} onMouseOut={()=>setHov(0)}>
            <Image id={2} hov={hov} src={web}/>
            <Span  id={2} hov={hov} >Web</Span>
            <Span  id={2} hov={hov} >Development</Span>
            <Layer id={2} hov={hov}>
                <List>
                    <ListItems><Icon src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-html-web-development-flaticons-lineal-color-flat-icons.png"/>HTML</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/nolan/512/css-filetype.png"/>CSS</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/plasticine/512/react.png"/>ReactJs</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/color/512/nodejs.png"/>NodeJs</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/color/512/nextjs.png"/>NextJs</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/external-ddara-flat-ddara/512/external-api-fintech-ddara-flat-ddara.png"/>API</ListItems>
                    
                </List>
                <List>
                    <ListItems><Icon src="https://img.icons8.com/color/512/firebase.png"/>Firebase</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/color/512/material-ui.png"/>Material UI</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/color/512/bootstrap.png"/>Bootstrap</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/color/2x/tailwindcss.png"/>Tailwind</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/color/2x/git.png"/>Git</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/ios-filled/2x/linux.png"/>Linux</ListItems>
                </List>
            </Layer>
        </Skill>
        <Skill onMouseOver={()=>setHov(3)} onMouseOut={()=>setHov(0)}>
            <Image id={3} hov={hov} src={db}/>
            <Span  id={3} hov={hov} >Database</Span>
            <Layer id={3} hov={hov}>
            <List>
                    <ListItems><Icon src="https://img.icons8.com/color-glass/512/sql.png"/>SQL</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/color/512/mongodb.png"/>MongoDb</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/color/2x/my-sql.png"/>My SQL</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/color/2x/amazon-web-services.png"/>AWS</ListItems>
                    <ListItems><Icon src="https://img.icons8.com/color/2x/azure-1.png"/>Azure</ListItems>
                </List>
            </Layer>
        </Skill>
      </Wrapper>
    </Container>
  )
}

export default Skills
