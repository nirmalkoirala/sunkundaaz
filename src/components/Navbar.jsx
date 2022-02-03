import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1 1100px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1783px) {
    flex: 1 1005px;
  }

  @media screen and (max-width: 1683px) {
    flex: 1 800px;
  }

  @media screen and (max-width: 1483px) {
    flex: 1 600px;
  }

  @media screen and (max-width: 1283px) {
    flex: 1 400px;
  }
  
  @media screen and (max-width: 1185px) {
    flex: 1;
  }
`;
// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none"})}
// `;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const Searchh = styled.div`
  color: "gray";
  width: "110px";
  font-size: 25px;
  cursor: "pointer";
`

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px"})}

  @media screen and (max-width: 1683px) {
    flex: 1 800px;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 600;
  color: #00a800;
  padding: 5px;
  ${mobile({ fontSize: "16px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ justifyContent: "center", flex: "2", marginRight: "20px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "12px" })}
`;



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>SUKUNDAAZ</Logo>
        </Left>
        <Center>
        {/* <Language>EN</Language> */}
          <SearchContainer>
            <Input placeholder="Search"/>
            <Searchh><Search /></Searchh>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem><Link to="/register">REGISTER</Link></MenuItem>
          <MenuItem><Link to="/signin">SIGN IN</Link></MenuItem>
          <MenuItem>
            <Badge color="secondary" badgeContent={100}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
