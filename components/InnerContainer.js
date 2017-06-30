import styled from "styled-components";

const Container = styled.div`
    width:94%;
    max-width:1200px;
    margin:0 auto;
`;

const InnerContainer = props => <Container>{props.children}</Container>;
export default InnerContainer;
