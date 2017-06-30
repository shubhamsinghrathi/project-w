import React, { Component } from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import ChatBox from "./messageBox";
import Scroll from "react-scroll";

var ScrollLink = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scroller = Scroll.scroller;

const Container = styled.div`
  width:100%;
`;
const ToTop = styled.div`
  position:fixed;
  ${props => props.scroll_top == false && `
    display:none;
  `}
  z-index:99;
  bottom:25px;
  border-radius:50%;
  box-shadow:0 0 8px #fff;
  left:25px;
  width:40px;
  height:40px;
  & img{
    width:100%;
  }
`;

global.my_api = "";
// global.my_api = "http://192.168.1.15:3001";

class Layout extends Component {
  constructor(props) {
    super(props);
    var title = "";
    var description = "";
    var keywords = "";
    var active = "";
    var children = "";
    if (props.title) {
      title = props.title;
    }
    if (props.description) {
      description = props.description;
    }
    if (props.keywords) {
      keywords = props.keywords;
    }
    if (props.active) {
      active = props.active;
    }
    this.state = {
      title: title,
      description: description,
      keywords: keywords,
      active: active,
      scroll_top: false
    };
    this.updateScrolling = this.updateScrolling.bind(this);
  }
  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
    window.addEventListener("scroll", this.updateScrolling);
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
    window.removeEventListener("scroll", this.updateScrolling);
  }
  updateScrolling() {
    if (window.pageYOffset > 0) {
      this.setState({ scroll_top: true });
    } else {
      this.setState({ scroll_top: false });
    }
  }
  render() {
    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="title" content={this.state.title} />
          <meta name="description" content={this.state.description} />
          <meta name="keywords" content={this.state.keywords} />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Ubuntu"
          />
          <style>
            {`
              body { 
                margin:0;
                font-family: Ubuntu !important;
              }
            `}
          </style>
        </Head>
        <Header active={this.state.active} />
        <ChatBox />
        {this.props.children}
        <Footer />
        <ToTop
          onClick={() => scroll.scrollToTop()}
          scroll_top={this.state.scroll_top}
        >
          <img src="/static/img/toTop1.png" />
        </ToTop>
      </Container>
    );
  }
}

export default Layout;
