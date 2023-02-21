import React from 'react'
import styled from 'styled-components'
import fashify from '../Image/fashify f.png'
import inotebook from '../Image/inotebook f.png'
import hoobank from '../Image/hoobank f.png'
import ProjectImg from './ProjectImg'
import Github from './Github'
import { mobile } from './mobile'
const Container=styled.div`
    padding:80px;
    ${mobile({
        padding:'20px'
    })}
`
const Title=styled.h1`
    font-size:4rem;
    ${mobile({
        fontSize:'30px'
    })}
`
const Project=styled.div`
    width:100%;
    /* background-color: red; */
    /* height:50vh; */
    margin:2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:white;
    color:${props=>props.theme?props.theme:'white'};
    ${mobile({
        flexDirection:'column-reverse',

    })}
`
const Image=styled.div`
    width:50%;
    height:50vh;
    /* background-color: #fff; */
    ${mobile({
       width:'90%',
       height:'30vh'
    })}
`
const Content=styled.div`
    width:45%;
    display: flex;
    flex-direction: column;
    height:80%;
    ${mobile({
       width:'90%',
       marginTop:'1rem'
    })}
`

const Name=styled.div`
    width:60%;
    font-size:2rem;
    font-weight:600;
    ${mobile({
       width:'100%',
       fontSize:'1.5rem'
    })}
`
const Description=styled.ul`
    margin:1rem 0;
    font-size:1.1rem;
    color:white;
    ${mobile({
       width:'100%',
       fontSize:'1rem'
    })}
`
const ListItem=styled.li``
const Buttons=styled.div`
    display: flex;
    ${mobile({
       justifyContent:'space-between'
    })}
`
const SeeLive=styled.button`
    padding:0.2rem 0.6rem;
    width:25%;
    font-size:1.2rem;
    font-weight:600;
    background-color: inherit;
    color:inherit;
    border:0.2rem solid;
    border-color:${props=>props.theme?props.theme:'white'};
    outline:none;
    cursor:pointer;
    ${mobile({
       width:'40%',
    //    fontSize:'1rem',
       padding:'0'
    })}
`
const Code=styled.button`
    padding:0.6rem 1rem;
    width:30%;
    margin :0 0.6rem;
    font-size:1.2rem;
    font-weight:600;
    background-color: inherit;
    color:inherit;
    cursor:pointer;
`
const View =styled.div`
    max-width:100%; 
    ${mobile({
       display:'none'
    })}
`
const ViewMobile =styled.div`
    max-width:100%; 
    margin-top:2rem;
    display:none;
    ${mobile({
       display:'flex',
       alignItem:'center',
       justifyContent:'center'
    })}
    >a{
        >i{
            font-size:1.5rem;
            margin:0 1rem;
        }
    }
`
const Hr=styled.hr`
    border: 1px solid ;
    border-color:${props=>props.theme?props.theme:'white'};
    width:100%;
`
const Work = () => {
  return (
    <Container id="work" >
      <Title>My Work</Title>

      <Project theme={'#f1e564'}>
        <Content>
            <Name>Fashify Shop</Name>
            <Description>
                <ListItem>
                It is an full fledged working ecommerce website made using ReactJs.
                It takes details of all the products by seller and displays it to get purchased . 
                </ListItem>
                <ListItem>
                Details of Products and users are stored in Mongodb Atlas , which is fetch using backend made using Nodejs .
                </ListItem>
                <ListItem>
            It has authentication factor by jwt , also has features like your wishlist , your cart , your orders and profile    update.
                </ListItem>
            </Description>
            <Buttons>
                <SeeLive theme={'#f1e564'}><a target="blank" href='https://fashify-client.netlify.app/'>See Live</a></SeeLive>
                <Code ><a target="blank" href='https://github.com/yashjaiswal-only/Fashify_client'>Source Code</a></Code>
            </Buttons>
        </Content>
        <Image>
        <ProjectImg image={fashify} theme={'#f1e564'}/>
        </Image>
      </Project>
        <Hr theme={'#f1e564'}/>
      <Project theme='#42d0b1'>
        <Content>
            <Name>Modern Banking app-UI/UX Design</Name>
            <Description>
                <ListItem>
                This is UI/UX design made for a modern banking app for their banking solutions .
                </ListItem>
                <ListItem>
                This is build using React.Js using Vite which is a tool that's able to process your development build faster than Webpack.
                </ListItem>
                </Description>
            <Buttons>
                <SeeLive theme={'#42d0b1'}><a target="blank" href='https://banking-app-design.netlify.app/'>See Live</a></SeeLive>
                <Code><a target="blank" href='https://github.com/yashjaiswal-only/Modern-Banking-app--UI-UX-design'>Source Code</a></Code>
            </Buttons>
        </Content>
        <Image>
        <ProjectImg theme={'#42d0b1'} image={hoobank}/>
        </Image>
      </Project>
        <Hr theme='#42d0b1'/>
      <Project theme='#7edcff'>
        <Content>
            <Name>iNotebook</Name>
            <Description>
                <ListItem>
                This is a cloud notebook service , performs authentication and privacy of your notes made using MERN tech stack.
                </ListItem>
                <ListItem>
                iNotebook provides users a secured platform where they can make their notes and do operations on them. It takes user authentication to display user's notes . 
                </ListItem>
                <ListItem>
                They can create any amount of notes which are only accessible by user only Registration , Authentication and CRUD operations on notes are main features of iNotebook
                </ListItem>
            </Description>
            <Buttons>
                <SeeLive theme={'#7edcff'} ><a target="blank" href="https://your-inotebook.netlify.app/">See Live</a></SeeLive>
                <Code ><a target="blank" href='https://github.com/yashjaiswal-only/iNotebook_Client'>Source Code</a></Code>
            </Buttons>
        </Content>
        <Image>
        <ProjectImg theme={'#7edcff'} image={inotebook}/>
        </Image>
      </Project>
      <Hr theme='#7edcff'/>

    <View><Github/></View>
    <ViewMobile>
        <h4 >Want to see all projects?</h4>
        <a target="_blank" href="https://github.com/yashjaiswal-only"><i className="fa-brands fa-github" /></a>
    </ViewMobile>
    </Container>
  )
}

export default Work
