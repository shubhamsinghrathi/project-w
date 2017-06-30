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
    @media (max-width: 800px) {
      flex-basis:100%;
      text-align:justify;
    }
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
const DataContainer = styled.div`
    background:#fff;
    margin-top:40px;
    display:flex;
    dlex-wrap:wrap;
`;
const HeadingContainer = styled.div`
    margin-top:40px;
    font-size:20px;
    font-weight:bold;
    margin-bottom:40px;
    &:after{
      content: '';
      display: block;
      margin-top: 20px;
      width: 45px;
      height: 4px;
      background: #ed1165;
    }
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
const Select = styled.select`
    flex:1;
    flex-grow:0;
    flex-basis:370px;
    margin-bottom:10px;
    height:38px;
    font-size:14px;
    background:#fff;
    outline:none;
    border:none;
    border-bottom:1px #aaa solid;
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
const InputBoxWrapper = styled.div`
    position:relative;
    flex-basis:370px;
    height:38px;
    margin-bottom:10px;
    display:flex;
    &:after{
        z-index:1;
        content:"${props => props.what}";
        position:absolute;
        top:12px;
        left:10px;
        font-size:16px;
        transition:all 0.2s;
        ${props => props.valid == false && `
          color:red;
        `}
        ${props => (props.focus == true || props.value != "") && `
            top:1px;
            font-size:11px;
        `}
    }
`;
const InputBox = styled.input`
    flex:1;
    flex-grow:0;
    flex-basis:350px;
    position:relative;
    z-index:10;
    padding:0 10px;
    height:38px;
    outline:none;
    background:none;
    border:none;
    border-bottom:1px #aaa solid;
    color:#666;
    font-weight:500;
    ${props => props.valid == false && `
      border:1px red solid;
    `}
`;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFocus: false,
      name: "",
      nameValid: true,
      businessFocus: false,
      business: "",
      businessValid: true,
      emailFocus: false,
      email: "",
      emailValid: true,
      mobileFocus: false,
      mobile: "",
      mobileValid: true
    };
  }
  render() {
    return (
      <Layout active={"contactus"} title={"a"} description={"b"} keywords={"c"}>
        <InnerContainer>
          <LittleIntroWrapper>
            <div>
              <h1>Let’s talk</h1>
              <p>
                We’ve helped start-ups and well established brands bring their digital goals to life. If you’ve got an idea you want to discuss, get in touch.
                Fill in the form or call us on 02393 190 260.
              </p>
            </div>
          </LittleIntroWrapper>
        </InnerContainer>
        <DataContainer>
          <InnerContainer>
            <HeadingContainer>
              Get in touch with us
            </HeadingContainer>
            <ContentContainer>
              <FormContainer>
                <FormContentWrapper>
                  <AboutForm>
                    Looking to Sell online fill below Form
                  </AboutForm>
                  <InputBoxWrapper
                    focus={this.state.nameFocus}
                    value={this.state.name}
                    what={"* Name"}
                    valid={this.state.nameValid}
                  >
                    <InputBox
                      onFocus={e => {
                        this.setState({ nameFocus: true, nameValid: true });
                      }}
                      onBlur={e => {
                        this.setState({ nameFocus: false });
                      }}
                      value={this.state.name}
                      onChange={e => {
                        this.setState({
                          name: e.target.value,
                          nameValid: true
                        });
                      }}
                      valid={this.state.nameValid}
                    />
                  </InputBoxWrapper>
                  <InputBoxWrapper
                    focus={this.state.businessFocus}
                    value={this.state.business}
                    what={"* Business Name"}
                    valid={this.state.businessValid}
                  >
                    <InputBox
                      onFocus={e => {
                        this.setState({
                          businessFocus: true,
                          businessValid: true
                        });
                      }}
                      onBlur={e => {
                        this.setState({ businessFocus: false });
                      }}
                      value={this.state.business}
                      onChange={e => {
                        this.setState({
                          business: e.target.value,
                          businessValid: true
                        });
                      }}
                      valid={this.state.businessValid}
                    />
                  </InputBoxWrapper>
                  <InputBoxWrapper
                    focus={this.state.emailFocus}
                    value={this.state.email}
                    what={"* Email"}
                    valid={this.state.emailValid}
                  >
                    <InputBox
                      onFocus={e => {
                        this.setState({ emailFocus: true, emailValid: true });
                      }}
                      onBlur={e => {
                        this.setState({ emailFocus: false });
                      }}
                      value={this.state.email}
                      onChange={e => {
                        this.setState({
                          email: e.target.value,
                          emailValid: true
                        });
                      }}
                      valid={this.state.emailValid}
                    />
                  </InputBoxWrapper>
                  <InputBoxWrapper
                    what={"* Mobile No."}
                    focus={this.state.mobileFocus}
                    value={this.state.mobile}
                    valid={this.state.mobileValid}
                  >
                    <InputBox
                      onFocus={e => {
                        this.setState({ mobileFocus: true, mobileValid: true });
                      }}
                      onBlur={e => {
                        this.setState({ mobileFocus: false });
                      }}
                      value={this.state.mobile}
                      onChange={e => {
                        this.setState({
                          mobile: e.target.value,
                          mobileValid: true
                        });
                      }}
                      valid={this.state.mobileValid}
                    />
                  </InputBoxWrapper>
                  <Select>
                    <option value="0">Select Business Operation</option>
                    <option value="1">Sell Offline from Store/Outlet</option>
                    <option value="2">Sell Online on E-commerce site</option>
                    <option value="3">
                      Sell both Online & Offline channel
                    </option>
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
        </DataContainer>
      </Layout>
    );
  }
}

export default Contact;
