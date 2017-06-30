import { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import validator from "validator";
import SendBtn from "react-icons/lib/fa/paper-plane";
import MsgBtn from "react-icons/lib/fa/envelope";
import DownAngle from "react-icons/lib/fa/angle-down";

const BoxContainer = styled.div`
    position:fixed;
    right:20px;
    bottom:20px;
    z-index:1000;
`;
const BoxWrapper = styled.div`
    width:300px;
    position:absolute;
    overflow:hidden;
    bottom:0;
    right:0;
    border-radius:5px;
    box-shadow:0 5px 10px #999;
    background:rgba(100,100,100,0.5);
    transition: all 0.3s linear 0s;
    ${props => props.boxVisible == false && `
      bottom:-500px;
    `}
`;
const BoxHeader = styled.div`
    width:calc(100% - 30px);
    padding:25px 15px;
    font-size:16px;
    display:flex;
    justify-content:space-between;
    background:#2296ee;
    & div{
        color:#fff;
    }
    & button{
        height:16px;
        padding:0;
        font-size:16px;
        background:none;
        border:none;
        color:#fff;
        outline:none;
        font-weight:bold;
        margin-left:15px;
    }
`;
const BoxForm = styled.form`
    width:100%;
    background:#fff;
    color:#999;
    overflow:hidden;
    background:#fff;
    display:block;
    ${props => props.code != "" && `
      display:none;
    `}
`;
const BoxFillUp = styled.div`
    width:calc(100% - 42px);
    padding:10px 20px;
    /*max-height:310px;*/
    overflow:auto;
    border:1px #f1f1f1 solid;
`;
const BoxButton = styled.button`
    width:100%;
    height:50px;
    font-size:14px;
    background:#3E7CE4;
    border:none;
    outline:none;
    color:#fff;
    font-weight:bold;
`;
const ChatAnnounce = styled.div`
    width:100%;
    text-align:center;
    margin-bottom:20px;
`;
const InputBoxWrapper = styled.div`
    position:relative;
    width:100%;
    height:38px;
    margin-bottom:10px;
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
    width:calc(100% - 20px);
    position:relative;
    z-index:10;
    padding:0 10px;
    height:38px;
    outline:none;
    background:none;
    border:1px #ccc solid;
    border-radius:3px;
    color:#666;
    font-weight:500;
    ${props => props.valid == false && `
      border:1px red solid;
    `}
`;
const TextBoxWrapper = styled.div`
    position:relative;
    width:100%;
    height:86px;
    margin-bottom:10px;
    &:after{
        z-index:1;
        content:"${props => props.what}";
        position:absolute;
        top:11px;
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
const TextBox = styled.textarea`
    width:calc(100% - 20px);
    padding:10px;
    position:relative;
    background:none;
    border:1px #ccc solid;
    border-radius:3px;
    z-index:10;
    padding-top:14px;
    height:62px;
    margin-bottom:10px;
    outline:none;
    ${props => props.valid == false && `
      border:1px red solid;
    `}
`;
const ChatContainer = styled.div`
  display:none;
  ${props => props.code != "" && `
    display:block;
  `};
  width:100%:
`;
const ChatBoxWrapper = styled.div`
  width:calc(100% - 22px);
  padding:10px;
  height:350px;
  position:relative;
  border:1px #fff solid;
  border-bottom:none;
  padding-bottom:0;
`;
const ChatBox = styled.div`
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
    max-height:350px;
    overflow-x:hidden;
    overflow-y:auto;
    display:flex;
    flex-wrap:wrap;
`;
const MsgForm = styled.form`
  width:calc(100% - 2px);
  display:flex;
  flex-wrap:wrap;
  border:1px #fff solid;
  border-top:1px #aaa solid;
`;
const Msg = styled.input`
  width:calc(100% - 91px);
  padding:0 10px;
  height:50px;
  border:1px #fff solid;
  border-right:none;
  outline:none;
`;
const MsgSend = styled.button`
  width:70px;
  outline:none;
  border:1px #fff solid;
  border-right:none;
  background:#fff;
  color:#ccc;
  ${props => props.TextEntered != "" && `
    color:#D94441;
  `}
  font-size:20px;
  font-weight:bold;
`;
const MsgBtnContainer = styled.div`
    position:fixed;
    bottom:20px;
    right:20px;
    overflow:hidden;
    display:flex;
    justify-content:center;
    width:60px;
    height:60px;
    border-radius:50%;
    box-shadow: 0px 0px 24px 5px rgba(0,0,0,0.4);
    background:#2296ee;
    color:#fff;
    font-size:30px;
    font-weight:bold;
    & div{
      display:flex;
      flex-direction:column;
      justify-content:center;
    }
    ${props => props.boxVisible == true && `
      display:none;
    `}
`;

class MsgBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFocus: false,
      name: "",
      emailFocus: false,
      email: "",
      mobileFocus: false,
      mobile: "",
      msgFocus: false,
      msg: "",
      nameValid: true,
      emailValid: true,
      mobileValid: true,
      msgValid: true,
      time: 0,
      code: "",
      boxVisible: false
    };
    this.contentAdder = this.contentAdder.bind(this);
    this.startChat = this.startChat.bind(this);
    this.msgGrabber = this.msgGrabber.bind(this);
    this.validation_checker = this.validation_checker.bind(this);
    this.msgBtnClicked = this.msgBtnClicked.bind(this);
    this.msgEnd = this.msgEnd.bind(this);
  }
  contentAdder(data, step = 1) {
    if (step == 1) {
      $(".chatBox")
        .first()
        // .append(
        //   "<div style='border-radius:3px 45% 45% 45%,float:left;max-width:calc(90% - 28px);color:#fff;padding:10px;background:#3e7ce4;margin:5px 0;margin-left:8px;'>" +
        //     data.msg +
        //     "</div><div style='clear:both;'></div>"
        // )
        .append(
          "<div style='flex-basis:90%;display:flex;flex-direction:row;padding-right:10%;'>" +
            "<div style='border-radius:3px 12px 12px 12px;color:#333;padding:15px;background:#fff;margin:10px;'>" +
            data.msg +
            "</div></div>"
        );
      var wtf = $(".chatBox").first();
      var height = wtf[0].scrollHeight;
      wtf.scrollTop(height);
    } else {
      $(".chatBox")
        .first()
        // .append(
        //   "<div style='border-radius:45% 3px 45% 45%,float:right;max-width:calc(90% - 28px);color:#333;padding:15px 10px;background:#fff;margin:5px 0;margin-right:8px;'>" +
        //     data +
        //     "</div><div style='clear:both;'></div>"
        // )
        .append(
          "<div style='flex-basis:90%;display:flex;flex-direction:row-reverse;padding-left:10%;'>" +
            "<div style='border-radius:12px 3px 12px 12px;color:#fff;padding:15px;background:#3e7ce4;margin:10px;'>" +
            data +
            "</div></div>"
        );
      var wtf = $(".chatBox").first();
      var height = wtf[0].scrollHeight;
      wtf.scrollTop(height);
    }
  }
  msgSubmit(e) {
    e.preventDefault();
    var dis = this;
    if (this.state.msg != "") {
      var msg_val = this.state.msg;
      this.setState({ msg: "" });
      axios({
        method: "post",
        url: my_api + "/customer-chat",
        data: { msg: msg_val, code: this.state.code }
      });
      this.contentAdder(msg_val, 2);
    }
  }
  msgGrabber() {
    var time_val = this.state.time;
    var code_val = this.state.code;
    var e = this;
    axios({
      method: "post",
      url: my_api + "/customer-chat-grabber",
      data: {
        time: time_val,
        code: code_val
      }
    }).then(function(response) {
      if (response.data.length != 0) {
        e.setState({ time: response.data[response.data.length - 1].time });
        // alert(response.data[0]["date"]);
        var i = 0;
        while (i < response.data.length) {
          e.contentAdder(response.data[i]);
          i += 1;
        }
      }
      setTimeout(e.msgGrabber, 800);
    });
  }
  validation_checker() {
    var fail = false;
    if (!validator.isEmail(this.state.email)) {
      fail = true;
      this.setState({ emailValid: false });
    } else {
      this.setState({ emailValid: true });
    }
    if (
      !(validator.isNumeric(this.state.mobile) &&
        validator.isLength(this.state.mobile, { min: 6, max: 15 }))
    ) {
      fail = true;
      this.setState({ mobileValid: false });
    } else {
      this.setState({ mobileValid: true });
    }
    var mod_name = this.state.name.replace(/[ ]/ig, "");
    if (!validator.isAlpha(mod_name)) {
      fail = true;
      this.setState({ nameValid: false });
    } else {
      this.setState({ nameValid: true });
    }
    if (!validator.isAscii(this.state.msg)) {
      fail = true;
      this.setState({ msgValid: false });
    } else {
      this.setState({ msgValid: true });
    }
    if (!fail) {
      return true;
    } else {
      return false;
    }
  }
  startChat(e) {
    e.preventDefault();
    var valid = 1;
    var dis = this;
    if (this.validation_checker()) {
      valid = 1;
    } else {
      valid = 0;
    }
    if (valid) {
      var name_val = this.state.name;
      var email_val = this.state.email;
      var mobile_val = this.state.mobile;
      var msg_val = this.state.msg;
      var d = new Date();
      var crrTime = d.getTime();
      this.setState({ time: crrTime });
      this.setState({ name: "", email: "", mobile: "", msg: "" });
      axios({
        method: "post",
        url: my_api + "/customer-register",
        data: {
          name: name_val,
          email: email_val,
          mobile: mobile_val,
          msg: msg_val
        }
      }).then(function(response) {
        // console.log(response.data.code);
        dis.setState({ code: response.data.code });
        dis.contentAdder(msg_val, 2);
        dis.msgGrabber();
      });
    }
  }
  msgBtnClicked() {
    if (this.state.boxVisible == true) {
      this.setState({ boxVisible: false });
    } else {
      this.setState({ boxVisible: true });
    }
  }
  msgEnd() {
    if (this.state.boxVisible == true) {
      this.setState({
        boxVisible: false,
        nameFocus: false,
        name: "",
        emailFocus: false,
        email: "",
        mobileFocus: false,
        mobile: "",
        msgFocus: false,
        msg: "",
        nameValid: true,
        emailValid: true,
        mobileValid: true,
        msgValid: true,
        time: 0,
        code: ""
      });
    } else {
      this.setState({ boxVisible: true });
    }
  }
  render() {
    return (
      <BoxContainer>
        <MsgBtnContainer
          onClick={this.msgBtnClicked}
          boxVisible={this.state.boxVisible}
        >
          <div>
            <MsgBtn />
          </div>
        </MsgBtnContainer>
        <BoxWrapper boxVisible={this.state.boxVisible}>
          <BoxHeader>
            <div>Chat With Us</div>
            <div>
              <button onClick={this.msgBtnClicked}>
                <DownAngle size={22} />
              </button>
              <button onClick={this.msgEnd}>x</button>
            </div>
          </BoxHeader>
          <ChatContainer code={this.state.code}>
            <ChatBoxWrapper>
              <ChatBox className="chatBox" />
            </ChatBoxWrapper>
            <MsgForm
              onSubmit={e => {
                this.msgSubmit(e);
              }}
            >
              <Msg
                value={this.state.msg}
                placeholder="Type a message here..."
                onChange={e => {
                  this.setState({ msg: e.target.value });
                }}
              />
              <MsgSend TextEntered={this.state.msg} type="submit">
                <SendBtn />
              </MsgSend>
            </MsgForm>
          </ChatContainer>
          <BoxForm
            onSubmit={e => {
              this.startChat(e);
            }}
            code={this.state.code}
          >
            <BoxFillUp>
              <ChatAnnounce>
                Please fill out the form below and we will get back to you as soon as possible
              </ChatAnnounce>
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
                    this.setState({ name: e.target.value, nameValid: true });
                  }}
                  valid={this.state.nameValid}
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
                    this.setState({ email: e.target.value, emailValid: true });
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
              <TextBoxWrapper
                what={"* Your Message"}
                focus={this.state.msgFocus}
                value={this.state.msg}
                valid={this.state.msgValid}
              >
                <TextBox
                  onFocus={e => {
                    this.setState({ msgFocus: true, msgValid: true });
                  }}
                  onBlur={e => {
                    this.setState({ msgFocus: false });
                  }}
                  value={this.state.msg}
                  onChange={e => {
                    this.setState({ msg: e.target.value, msgValid: true });
                  }}
                  valid={this.state.msgValid}
                />
              </TextBoxWrapper>
            </BoxFillUp>
            <BoxButton type={"submit"}>
              Start Chat
            </BoxButton>
          </BoxForm>
        </BoxWrapper>
      </BoxContainer>
    );
  }
}

export default MsgBox;
