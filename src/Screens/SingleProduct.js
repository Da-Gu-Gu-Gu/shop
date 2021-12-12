import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import React,{useState} from "react";
import { useLocation } from 'react-router-dom'
import { addProduct } from "../Components/redux/cartRedux";
import {useDispatch} from 'react-redux'
import { v4 as uuid_v4 } from "uuid";



const Container = styled.div`
    margin-top:56px;
    height:100vh;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const SingleProduct = (props) => {
  const location = useLocation()
  const { data } = location.state

  let [quantity,setQuantity]=useState(1)
  let [size,setSize]=useState('')

  const add=()=>{
    setQuantity(quantity+1)
  }
  const reduce=()=>{

    quantity<=1?setQuantity(1):setQuantity(quantity-1)
    
  }

  const dispatch=useDispatch()
const handleClick=()=>{
  // let key=data._id
  let key=uuid_v4()
  dispatch(addProduct({'data':[data,quantity,key],price:data.price,key}))
}

  return (
    <Container>
 
      <Wrapper className="pWrapper">
        <ImgContainer>
          <Image className="pimage" src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer className="pinfo">
          <Title>{data.title.toUpperCase()}</Title>
          <Desc>
          {data.des}
          </Desc>
          <Price>$ {data.price}</Price>
          <FilterContainer className="pfilter">
            <Filter>
              <FilterTitle>Color</FilterTitle>
             
              <FilterColor color={data.color} />
             
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setSize(e.target.value)}>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer className="paddtocart">
            <AmountContainer>
              <Remove onClick={()=>reduce()} />
              <Amount>{quantity}</Amount>
              <Add  onClick={()=>add()} />
            </AmountContainer>
            <Button onClick={()=>handleClick()}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

    </Container>
  );
};

export default SingleProduct;