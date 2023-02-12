import React from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Container=styled.div`
    width:100%;
    text-align:center;
    padding:25px;
    background:#262626;
    font-weight:300;
    margin-top:20px;
    >p{
      display: flex;
      align-items: center;
      width:100%;
      justify-content: center;
    }
`
const Copyright = () => {
  return (
    <Container>
      <p>Copyright © Yash Jaiswal . Made with <FavoriteIcon/></p>
    </Container>
  )
}

export default Copyright
