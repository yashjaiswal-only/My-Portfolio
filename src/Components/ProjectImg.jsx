import React, { useState } from 'react'
import styled from 'styled-components'
const Container=styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
`
const Wrapper=styled.div`
    width: 100%;
    height: max-content;
    max-height:100%;
    overflow:scroll;
    overflow-x:hidden;
    position: relative;
    &::-webkit-scrollbar {
      width: 0.4rem;               /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-track {
      /* background: outset;        color of the tracking area */
      background-color:${props=>props.theme?props.theme:'white'};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 50px;       /* roundness of the scroll thumb */
    background-color: #66e6ec;      
    border: 1px solid white;  /* creates padding around scroll thumb */
    }
`
const Image=styled.img`
    width:100%;
`
const Finger=styled.div`
  position: absolute;
  top:50%;
  right:10%;
  >img{
    width:70px;

  }
`
const ProjectImg = ({image,theme}) => {
  const [hand,setHand]=useState(true);
  return (
    <Container>
      <Wrapper theme={theme} onScroll={()=>setHand(false)}>
        {hand && <Finger><img src='https://cliply.co/wp-content/uploads/2021/07/392107350_SWIPE_UP_400px.gif'/></Finger>}
        <Image src={image}/>
      </Wrapper>
    </Container>
  )
}

export default ProjectImg