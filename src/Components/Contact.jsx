import React from 'react'
import styled from 'styled-components'
import {mobile} from './mobile'
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

// ${mobile({
const Container=styled.div`
    display: flex;
    justify-content: space-around;
    padding:80px;
    ${mobile({
      flexDirection:'column',
      padding:'30px'
    })}
    `
const Left=styled.div`
    flex-basis:35%;
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    >h1{
      font-size:2.6rem;
    }
    >div{
      display: flex;
      align-items: center;
      >p{
          margin:1rem;
          font-size:1.5rem;
      }
      
    }
`
// const SocialIcons=styled.div``
const Right=styled.div`
  flex-basis:60%;
    >form{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width:100%;
      >input,textarea{
        width:100%;
        margin:15px 0px;
        padding:15px;
        background-color: #262626;
        border:none;
        outline:none;
        color:white;
        font-size:18px;
        border-radius:6px;
      }
      >textarea{
        width:100%;
      }
    }
    `
const Submit=styled.button`
  cursor:pointer;
  background-color: red;
  width:30%;
  color:white;
  font-weight:600;
  font-size:1.5rem;
  padding:0.6rem 0;
  ${mobile({
      // flexDirection:'column',
      padding:'7px 20px'
    })}
  `
const Button=styled.button`
  cursor:pointer;
  margin:2rem 0rem;
  width:60%;  
  padding:1rem 0;
  background-color: red;
  color:white;
  font-weight:600;
  font-size:1.5rem;
  >a{

  }
`
const Contact = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwzbXuLxMm9zucxPq9QtboTLrionvPBCV5s7ZZGdW323thNF04nSjWe83WJY1FKNxw0_g/exec'
  const form = document.forms['submit-to-google-sheet']  
  const msg=document.getElementById('msg');
  const onsubmit=(e)=>{
      e.preventDefault();
      console.log(e);

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            msg.innerHTML="Messsge sent Successfully";
            setTimeout(()=>msg.innerHTML="",5000)
          })
          .catch(error => console.error('Error!', error.message))
    }

  return (
    <Container id="contact">
      <Left>
        <h1>Contact Me</h1>
        <div><TelegramIcon sx={{color:'red'}}/><p><a href='mailto:yashjaiswalonly@gmail.com'>yashjaiswalonly@gmail.com</a></p></div>
        <div><PhoneInTalkIcon sx={{color:'red'}}/><p><a href='tel:8130060493'>8130060493</a></p></div>
        {/* <SocialIcons>        </SocialIcons> */}
        <Button>
          <a target="_blank" href="https://drive.google.com/file/d/18drpXpbjTUCy9FOzWQFptdHANU5P89yM/view?usp=sharing" title="My Resume">Download CV</a>
        </Button>
      </Left>
      <Right>
        <form name='submit-to-google-sheet' onSubmit={onsubmit}>
            <input type='text' name ="Name" placeholder="Your Name" required />
            <input type='email' name ="email" placeholder="Your Email" required />
            <textarea name="Message" rows="6" placeholder='Your Message'/>
            
        <Submit>Submit</Submit>
        </form>
        <span></span>
      </Right>
    </Container>
  )
}

export default Contact;
