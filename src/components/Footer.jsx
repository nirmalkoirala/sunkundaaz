import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
font-weight: 600;
color: #00a800;
`;
const Desc = styled.p`
  margin: 20px 0px;

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
    font-weight: 500;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  @media screen and (max-width: 425px) {
    background-color:  #fff8f8;
  }
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SUKUNDAAZ</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          veritatis incidunt quae deserunt eligendi? Totam laborum sed velit
          dolore saepe?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem><Room style={{marginRight:"10px"}}/>
              113 Holborow Avenue, Denman Prospect
            </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>
              0406 789 009
            </ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>
              info@sukundaaz.com.au
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
