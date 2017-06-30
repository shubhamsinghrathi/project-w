import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import InnerContainer from "../components/InnerContainer";

const LittleIntroWrapper = styled.div`
  margin-top:150px;
  display:flex;
  color:#333333;
  flex-wrap:wrap;
  font-size:34px;
  font-weight:bold;
  & div{
    flex-basis:80%;
    display:flex;
    flex-wrap:wrap;
    line-height:1.34em;
    position:relative;
    & h1{
      font-size:34px;
      margin:0;
    }
    & p{
      flex-basis:100%;
      margin:0;
      font-size:22px;
      line-height:1.6em;
      font-weight:500;
    }
    &:after{
      content: '';
      display: block;
      margin-top: 30px;
      width: 45px;
      height: 4px;
      background: #ed1165;
    }
  }
`;
const ContentContainer = styled.div`
    width:100%;
    margin-top:50px;
    display:flex;
    flex-wrap:wrap;
    margin-bottom:40px;
`;
const Content = styled.p`
    flex-basis:80%;
    margin:0;
    text-align:justify;
    @media (max-width: 800px) {
      flex-basis:100%;
    }
    font-size:16px;
    font-weight:500;
    line-height:1.6em;
`;

const Index = props => (
  <Layout active={"aboutus"} title={"a"} description={"b"} keywords={"c"}>
    <InnerContainer>
      <LittleIntroWrapper>
        <div>
          <h1>About Us</h1>
          <p />
        </div>
      </LittleIntroWrapper>
      <ContentContainer>
        <Content>
          Zaayega representing you a new era of online commerce by helping Startups, SME and offline retailers to sell products online.We are into e commerce business from past 4 Yrs. We have great expertise in Catalog creation, Inventory management, Product Photo shoot & Editing, selling on multiple marketplace. Sell your products on various Top marketplaces through us without any hassle.
          <br /><br />
          Our specialized expert will help you to grow your online business by managing your product catalogs, Model Product Photoshoot, Image Editing, Product Content writing & listing your products on various marketplaces.
          <br /><br />
          We accelerate your business by identifying right marketplaces of your products to boost your online sales.We do listing and managing catalogs for our seller from all over India on multiple leading marketplaces. We partner with top marketplace and have service available for almost all top marketplace in India, also for Amazon Ebay US and UK.
          {" "}
          <br /><br />
          Let’s Grow & Contribute together to build Digital India.
        </Content>
      </ContentContainer>
    </InnerContainer>
  </Layout>
);

export default Index;
