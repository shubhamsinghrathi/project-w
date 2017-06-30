import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Layout from "../components/Layout";
import InnerContainer from "../components/InnerContainer";

const LittleIntroWrapper = styled.div`
  margin-top:100px;
  display:flex;
  flex-wrap:wrap;
  @media (max-width: 800px) {
    flex-direction:column-reverse;
  }
`;
const LittleIntroText = styled.div`
  flex:1;
  @media (min-width: 801px) {
    flex-grow:0;
  }
  flex-basis:70%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  color:#333333;
  font-size:34px;
  font-weight:bold;
  margin-top:50px;
  & h1{
    line-height:1.34em;
    font-size:34px;
    position:relative;
    @media (max-width: 800px) {
      text-align: justify;
    }
    &:after{
      content: '';
      display: block;
      margin-top: 50px;
      width: 45px;
      height: 4px;
      background: #ed1165;
    }
  }
`;
const IntroContainer = styled.div`
  margin-top:20px;
  display:flex;
  flex-wrap:wrap;
  position: relative;
  padding:10px 0;
  &:before{
    content: '';
    background-image: url(/static/img/bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1;
    @media (min-width: 801px) {
      clip-path: polygon(0% 0%,100% 15%,100% 100%,0% 100%);
    }
  }
`;
const IntroWrapper = styled.div`
  margin-top:20px;
  display:flex;
  flex-wrap:wrap;
`;
const IntroImg = styled.div`
  flex:1;
  flex-basis:28%;
  width:28%;
  padding-right:4%;
  margin-top:50px;
  & img{
    width:100%;
  }
  @media (max-width: 800px) {
    display:none;
  }
`;
const IntroText = styled.div`
  flex:1;
  flex-basis:68%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  color:#fff;
  font-size:16px;
  font-weight:bold;
  margin-top:50px;
  text-align:justify;
  & p{
    line-height:1.6em;
    font-size:16px;
    margin:0;
    @media (max-width: 800px) {
      text-align: justify;
      font-size:16px;
    }
  }
`;
const OurServices = styled.div`
  margin-top:10px;
  padding:40px 0;
  background:#fff;
`;
const OurServicesHeading = styled.div`
  position:relative;
  color:#333;
  font-weight:bold;
  font-size:22px;
  &:after{
    content: '';
    display: block;
    margin-top: 30px;
    width: 45px;
    height: 4px;
    background: #ed1165;
  }
`;
const ServicesBlocksWrapper = styled.div`
  margin-top:50px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
`;
const ServiceBlock = styled.div`
  flex:1;
  flex-grow:0;
  flex-basis:350px;
  padding:15px 5px;
  display:flex;
  flex-wrap:wrap;
  transition:all 0.2s 0s;
  & a{
    text-decoration:none;
  }
  &:hover{
    box-shadow:0 0 6px #999;
  }
`;
const ServiceImg = styled.div`
  flex-basis:100%;
  & div{
    width:calc(100% - 40px);
    margin:0 auto;
  }
  & img{
    width:calc(100% - 2px);
    border-radius:50%;
  }
`;
const ServiceText = styled.div`
  flex-basis:100%;
  margin-top:20px;
  text-align:center;
  color:#333;
  & h2{
    font-size:22px;
    margin:0;
  }
  & p{
    font-size:16px;
    margin:0;
    margin-top:20px;
    font-weight:500;
    line-height:1.6em;
  }
`;

const Index = () => (
  <Layout active={"home"} title={"a"} description={"b"} keywords={"c"}>
    <InnerContainer>
      <LittleIntroWrapper>
        <LittleIntroText>
          <h1>
            A service building vendor space on marketplaces focussing opportunity that can scale up their business
          </h1>
        </LittleIntroText>
      </LittleIntroWrapper>
    </InnerContainer>
    <IntroContainer>
      <InnerContainer>
        <IntroWrapper>
          <IntroImg>
            <img src="/static/img/bucket.png" />
          </IntroImg>
          <IntroText>
            <p>
              WeProcessIT is a service provided by a team of eSME's (eCommerce subject matter experts) who have understanding of customer search patterns & experts in placing and processing products on eCommerce marketplaces. We have a complete understanding of compliances, tax rates, inventory control, product cataloguing, product photoshoot, image editing, product content creation and order processing providing end to end strategy for your product range. The team has atremendous experience of more than 5 years in the eCommerce market that could bring in growth to your business in the online market space.
            </p>
          </IntroText>
        </IntroWrapper>
      </InnerContainer>
    </IntroContainer>
    <OurServices>
      <InnerContainer>
        <OurServicesHeading>
          Our Services
        </OurServicesHeading>
        <ServicesBlocksWrapper>
          <ServiceBlock>
            <Link>
              <a href="/services/market-hub">
                <ServiceImg>
                  <div><img src="/static/img/ser_1.jpg" /></div>
                </ServiceImg>
                <ServiceText>
                  <h2>Market Hub</h2>
                  <p>
                    Complete listing to inventory control & order processing. We display your products on multiple marketplacesvia our “One Shop".
                  </p>
                </ServiceText>
              </a>
            </Link>
          </ServiceBlock>
          <ServiceBlock>
            <Link>
              <a href="/services/product-management">
                <ServiceImg>
                  <div><img src="/static/img/ser_2.jpg" /></div>
                </ServiceImg>
                <ServiceText>
                  <h2>Product Management</h2>
                  <p>
                    Product cataloguing & placement on basis of customer search patterns providing excellent customers experience with increased sales.
                  </p>
                </ServiceText>
              </a>
            </Link>
          </ServiceBlock>
          <ServiceBlock>
            <Link>
              <a href="/services/digital-marketing">
                <ServiceImg>
                  <div><img src="/static/img/ser_3.jpg" /></div>
                </ServiceImg>
                <ServiceText>
                  <h2>Digital Marketing</h2>
                  <p>
                    Creating & MaintainingGoogle & Social Media presence generating awareness about the brand & their products or services.
                  </p>
                </ServiceText>
              </a>
            </Link>
          </ServiceBlock>
        </ServicesBlocksWrapper>
      </InnerContainer>
    </OurServices>
  </Layout>
);

export default Index;
