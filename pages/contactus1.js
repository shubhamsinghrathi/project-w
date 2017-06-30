import React, { Component } from "react";
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
const HeadingContainer = styled.div`
    margin-top:100px;
    font-size:20px;
    font-weight:bold;
    margin-bottom:40px;
`;
const ContentContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    margin-bottom:40px;
`;
const FormContainer = styled.div`
    flex:1;
    flex-basis:320px;
    display:flex;
    flex-wrap:wrap;
    margin-bottom:40px;
`;
const FormContentWrapper = styled.div`
    flex-basis:calc(100% - 30px);
    padding:0 15px;
    display:flex;
    flex-wrap:wrap;
    & div{
        flex-basis:100%;
    }
`;
const AboutForm = styled.div`
    flex-basis:100%;
    margin-bottom:20px;
    font-size:18px;
    font-weight:500;
`;
const LabelName = styled.div`
    flex-basis:100%;
    font-size:14px;
    margin-bottom:5px;
`;
const InputBox = styled.input`
    flex-shrink:1;
    flex-basis:350px;
    padding:0 10px;
    margin-bottom:10px;
    height:30px;
    font-size:14px;
    border:1px #ccc solid;
`;
const Select = styled.select`
    flex-shrink:1;
    flex-basis:370px;
    margin-bottom:10px;
    height:30px;
    font-size:14px;
    background:#fff;
    outline:none;
    border:1px #ccc solid;
`;
const RequestQuote = styled.button`
    height:40px;
    margin-top:20px;
    flex-basis:160px;
    background:#45A2FF;
    color:#fff;
    border:1px #45A2FF solid;
    font-size:15px;
    font-weight:bold;
    transition:all 0.5s;
    &:hover{
        background:#fff;
        color:#45A2FF;
    }
`;
const OfficeName = styled.div`
    flex-basis:100%;
    font-size:16px;
    font-weight:bold;
    margin-bottom:15px;
`;
const OfficeAddress = styled.div`
    flex-basis:100%;
    font-size:14px;
`;
const Address = styled.div`
    flex-basis:100%;
`;

class Contact extends Component {
  render() {
    return (
      <Layout>
        <InnerContainer>
          <LittleIntroWrapper>
            <div>
              Let’s talk
              <p>
                We’ve helped start-ups and well established brands bring their digital goals to life. If you’ve got an idea you want to discuss, get in touch.
                Fill in the form or call us on 02393 190 260.
              </p>
            </div>
          </LittleIntroWrapper>
          <HeadingContainer>
            Get in touch with us
          </HeadingContainer>
          <ContentContainer>
            <FormContainer>
              <FormContentWrapper>
                <AboutForm>
                  Looking to Sell online fill below Form
                </AboutForm>
                <LabelName>
                  Your Name :
                </LabelName>
                <InputBox /><div />
                <LabelName>
                  Business  Name :
                </LabelName>
                <InputBox /><div />
                <LabelName>
                  Mobile/Phone No :
                </LabelName>
                <InputBox /><div />
                <LabelName>
                  Valid Email Id :
                </LabelName>
                <InputBox /><div />
                <LabelName>
                  Business Operation :
                </LabelName>
                <Select>
                  <option value="1">Sell Offline from Store/Outlet</option>
                  <option value="2">Sell Online on E-commerce site</option>
                  <option value="3">Sell both Online & Offline channel</option>
                </Select><div />
                <RequestQuote>
                  Request Quote
                </RequestQuote>
              </FormContentWrapper>
            </FormContainer>
            <FormContainer>
              <FormContentWrapper>
                <Address>
                  <AboutForm>
                    You Can Visit Us
                  </AboutForm>
                  <OfficeName>
                    ##### Online Marketing India Pvt Ltd,
                  </OfficeName>
                  <OfficeAddress>
                    Block-15,Geeta Colony,East Delhi,Delhi-31
                  </OfficeAddress>
                </Address>
              </FormContentWrapper>
            </FormContainer>
          </ContentContainer>
        </InnerContainer>
      </Layout>
    );
  }
}

export default Contact;
