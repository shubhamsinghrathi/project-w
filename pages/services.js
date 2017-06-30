import styled from "styled-components";
import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import Link from "next/link";
import Scroll from "react-scroll";

var ScrollLink = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;
var scroller = Scroll.scroller;

import Layout from "../components/Layout";
import InnerContainer from "../components/InnerContainer";

const LittleIntroWrapper = styled.div`
  margin-top:150px;
  display:flex;
  color:#333333;
  flex-wrap:wrap;
  font-size:34px;
  font-weight:bold;
`;
const LittleDiv = styled.div`
  flex-basis:80%;
  @media (max-width: 800px) {
    flex-basis:100%;
  }
  display:flex;
  flex-wrap:wrap;
  line-height:1.34em;
  position:relative;
  & h1{
    flex-basis:100%;
    font-size:34px;
    margin:0;
  }
`;
const LittlePara = styled.div`
  text-align:justify;
  flex-basis:100%;
  margin:0;
  margin-top:30px;
  line-height:0.7em;
  font-weight:500;
  & div{
    font-size:13px !important;
    margin-bottom:10px;
  }
  &:after{
    content: '';
    display: block;
    margin-top: 40px;
    width: 45px;
    height: 4px;
    background: #ed1165;
  }
`;
const ServiceContainer = styled.div`
  margin-top:10px;
  margin-bottom:20px;
  width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  ${props => props.anotherType && `
    @media (min-width: 801px) {
      flex-direction:row-reverse;
    }
  `}
`;
const ServiceImage = styled.div`
  flex:1;
  @media (min-width: 801px) {
    flex-grow:0;
  }
  margin-top:50px;
  flex-basis:44%;
  width:44%;
  @media (max-width: 800px) {
    flex-basis:100%;
    width:100%;
  }
  & img{
    width:100%;
  }
`;
const ServiceText = styled.div`
  flex:1;
  @media (min-width: 801px) {
    flex-grow:0;
  }
  margin-top:50px;
  flex-basis:50%;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;
const ServiceTextContent = styled.div`
  flex-basis:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;
const ServiceTextBlock = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  margin-bottom:10px;
  ${props => props.direction && `
    flex-direction:row-reverse;
  `}
`;
const ServiceTextWrapper = styled.div`
  flex-basis:80%;
  @media (max-width: 800px) {
    flex-basis:100%;
  }
  display:flex;
  flex-wrap:wrap;
  color:#333;
  text-align:justify;
  margin-bottom:20px;
  & h2{
    flex-basis:100%;
    font-size:20px;
    font-weight:bold;
    margin:0;
    ${props => props.direction && `
      text-align:right;
    `}
    @media (max-width: 800px) {
      text-align:center;
    }
  }
`;
const ServiceInformation = styled.div`
  flex-basis:100%;
  font-size:14px;
  font-weight:500;
  line-height:1.4em;
  margin-top:20px;
  & div{
    margin-bottom:8px;
    line-height:1.4em;
  }
  & span{
    font-weight:bold;
  }
