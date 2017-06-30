import styled from "styled-components";
import React from "react";
import FontAwesome from "react-fontawesome";
import Link from "next/link";

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
      margin-top:30px;
      font-size:22px;
      line-height:1.6em;
      font-weight:500;
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
const PricingContainer = styled.div`
  margin-top:10px;
  margin-bottom:60px;
  width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
`;
const PricingBlock = styled.div`
    flex:1;
    flex-grow:0;
    flex-basis:210px;
    margin:0 20px;
    margin-top:50px;
    display:flex;
    flex-wrap:wrap;
    height:500px;
    ${props => props.box == "1" && `
        background:#85cba8;
        background:linear-gradient(to bottom left,#85cba8,#76c4e2);
    `}
    ${props => props.box == "2" && `
        background:#f69259;
        background: linear-gradient(to bottom left,#f69259,#f16975);
    `}
    ${props => props.box == "3" && `
        background: #ba77b1;
        background: linear-gradient(to bottom left,#ba77b1,#8176b5);
    `}
    ${props => props.box == "4" && `
        background: #76c4e2;
        background: linear-gradient(to bottom left,#76c4e2,#8176b5);
    `}
    border: 1px solid #e6e6e6;
    border-radius:3px;
`;

const Service = () => (
  <Layout active={"pricing"} title={"a"} description={"b"} keywords={"c"}>
    <InnerContainer>
      <LittleIntroWrapper>
        <div>
          <h1>Our Plans</h1>
          <p>
            Pick a plan that fits your needs.
          </p>
        </div>
      </LittleIntroWrapper>
      <PricingContainer>
        <PricingBlock box={"1"}>
          ss
        </PricingBlock>
        <PricingBlock box={"2"}>
          ss
        </PricingBlock>
        <PricingBlock box={"3"}>
          ss
        </PricingBlock>
        <PricingBlock box={"4"}>
          ss
        </PricingBlock>
      </PricingContainer>
    </InnerContainer>
  </Layout>
);

export default Service;
