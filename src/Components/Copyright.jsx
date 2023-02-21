import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    width:100%;
    text-align:center;
    padding:5px;
    background:#262626;
    font-weight:300;
    /* margin-top:20px; */
    >p{
      display: flex;
      align-items: center;
      width:100%;
      justify-content: center;
      >i{
        margin-left:0.4rem;
      }
    }
`
const Copyright = () => {
  return (
    <Container>
      <p>Copyright © Yash Jaiswal . Made with <i className="fa-solid fa-heart"></i></p>
    </Container>
  )
}

export default Copyright
