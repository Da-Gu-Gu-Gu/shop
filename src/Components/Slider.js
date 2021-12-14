
import React,{useState} from 'react'
import {  Button } from '@mui/material'
import { ArrowLeftOutlined,ArrowRightOutlined } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components'



const itemData = [
  {
    id: 1,
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "b6bbc1",
  },
  {
    id: 2,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
]

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex !important;
  flex-direction:row;
  position: relative;
  overflow: hidden;
  margin-top:56px;
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;

  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
 width:50%;
  margin:auto;
  align-items:center;
  justify-content:center;

  text-align:center;
  align-content:center;
`;

const Image = styled.img`
  height: 80%;
  justify-content:center;
  margin:0 auto;
  text-align:center;

`;

const InfoContainer = styled.div`
  width:50%;
  padding: 50px;

`;

const Title = styled.h1`
  font-size:2.7rem;
`;

const Des = styled.p`
  margin: 50px 0px;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 3px;
`;



const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
 

       return (
         
        
        <Container  className="slider">
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {itemData.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer   className="mobile">
                <Title className="title">{item.title}</Title>
                <Des className="des">{item.desc}</Des>
               <Button variant="text" startIcon={<ShoppingCartIcon/>} style={{color:'black',border:'1px solid black'}}>
                 Show Now
               </Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>

    )
}

export default Slider