`;

class Service extends Component {
  constructor(props) {
    super(props);
    var page_scroll_location = "";
    if (props.url.query.location) {
      page_scroll_location = props.url.query.location;
    }
    this.state = {
      location: page_scroll_location
    };
  }
  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
    scrollSpy.update();
    if (this.state.location != "") {
      this.theScroll();
    }
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  theScroll() {
    scroller.scrollTo(this.state.location, {
      duration: 800,
      delay: 100,
      offset: -100,
      smooth: true
    });
  }
  render() {
    return (
      <Layout active={"services"} title={"a"} description={"b"} keywords={"c"}>
        <InnerContainer>
          <LittleIntroWrapper>
            <LittleDiv>
              <h1>Our Services</h1>
              <LittlePara>
                <div>
                  ECommerce marketplaces are booming in the Indian market & is projected to grow at an exponential rate. The research shows thatIndia market has a potential to grow at a five year CAGR(Compounded annual growth rate) of 31.2 percent by 2021 reaching $64 billion up from $16 billion in 2016. This has given an opportunity to the vendors on the marketplaces to scale up their business to the next level.
                </div>
                <div>
                  With more than 300,000 product owners trying to sell their product on marketplaces, only 30-40% could generate profitable business by tapping potential customers.
                </div>
                <div>How do you think they do that?</div>
                <div>
                  There is definitely a science behind this.We call it “eCommScience”.
                </div>
              </LittlePara>
            </LittleDiv>
          </LittleIntroWrapper>
          <ServiceContainer>
            <ServiceImage>
              <img src="/static/img/service_1.jpg" />
            </ServiceImage>
            <ServiceText>
              <ServiceTextContent>
                <ServiceTextBlock>
                  <ServiceTextWrapper>
                    <Element name="market-hub" className="element" />
                    <h2>
                      Sell on Marketplace
                    </h2>
                    <ServiceInformation>
                      <div>
                        Online business in India is booming and that gives the product owners an opportunity to display their products accelerating their business in addition to the offline selling.But, there are individual compliancesof every marketplace which needsthorough understanding.
                      </div>
                      <div>
                        WeProcessIT team provides a specially designed solutions that takes from maintaining Digital Catalogue of your product range to Dispute clearance as per the guidelines of different marketplaces.
                      </div>
                    </ServiceInformation>
                  </ServiceTextWrapper>
                </ServiceTextBlock>
                <ServiceTextBlock direction={"left"}>
                  <ServiceTextWrapper direction={"left"}>
                    <h2>
                      One Shop Market
                    </h2>
                    <ServiceInformation>
                      <div>
                        <span>Account Registration</span>
                        {" "}
                        – Registering a new account for your organization
                      </div>
                      <div>
                        <span>Brand Approval</span> – Top Brand Selling approval
                      </div>
                      <div>
                        <span>Product Listing</span>
                        {" "}
                        – Listing product on marketplaces
                      </div>
                      <div>
                        <span>Product Visibility</span>
                        {" "}
                        – Search Engine content creation
                      </div>
                      <div>
                        <span>Inventory Control</span>
                        {" "}
                        – Managing inventories for the products
                      </div>
                      <div>
                        <span>Dispute Management</span>
                        {" "}
                        – Managing order & product disputes.
                      </div>
                    </ServiceInformation>
                  </ServiceTextWrapper>
                </ServiceTextBlock>
              </ServiceTextContent>
            </ServiceText>
          </ServiceContainer>
          <ServiceContainer anotherType>
            <ServiceImage>
              <img src="/static/img/service_2.jpg" />
            </ServiceImage>
            <ServiceText>
              <ServiceTextContent>
                <ServiceTextBlock>
                  <ServiceTextWrapper>
                    <Element name="product-management" className="element" />
                    <h2>
                      Product Catalogue Management
                    </h2>
                    <ServiceInformation>
                      <div>
                        With not just updating product entries or bulkuploads, we provide an overall management of the product range aligning with the understanding of the customer. This involves from updating the product on marketplaces to maintain its look & transparency by providing detailed descriptionwithclear & attractive product imagesboosting the sales.
                      </div>
                    </ServiceInformation>
                  </ServiceTextWrapper>
                </ServiceTextBlock>
                <ServiceTextBlock direction={"left"}>
                  <ServiceTextWrapper direction={"left"}>
                    <h2>
                      We encourage you to give us the opportunities for
                    </h2>
                    <ServiceInformation>
                      <div>
                        <span>Product Photoshoot </span>
                        {" "}
                        – engine & marketplace customisedproduct photoshoot
                      </div>
                      <div>
                        <span>Product Image Editing </span>
                        {" "}
                        – In-houseimage editing team.
                      </div>
                      <div>
                        <span>Product Description </span>
                        {" "}
                        – Listing product on marketplaces
                      </div>
                    </ServiceInformation>
                  </ServiceTextWrapper>
                </ServiceTextBlock>
              </ServiceTextContent>
            </ServiceText>
          </ServiceContainer>
          <ServiceContainer>
            <ServiceImage>
              <img src="/static/img/service_3.png" />
            </ServiceImage>
            <ServiceText>
              <ServiceTextContent>
                <ServiceTextBlock>
                  <ServiceTextWrapper>
                    <Element name="digital-marketing" className="element" />
                    <h2>
                      Digital Marketing
                    </h2>
                    <ServiceInformation>
                      <div>
                        With not just product management, we help brands to create & maintain their digital media presence on platforms like Google & Social Media.
                      </div>
                    </ServiceInformation>
                  </ServiceTextWrapper>
                </ServiceTextBlock>
                <ServiceTextBlock direction={"left"}>
                  <ServiceTextWrapper direction={"left"}>
                    <h2>
                      Services We Offer
                    </h2>
                    <ServiceInformation>
                      <div>
                        <span>Search Engine Optimization (SEO)</span>
                        {" "}
                        – With the evolution of Google & search engines and with the trends updating continuously, there is a continuous competition to be on the top of related search query. Search Engine Optimization is a key to put things in line with the customer search trends &make your content visible.Our SEO experts have complete understanding of search engines dynamics & could enhancewebsite traffic &increase the rank on Search Engines ultimately maximizing the ROI.
                      </div>
                      <div>
                        <span>Social Media Marketing (SMM)</span>
                        {" "}
                        – Understanding your audience is a key to your brand’s success. Social Media has given the brands an opportunity to interact with their audience directly creating a value for the customers.We have certified professionals from professional institutes like HubSpotAcademy&IIM-Calcutta, who could place your brand in front of the right audience at the right time via the right channel and will help you to build an eternal relationship with the customers.
                      </div>
                      <div>
                        <span>PPC-Pay per Click</span>
                        {" "}
                        – From strategizing campaigns to executing and optimising them is a tough job for all the Digital Marketers across the globe. Analysing the demand of market in Paid Campaigning, we have certified Google professionals who know how & where to invest your valuable money thus maximising ROI.
                      </div>
                    </ServiceInformation>
                  </ServiceTextWrapper>
                </ServiceTextBlock>
              </ServiceTextContent>
            </ServiceText>
          </ServiceContainer>
        </InnerContainer>
      </Layout>
    );
  }
}

export default Service;
