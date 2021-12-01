
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

// const Container=styled.div`
//     width:100%;
//     height:100vh;
//     background-color:black;
//     display:flex;
//     position:relative;

    
// `



// const Arrow=styled.div`
//   width:50px;
//   height:50px;
//   background:white;
//   border-radius:50%;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   position:absolute;
//   top:0;
//   left:${props=>props.direction ==="left" && "10px"};
//   right:${props=>props.direction ==="right" && "10px"};
//   bottom:0;
//   margin:auto;
//   opacity:0.5;
//   cursor:pointer;
//   z-index:2;
// `
// const Wrapper=styled.div`
// width:100%;
// height:100%;
// border:1px solid blue;

// `
// const Slide=styled.div`
// display:flex;
// flex-direction:row;
// heigth:100vh;
// width:100%;
// align-items:center;
// justify-content:space-around;
// `


// const ImgContainer=styled.div`
// height:100%;
// border:1px soid green;
// width:50%;
// `
// const Image=styled.img`
//     height:80%'
// `
// const InfoContianer=styled.div`
//   width:50%;
//   border:1px solid red;
//     align-items:center;
// `
// const Title=styled.h1`
//   font-size:2rem;
//   color:white !important;
// `

// const Des=styled.p`
//   font-size:2rem;
//   color:white !important;
  
// `



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

{/* <Carousel autoplay>
        {itemData.map((item,index) => (
    
        <div key={index}   className="gwaysi" style={{justifyContent:'space-evenly',display:'flex',height:'75vh',alignItems:'center',borderRadius:'15px',backgroundColor:'pink'}}>
                  <First style={{width:'45%',alignSelf:'center'}}>
                    <center>
                         <img width="30%" height="30%"
                      src={item.img}  alt={item.title}
                      />
                      </center>
                  </First>
                  <Second style={{textAlign:'left',width:'50%'}}>
                      <h1 className="banner-h1">{item.title}</h1>
                      <h3 className="banner-h3">{item.price}</h3>
                      <Button className="banner-button" variant="outlined" sx={{color:"#123"}} startIcon={<ShoppingCartIcon/>}>
                          Shop Now
                      </Button>
                  </Second>
                  </div>

        ))} */}