import styled from "styled-components";
import Link from "next/link";

const FooterWrapper = styled.div`
    width:100%;
    background:#f6f6f6;
`;
const FooterCopyright = styled.div`
    width:94%;
    padding:0 3%;
    background:#f1f1f1;
    display:flex;
`;
const CopyrightContent = styled.div`
    margin:0 auto;
    padding:20px 0;
    line-height:1.4em;
    display:flex;
    text-align:center;
    flex-direction:column;
    justify-content:center;
    color:#666;
    font-size:11px;
`;
const FooterContainer = styled.div`
    width:90%;
    max-width:1200px;
    margin:0 auto;
    display:flex;
    padding:60px 0;
    flex-wrap:wrap;
`;
const FooterBlock = styled.div`
    flex:1;
    flex-basis:320px;
`;
const FooterHeader = styled.div`
    font-size:12px;
    color:#333;
    font-weight:bold;
`;
const FooterContent = styled.ul`
    margin:20px 0 30px 0;
    padding:0;
    list-style:none;
    color:#777;
    & li{
        margin-bottom:10px;
    }
    & a:hover{
        color:#ed1165;
    }
`;
const FooterLink = styled.a`
    color:#777;
    text-decoration:none;
    font-size:15px;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <FooterBlock>
        <FooterHeader>
          SERVICES
        </FooterHeader>
        <FooterContent>
          <li>
            <Link>
              <FooterLink href="/services/market-hub">Market Hub</FooterLink>
            </Link>
          </li>
          <li>
            <Link>
              <FooterLink href="/services/product-management">
                Product Management
              </FooterLink>
            </Link>
          </li>
          <li>
            <Link>
              <FooterLink href="/services/digital-marketing">
                Digital Marketing
              </FooterLink>
            </Link>
          </li>
        </FooterContent>
      </FooterBlock>
      <FooterBlock>
        {/*<FooterHeader>
          CATALOGE PARTNERS
        </FooterHeader>
        <FooterContent>
          ddd
        </FooterContent>*/}
        <FooterHeader>
          CONNECT WITH US
        </FooterHeader>
        <FooterContent>
          You’ll find us in the studio from Monday to Friday, 8:30am to 5pm.
        </FooterContent>
      </FooterBlock>
      <FooterBlock>
        <FooterHeader>
          LINKS
        </FooterHeader>
        <FooterContent>
          <li>
            <Link>
              <FooterLink href="/">Home</FooterLink>
            </Link>
          </li>
          <li>
            <Link>
              <FooterLink href="/aboutus">About Us</FooterLink>
            </Link>
          </li>
          <li>
            <Link>
              <FooterLink href="/services">Services</FooterLink>
            </Link>
          </li>
          <li>
            <Link>
              <FooterLink href="/pricing">Pricing</FooterLink>
            </Link>
          </li>
          <li>
            <Link>
              <FooterLink href="/contactus">Contact Us</FooterLink>
            </Link>
          </li>
        </FooterContent>
      </FooterBlock>
    </FooterContainer>
    <FooterCopyright>
      <CopyrightContent>
        Trademark Copyright © 2017 Online Marketing India Pvt Ltd - All rights reserved.
      </CopyrightContent>
    </FooterCopyright>
  </FooterWrapper>
);

export default Footer;
