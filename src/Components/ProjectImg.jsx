import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
`
const Wrapper=styled.div`
    width: 100%;
    height: 100%;
    overflow:scroll;
    overflow-x:hidden;
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
const ProjectImg = ({image,theme}) => {
  return (
    <Container>
      <Wrapper theme={theme}>
        <Image src={image}/>
      </Wrapper>
    </Container>
  )
}

export default ProjectImg