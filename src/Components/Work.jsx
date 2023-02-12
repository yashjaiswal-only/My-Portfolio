import React from 'react'
import styled from 'styled-components'
import fashify from '../Image/fashify ss.png'
import inotebook from '../Image/inotebook.png'
const Container=styled.div`
    padding:80px;
`
const Title=styled.h1`
    font-size:4rem;
`
const Project=styled.div`
    width:100%;
    /* background-color: red; */
    /* height:50vh; */
    margin:2rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Image=styled.img`
    width:40%;
    height:80%;
`
const Content=styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    
    /* background-color: red; */
    height:80%;
`
const Name=styled.div`
    width:60%;
    font-size:2rem;
    font-weight:600;
    color:#42d0b1;
    text-shadow: 0 0 5px #000, 0 0 25px #000, 0 0 5px #0073e6, 0 0 5px #0073e6, 0 0 5px #0073e6, 0 0 15px #0073e6, 0 0 25px #0073e6;
`
const Description=styled.div`
    margin:1rem 0;
    font-size:1.4rem;
    color:rgb(209,218,250);

`
const Buttons=styled.div`
    display: flex;
`
const SeeLive=styled.button`
    padding:0.6rem 0.8rem;
    width:25%;
    font-size:1.3rem;
    font-weight:600;
    background-color: inherit;
    color:#42d0b1;
    text-shadow: 0 0 5px #000, 0 0 10px #000, 0 0 5px #0073e6, 0 0 5px #0073e6, 0 0 5px #0073e6, 0 0 15px #0073e6, 0 0 25px #0073e6;
    /* text-shadow: 1px 4px 2px rgba(30, 128, 25, 0.83); */
    /* text-shadow: 3px 3px 2px rgba(128, 71, 127, 1); */
    border:0.2rem solid #42d0b1;
    cursor:pointer;
`
const Code=styled.button`
    padding:0.6rem 1rem;
    width:30%;
    margin :0 0.6rem;
    font-size:1.3rem;
    font-weight:600;
    background-color: inherit;
    color:#42d0b1;
    cursor:pointer;
`
const Work = () => {
  return (
    <Container id="work" >
      <Title>My Work</Title>
      <Project>
        <Content>
            <Name>Fashify Shop</Name>
            <Description>It is an full fledged working ecommerce website made using ReactJs.
            It takes details of all the products by seller and displays it to get purchased . Details of Products and users are stored in Mongodb Atlas , which is fetch using backend made using Nodejs .
            It has authentication factor by jwt , also has features like your wishlist , your cart , your orders and profile update.</Description>
            <Buttons>
                <SeeLive><a href='https://fashify-client.netlify.app/'>See Live</a></SeeLive>
                <Code><a href='https://github.com/yashjaiswal-only/Fashify_client'>Source Code</a></Code>
            </Buttons>
        </Content>
        <Image src={fashify}/>
      </Project>
      <Project>
        <Content>
            <Name>iNotebook</Name>
            <Description>This is a cloud notebook service , performs authentication and privacy of your notes made using MERN tech stack.
            iNotebook provides users a secured platform where they can make their notes and do operations on them.
            It takes user authentication to display user's notes . They can create any amount of notes which are only accessible by user only
            Registration , Authentication and CRUD operations on notes are main features of iNotebook</Description>
            <Buttons>
                <SeeLive ><a href="https://your-inotebook.netlify.app/">See Live</a></SeeLive>
                <Code><a href='https://github.com/yashjaiswal-only/iNotebook_Client'>Source Code</a></Code>
            </Buttons>
        </Content>
        <Image src={inotebook}/>
      </Project>
    </Container>
  )
}

export default Work
