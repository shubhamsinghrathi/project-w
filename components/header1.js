import styled, { keyframes } from "styled-components";
import { Component } from "react";
import Link from "next/link";
// import FaIconPack from "react-icons/lib/fa";
import BarBtn from "react-icons/lib/fa/bars";

const HeaderWrapper = styled.div`
    width:100%;
    height:65px;
    background:#fff;
    @media (min-width: 800px) {
      background:#fff;
    }
    position:absolute;
    z-index:10000;
    top:0;
    left:0;
    position:fixed;
    transition:all 0.2s 0s;
    padding-top:55px;
    ${props => props.scroll == true && `
      box-shadow:0 5px 10px rgba(0,0,0,0.1);
      padding-top:40px;
      height:50px;
    `}
`;
const HeaderContainer = styled.div`
    width:94%;
    max-width:1200px;
    margin:0 auto;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    color:#333;
    position:relative;
    z-index:101;
`;
const HeaderLogoContainer = styled.div`
    flex-basis:200px;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:center;
    width:200px;
    & img{
      height:40px;
      width:120px;
    }
`;
const PanelIn = keyframes`
  from {
    top:-400px;
  }

  to {
    top:60px;
  }
`;
const PanelOut = keyframes`
  from {
    top:60px;
  }
  to {
    top:-400px;
  }
`;
const HeaderLinkContainer = styled.div`
    display:${props => (props.show == true ? "flex" : "none")};
    flex-wrap:wrap;
    & Link{
        flex:1;
    }
    @media (max-width: 800px) {
      display:none;
    }
    ${props => props.mobile_enable == false && props.show == false && props.first == false && `
        position:absolute;
        z-index:0;
        animation: ${PanelOut} 0.5s ease;
        top:-400px;
        display:flex !important;
    `}
    ${props => props.mobile_enable == true && `
        position:absolute;
        z-index:0;
        animation: ${PanelIn} 0.5s ease;
        top:60px;
        width:100%;
        right:0px;
        display:flex !important;
        flex-direction:column;
        background:rgba(255,255,255,0.95);
    `}
`;
const Atag = styled.a`
   @media (min-width: 801px) {
      display:flex;
      flex-direction:column;
      color:#333;
      text-decoration:none;
      margin:0 20px;
      transition:all 0.5s 0s;
      font-size:12px;
      font-weight:bold;
      line-height: 1.25em;
      letter-spacing: .115em;
      text-transform: uppercase;
      transition:all 0.2s 0s;
      &:hover{
          color:#ed1165;
      }
  }
   @media (max-width: 800px) {
      display:flex;
      ${props => props.first == "false" && `
        display:none;
      `}
      width:100%;
      padding:14px 0;
      flex-direction:column;
      justify-content:center;
      color:#333;
      font-size:16px;
      font-weight:bold;
      text-decoration:none;
      transition:all 0.5s 0s;
      text-align:center;
      border-bottom:1px rgba(0,0,0,0.2) solid;
  }
  ${props => props.active == true && `
    color:#ed1165 !important;
  `}
`;
const HeaderOption = styled.div`
    padding:0 10px;
    @media (min-width: 801px) {
      display:none;
    }
    @media (max-width: 800px) {
      display:flex;
    }
    self-align:flex-end;
    height:100%;
    flex-direction:column;
    justify-content:center;
`;
const HeaderButton = styled.button`
  background:none;
  color:#333;
  border:none;
  font-size:24px;
  outline:none;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    var home_active = false;
    var service_active = false;
    var about_active = false;
    var price_active = false;
    var contact_active = false;

    if (props.active == "home") {
      home_active = true;
    } else if (props.active == "aboutus") {
      about_active = true;
    } else if (props.active == "contactus") {
      contact_active = true;
    } else if (props.active == "services") {
      service_active = true;
    } else if (props.active == "pricing") {
      price_active = true;
    }

    this.state = {
      button: false,
      links: true,
      mobile: false,
      first: true,
      scroll: false,
      price_active,
      about_active,
      service_active,
      home_active,
      contact_active
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateScrolling = this.updateScrolling.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("scroll", this.updateScrolling);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("scroll", this.updateScrolling);
  }
  updateScrolling() {
    if (window.pageYOffset > 0) {
      this.setState({ scroll: true });
    } else {
      this.setState({ scroll: false });
    }
  }
  updateWindowDimensions() {
    if (window.innerWidth < 801) {
      this.setState({ button: true, links: false });
    } else {
      this.setState({ button: false, links: true });
    }
  }
  buttonToggle() {
    if (this.state.mobile == false) {
      this.setState({ mobile: true, first: false });
    } else {
      this.setState({ mobile: false, first: false });
    }
  }
  render() {
    this.updateWindowDimensions;
    return (
      <HeaderWrapper scroll={this.state.scroll}>
        <HeaderContainer>
          <HeaderLogoContainer>
            <img src="/static/img/logo.png" />
          </HeaderLogoContainer>
          <HeaderLinkContainer
            show={this.state.links}
            mobile_enable={this.state.mobile}
            first={this.state.first}
            scroll={this.state.scroll}
          >
            <Link>
              {/*<a href="/">Home<Beer /></a>*/}
              <Atag
                active={this.state.home_active}
                mobile_enable={this.state.mobile}
                href="/"
              >
                HOME
              </Atag>
            </Link>
            <Link>
              <Atag
                mobile_enable={this.state.mobile}
                active={this.state.about_active}
                href="aboutus"
              >
                ABOUT US
              </Atag>
            </Link>
            <Link>
              <Atag
                mobile_enable={this.state.mobile}
                active={this.state.service_active}
                href="services"
              >
                SERVICES
              </Atag>
            </Link>
            <Link>
              <Atag
                mobile_enable={this.state.mobile}
                active={this.state.price_active}
                href="pricing"
              >
                PRICING
              </Atag>
            </Link>
            <Link>
              <Atag
                mobile_enable={this.state.mobile}
                active={this.state.contact_active}
                href="contactus"
              >
                CONTACT US
              </Atag>
            </Link>
          </HeaderLinkContainer>
          <HeaderOption show={this.state.button}>
            <HeaderButton onClick={() => this.buttonToggle(this)}>
              <BarBtn />
            </HeaderButton>
          </HeaderOption>
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}

export default Header;
