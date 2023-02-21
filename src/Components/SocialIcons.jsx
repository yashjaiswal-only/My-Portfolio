import React from 'react'
import styled from 'styled-components'
import { mobile } from './mobile'
const Container = styled.div`
  background-color:#000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap:wrap;
  margin-bottom:1rem;
  >a{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration:none;
    background-color: #e3edf7;
    background-color: inherit;
    height: 50px;
    width: 50px;
    margin:10px 15px;
    box-shadow:6px 6px 10px -1px rgba(175,18,18,0.3) ,-6px -6px 10px -1px rgba(255,255,255,0.1);
    transition:transform 0.5s;
    border-radius:10px;
    border:1px solid pink;
    ${mobile({
      height:'20px',
      width:'20px',
      borderRadius:'2px'
    })}
    >i{
      color:#777;
      font-size:30px;
      transition:transform 0.5s;
      ${mobile({
        fontSize:'15px',
      })}
    }
    &:hover{
      box-shadow:inset 4px 4px 6px -1px rgba(175,18,18,0.5),
                  inset -4px -4px 6px -1px rgba(255,255,255,0.5),
                  -0.5px -0.5px 0px rgba(255,255,255,1),
                  0.5px 0.5px 0px rgba(0,0,0,0.15),
                  0px 12px 10px -10px rgba(0,0,0,0.05);
      transform:translateY(2px);
      border:none;
      >i{
        transform:scale(0.9)
      }
      .fa-facebook{
        color:#3b5998;
      }
      .fa-linkedin{
        color:#3b5998;
      }
      .fa-whatsapp{
        color:#4fce5d;
      }
      .fa-twitter{
        color:#00acee;
      }
      .fa-instagram{
        color:#f14843;
      }
      .fa-github{
        color:#fff;
      }
    }
  }
`
const SocialIcons = () => {
  return (
    <Container>
      <a target='_blank' href='https://www.facebook.com/profile.php?id=100008896173494'><i className='fab fa-facebook'/></a>
      <a target='_blank' href='https://mobile.twitter.com/yashjaiswalonly'><i className='fab fa-twitter'/></a>
      <a target='_blank' href='https://www.instagram.com/yashjaiswal_only/'><i className='fab fa-instagram'/></a>
      <a target='_blank' href="http://wa.me/918130060493?text=hii%20yash"><i className='fab fa-whatsapp'/></a>
      {/* <a target='_blank' href='https://api.whatsapp.com/send/?phone=918130060493&text=hii%20yash&type=phone_number&app_absent=0'><i className='fab fa-whatsapp'/></a> */}
      <a target='_blank' href='https://www.linkedin.com/in/yash-jaiswal-0391691b9/'><i className='fab fa-linkedin'/></a>
      <a target='_blank' href='https://github.com/yashjaiswal-only'><i className='fab fa-github'/></a>
    </Container>
  )
}

export default SocialIcons
