document.getElementById("bs__chat__root").innerHTML += ` <div class="cems__chatbox">
<div class="cems__chatbox__support">
  <div id="cems__chatbox__chatlists">
    <div id="cems__chatlist__header">
      <h3 id="cems__chatlist__header__text">Chats</h3>
    </div>
    <div id="cems__all__chatlist">
      <div class="cems__chat__list">
        <div class="cems__friend__icon">
          <p>F</p>
        </div>
        <div class="cems__chatlist__content">
          <h4 class="cems__chatlist__friendName">Friend's Name</h4>
        </div>
      </div>
    </div>
    <div class="cems__chatbox__chatlist__footer">
      <div class="cems__chatlist__footer__button" onclick="backToChatList()">
        <img class="chatlist__footer__chatIcon" src="https://img.icons8.com/ios/100/000000/communication.png" />
        <div id="unreadMessageCount">
          <p id="unreadMessageCountP">1</p>
        </div>
        <p>Chats</p>
      </div>
      <div class="cems__chatlist__footer__button" onclick="gotoUsers()">
        <img class="chatlist__footer__userIcon" src="https://img.icons8.com/ios/50/000000/user.png" />
        <p>Users</p>
      </div>
    </div>
  </div>
  <div id="cems__chatbox__chatting" class="cems__hide__section">
    <div class="cems__chatbox__header">
      <div id="cems__chatbox_backButton--header" onclick="backToChatList()">
        <img src="https://img.icons8.com/ios-filled/100/000000/left.png" />
      </div>

      <div class="cems__friend__icon">
        <p>F</p>
      </div>
      <div class="cems__chatbox__content--header">
        <h4 class="cems__chatbox__heading--header">Friend's Name</h4>
      </div>
    </div>
    <div id="cems__chatbox__messages">
      <div>
        <div class="cems__messages__item cems__messages__item--visitor">Can you let me talk to the support?</div>
        <div class="cems__messages__item cems__messages__item--operator">Sure!</div>
      </div>
    </div>
    <div class="cems__chatbox__footer">
      <img
        src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/64/000000/external-attachment-user-interface-kmg-design-outline-color-kmg-design.png"
      />
      <input type="text" placeholder="Write a message..." />
      <button class="cems__chatbox__send--footer">Send</button>
    </div>
  </div>
</div>
<div class="cems__chatbox__button cems__hide__section" id="cems__chatbox__button">
  <button>button</button>
</div>
</div>
<div id="bs__root"></div>
<div id="cems__log" hidden></div>
<!-- <button id="cems__myBtn">Open Modal</button> -->
<div id="cems__myModal" class="cems__modal">
<div id="cems__callsection">
  <div id="cems__call__content">
    <h3 class="cems__calltype">Outgoing Call</h3>
    <div class="cems__callImage">
      <img class="cems__callImage" src="https://img.icons8.com/ios/50/000000/user-male-circle.png" />
      <h4>Calling Shozon</h4>
      <div class="cems__callButtons">
        <button class="cems__reciveBtn">Recive</button>
        <button class="cems__cancleBtn">Cancle</button>
      </div>
    </div>
  </div>
</div>
</div>`;
// Your CSS as text

var fontAdd = document.createElement("link");
fontAdd.rel = "stylesheet";
fontAdd.href =
  "https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap";

var cssstyles = `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  *,
  html {
    --primaryGradient: linear-gradient(93.12deg, #ffffff 0.52%, #f0e9e9 100%);
    --secondaryGradient: linear-gradient(268.91deg, #fefeff -2.14%, #ffffff 99.69%);
    --primaryBoxShadow: 0px 10px 15px rgba(105, 102, 102, 0.1);
    --secondaryBoxShadow: 0px -10px 15px rgba(0, 0, 0, 0.1);
    --light: 300;
    --regular: 400;
    --semiBold: 600;
    --extraLight: 300;
    --italic: 300;
    --primary: #0998f5;
  }
  
  /* 300;0,400;0,600;1,300 */
  
  body {
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    font-size: 100%;
   
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0);
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(204, 204, 204);
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(177, 174, 174);
  }
  
  /* CHATBOX
  =============== */
  .cems__chatbox {
    position: absolute;
    bottom: 30px;
    right: 30px;
  }
  
  /* CONTENT IS CLOSE */
  .cems__chatbox__support {
    display: flex;
    flex-direction: column;
    background: #eee;
    width: 300px;
    height: 350px;
    z-index: -123456;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  
  /* CONTENT ISOPEN */
  .cems__chatbox--active {
    transform: translateY(-40px);
    z-index: 123456;
    opacity: 1;
  }
  
  /* BUTTON */
  .cems__chatbox__button {
    text-align: right;
    position: fixed;
    right: 26px;
    bottom: 16px;
  }
  div#cems__chatbox__button button {
    background: #03a9f4;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 500px;
    box-shadow: rgb(0 0 0 / 39%) 0px 0px 15px;
  }
  img.arrowIcon {
    padding-top: 6px;
  }
  .cems__chatbox__button img {
    transition: transform 0.3s;
    width: 40px;
  }
  /* .cems__chatbox__button:hover img {
    transform: rotate(22deg);
  } */
  
  /* HEADER */
  .cems__chatbox__header {
    position: sticky;
    top: 0;
    background: orange;
  }
  
  /* MESSAGES */
  #cems__chatbox__messages {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    /* flex-direction: column-reverse; */
    min-height: 70%;
    background: white;
  }
  
  .cems__messages__item {
    background: orange;
    max-width: 60.6%;
    width: fit-content;
  }
  
  .cems__messages__item--operator {
    margin-left: auto;
  }
  
  .cems__messages__item--visitor {
    margin-right: auto;
  }
  
  /* FOOTER */
  .cems__chatbox__footer {
    position: sticky;
    bottom: 0;
  }
  
  .cems__chat__callicon img {
    width: 25px;
    cursor: pointer;
    float: right;
  }
  .cems__chat__callicon {
    width: 113px;
  }
  div#cems__chatbox_backButton--header {
    width: 36px;
  }
  img.cems__chat__audioCallicon {
    transform: rotate(-87deg);
  }
  .cems__chat__callicon img:last-child {
    margin-right: 20px;
  }
  .cems__chatbox__support p {
    margin-bottom: 0;
  }
  .cems__chatbox__support {
    background: #f9f9f9;
    height: 438px;
    width: 390px;
    box-shadow: rgb(0 0 0 / 39%) 0px 0px 15px;
    border-radius: 20px;
    position: fixed;
    right: 32px;
    bottom: 70px;
    overflow: hidden;
  }
  
  /* HEADER */
  .cems__chatbox__header {
    background: #eff1f1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    justify-content: space-between;
    border-bottom: 1px solid #e8e8e8;
    min-height: 75px;
  }
  .cems__chat__details {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .cems__chatbox__image--header {
    margin-right: 10px;
  }
  
  .cems__chatbox__heading--header {
    font-size: 18px;
    line-height: 18px;
    font-weight: 600;
  }
  
  .cems__chatbox__image--header img {
    width: 33px;
    margin-bottom: -6px;
  }
  .cems__chatbox__description--header {
    font-size: 0.9rem;
    color: white;
  }
  /* Messages */
  #cems__chatbox__messages {
    padding: 0 20px;
  }
  
  .cems__messages__item {
    margin-top: 10px;
    background: #e0e0e0;
    padding: 8px 12px;
    max-width: 100%;
    font-size: 13px;
  }
  .cems__messages__item--operator_image {
    margin-left: auto;
    padding: 0;
    background: none;
  }
  .cems__messages__item--operator_image img {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  
  .cems__messages__item--visitor,
  .cems__messages__item--typing {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .cems__messages__item--visitor_image {
    padding: 0;
    background: none;
  }
  .cems__messages__item--visitor_image img {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  
  .cems__messages__item--operator {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background: var(--primary);
    color: white;
  }
  .cems__messages__time-operator {
    margin-left: auto;
    font-size: 7px;
    margin-top: 4px;
    color: gray;
  }
  .cems__messages__time-visitor {
    font-size: 7px;
    margin-top: 4px;
    color: gray;
  }
  /* FOOTER */
  .cems__chatbox__footer,
  .cems__chatbox__chatlist__footer,
  .cems__chatbox__footer_inmessage {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
    background: #eff1f1;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    z-index: 99999999999;
  }
  .cems__chatbox__footer_inmessage {
    padding: 13px 10px;
  }
  .cems__chatbox__chatlist__footer {
    justify-content: space-around;
    margin-top: 0;
  }
  .cems__chatlist__footer__button {
    align-items: center;
    text-align: center;
    cursor: pointer;
    position: relative;
  }
  .cems__chatlist__footer__button p {
    padding: 4px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 12px;
  }
  .cems__chatlist__footer__button img {
    width: 25px;
    margin-bottom: -6px;
  }
  #unreadMessageCount {
    display: none;
    position: absolute;
    bottom: 17px;
    right: 4px;
    font-size: 5px;
    width: 13px;
    height: 13px;
    background: black;
    border-radius: 50%;
    color: white;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  #unreadMessageCount p {
    font-size: 10px;
  }
  .cems__chatbox__footer img,
  .cems__chatbox__footer_inmessage img {
    width: 23px;
    cursor: pointer;
  }
  .cems__chatbox__footer_inmessage input {
    border: none;
    padding: 11px 10px;
    border-radius: 30px;
    width: 94%;
    margin: 0px 10px;
    border: 1px solid #dfdbdb;
    font-size: 12px;
  }
  input#cems__input__message:focus-visible {
    outline: none;
  }
  div#cems_send_message {
    width: 100%;
  }
  div#selectFileShow {
    padding: 10px 10px;
    border-radius: 30px;
    width: 90%;
    margin: 0px 10px;
    border: 1px solid #dfdbdb;
    font-size: 12px;
  }
  div#sendMessageBtn img {
    width: 31px;
  }
  .cems__chatbox__send--footer {
    color: white;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 19px;
    border-radius: 0 27px 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    margin: 0px 15px 0 0;
  }
  button#sendMessageBtn img {
    width: 25px;
  }
  .bs__loader {
    border: 3px solid #f3f3f3;
    border-radius: 50%;
    border-top: 3px solid #3498db;
    width: 26px;
    height: 26px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
  
  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .cems__chatbox__button button,
  .cems__chatbox__button button:focus,
  .cems__chatbox__button button:visited {
    border: none;
    outline: none;
    border-radius: 74px;
    cursor: pointer;
  }
  
  /* Chat aditional css */
  .cems__container h4 {
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
    margin: 0;
  }
  p.cems__onlineText {
    font-size: 10px;
    color: green;
  }
  p.cems__offlineText {
    font-size: 10px;
    color: gray;
  }
  #cems__chatbox_backButton--header img {
    width: 31px;
    justify-content: center;
    align-items: center;
    margin-bottom: -7px;
    margin-right: 11px;
    cursor: pointer;
  }
  div#cems__chatbox__chatting {
    display: flex;
    flex-direction: column;
    background: #f9f9f9;
    height: 430px;
    width: 390px;
    border-radius: 38px;
  }
  div#bs__image_fileSelect {
    position: absolute;
    bottom: 73px;
    background: #eff1f1;
    width: 184px;
    height: auto;
    left: -416px;
    padding: 0 11px;
    border-radius: 11px;
    transition: all 0.1s;
  }
  div#bs__image_fileSelect div {
    margin: 12px 0;
  }
  div#bs__image_fileSelect p {
    display: inline-block;
    margin-left: 10px;
    cursor: pointer;
  }
  div#bs__image_fileSelect img {
    display: inline-block;
    width: 23px;
    cursor: pointer;
  }
  div#bs_input_file_output {
    position: absolute;
    background: #eff1f1;
    min-width: 150px;
    height: 130px;
    bottom: 73px;
    left: -416px;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 15px;
    transition: all 0.1s;
  }
  img#bs_input_file_show_image {
    width: 100px;
    border-radius: 10px;
  }
  div#bs_input_file_show p {
    text-align: center;
    font-size: 12px;
  }
  #selectFileRemoveIcon {
    width: 23px;
    height: 23px;
    transform: rotate(45deg);
    cursor: pointer;
    margin-right: 10px;
  }
  div#bs_input_file_show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cems__hide__section {
    display: none !important;
  }
  div#cems__chatlist__header {
    border-bottom: 1px solid rgb(234, 234, 234);
  }
  .cems__chatlist__content {
    display: block;
    width: 100%;
    border-bottom: 1px solid rgb(234, 234, 234);
    padding-bottom: 8px;
  }
  
  .cems__chatlist__time {
    width: 21%;
    float: right;
    font-size: 6px !important;
  }
  .cems__chatlist_fNameAndMessage {
    width: 79%;
    float: left;
  }
  .cems__chatlist__content p {
    margin: 0px;
    font-size: 13px;
    font-weight: 400;
    width: calc(100% - 50px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 20px;
    color: rgba(20, 20, 20, 0.6);
  }
  .cems__chatlist__time p {
    width: 100%;
    font-size: 11px;
  }
  div#cems__chatlist__header h3 {
    padding: 22px 22px;
    margin: 0px;
    display: inline-block;
    width: 100%;
    text-align: left;
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
  }
  div#cems__all__chatlist {
    height: 306px;
    overflow-y: scroll;
  }
  p.cems__no_found {
    margin-top: 20px;
    margin-left: 17px;
  }
  .cems__chat__list {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 19px;
    cursor: pointer;
  }
  .unseen__message h4 {
    color: rgb(0, 0, 0) !important;
    font-weight: 700 !important;
  }
  .cems__chat__list h4 {
    font-weight: 500;
    text-transform: capitalize;
  }
  .cems__chat__list .chatListLastMessage {
    color: #000000;
  }
  .cems__chat__list:hover {
    background: #cddef7;
  }
  .unseen__message .chatListLastMessage {
    color: #60a5fa;
    font-weight: 700;
    font-size: 12px;
    line-height: 14.06px;
    line-height: 14.06px;
    margin-top: 5px;
  }
  .unseen__message .chatListLastMessageTime {
    color: #7a7a7a;
    font-weight: 400;
    font-size: 10px;
    line-height: 11.72px;
  }
  
  .cems__friend__icon {
    background: #a7baff;
    text-align: center;
    border-radius: 50%;
    color: black;
    width: 48px;
    height: 39px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: -4px 15px 2px -6px;
  }
  .cems__chatbox__content--header {
    margin-left: 10px;
  }
  .cems__chatHead__friend__icon {
    background: #a7baff;
    text-align: center;
    border-radius: 50%;
    min-width: 39px;
    min-height: 39px;
    justify-content: center;
    align-items: center;
    display: flex;
    color: #fcf2f2;
    font-weight: 700;
    font-size: 20px;
    position: relative;
  }
  div#cems__onlineOrOfflineIcon {
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 50%;
    bottom: 0;
    right: 2px;
  }
  .cems__onlineIcon {
    background: #009688;
  }
  .cems__offlineIcon {
    background: #ababab;
  }
  .cems__friend__icon h3 {
    font-weight: 700;
    font-size: 20px;
    color: #fcf2f2;
    margin-bottom: 0;
  }
  
  .cems__modal {
    display: none;
    position: fixed;
    z-index: 555555;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.705);
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  /* Modal Content */
  .cems__modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  /* The Close Button */
  .cems__close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .cems__close:hover,
  .cems__close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  div#cems__callsection {
    width: 96%;
    height: 98%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
  }
  div#cems__call__content {
    position: relative;
    width: 315px;
    height: 385px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background: #ebe7e7;
    border-radius: 10px;
  }
  
  div#cems__call__content h3 {
    top: 20px;
    font-size: 18px;
  }
  .cems__callButtons {
    bottom: 20px;
    width: 100%;
    left: 0;
    z-index: 5555555555555;
  }
  h4#callingType {
    font-size: 13px;
    margin: 6px 0px 20px 0;
  }
  .cems__callButtons img {
    width: 45px !important;
    cursor: pointer;
    margin: 10px;
    padding: 12px;
    border-radius: 50%;
  }
  img.bs__cancleCallBtn {
    background: #ffffff;
    transform: rotate(-90deg);
  }
  img.bs__reciveAudioCall {
    background: #d0e3d2;
    transform: rotate(-90deg);
  }
  img.bs__muteAudio {
    background: white;
  }
  #cems_shareScreenBtn {
    background: white;
  }
  .bs__videoOff {
    background: white;
  }
  .cems__callImage {
    width: 100px;
    background: #b8c9cf;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 39px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 30px;
  }
  .cems__callButtons button {
    padding: 10px;
    margin: 10px;
  }
  
  .cems__callImage img {
    width: 86px;
  }
  .cems__callButtons svg {
    width: 50px !important;
    cursor: pointer;
    margin: 10px;
    padding: 0;
    height: auto;
  }
  /* **********reciveCall************* */
  #cems__recivedcall__content {
    position: relative;
    width: 90%;
    height: 90%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background: rgb(65, 65, 65);
    border-radius: 10px;
  }
  div#cems__call__sender {
    position: absolute;
    width: 19%;
    height: 23%;
    top: 2%;
    right: 2%;
    z-index: 555555555;
    border-radius: 10px;
    border: 1px solid white;
    background: gray;
  }
  
  div#cems__call__reciver div,
  div#cems__call__sender div {
    justify-content: center;
    border-radius: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    color: white;
  }
  div#cems__call__reciver {
    width: 100%;
    height: 100%;
    border-radius: 20px !important;
    z-index: 55555555;
    border: 1px solid white;
    background: gray;
  }
  div#cams__call__timer {
    z-index: 5555555555;
    color: #0f991e;
    font-size: 13px;
    font-weight: bold;
    bottom: 89px;
    margin: 6px 0px 20px 0;
  }
  `;
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = cssstyles;
document.head.appendChild(styleSheet);
let calleeId = "s";
let calleeName = "";
let clickFriendId = "";
let selectFile = undefined;
let unreadMessageId = [];
let inMessages = false;
let rtmClient = null;
let options = {
  channel: "143142",
  uid: 143,
};
let allDetails = {
  userName: "",
  userId: "",
  access_token: "",
};
let newChatList = [];
let chatListData = [];
let friendList = [];

window.addEventListener("beforeunload", function (e) {
  localStorage.setItem(`CemsChatDataFor${allDetails.userId}`, JSON.stringify(chatListData));
});

//   window.onbeforeunload = function(e) {
//     if(newChatList!==[]){
//       return (async () => {
//         await fetch(`https://tradazine.com/api/v1/store-chat-message?text=${JSON.stringify(newChatList)}`, {
//          method: 'POST',
//          headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json',
//            'Authorization': `Bearer ${allDetails.access_token}`
//          }
//        });
//      })();
//     }
//  };

let fetchData = (uid, allMessage = []) => {
  let testd = [];
  allMessage.map((am) => {
    let strStart = am.text[0];
    let strEnd = am.text[am.text.length - 1];
    if (strStart === "[" && strEnd === "]") {
      let parseAm = JSON.parse(am.text);
      parseAm.map((d) => {
        let isa = true;
        testd.map((td) => {
          if (d.id === td.id) {
            td.messages = [...td.messages, ...d.messages];
            isa = false;
          }
        });
        if (isa === true) {
          testd.unshift(d);
        }
      });
    } else {
      console.log(strStart, am.text[am.text.length - 2]);
    }
  });

  let data = JSON.parse(localStorage.getItem(`CemsChatDataFor${uid}`));
  if (data === null) {
    // friendList=[]
    // chatListData=[]
  } else {
    if (data === undefined) {
      chatListData = [];
    } else {
      chatListData = data;
    }
  }
  // chatListData=testd
  // addchangeUser(uid);
};
let addchangeUser = (uid) => {
  if (uid === "vexpo-242") {
    let withoutData = chatListData.filter((data) => data.chat_uid !== uid);
    let alData = chatListData.find((data) => data.chat_uid == "vexpo-243");
    chatListData = withoutData;
    if (alData === undefined) {
      chatListData.push({
        name: "user4",
        id: "vexpo-243",
        messages: [],
      });
    }
  } else {
    let withoutData = chatListData.filter((data) => data.chat_uid != uid);
    let alData = chatListData.find((data) => data.chat_uid == "vexpo-242");
    chatListData = withoutData;
    if (alData === undefined) {
      chatListData.push({
        name: "User3",
        id: "vexpo-242",
        messages: [],
      });
    }
  }
};

let getCurrentDateTime = () => {
  var myDate = new Date();

  let daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let monthsList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Aug", "Oct", "Nov", "Dec"];

  let date = myDate.getDate();
  let month = monthsList[myDate.getMonth()];
  let year = myDate.getFullYear();
  let day = daysList[myDate.getDay()];

  let today = `${date} ${month} ${year}`;

  let amOrPm;
  let twelveHours = function () {
    if (myDate.getHours() > 12) {
      amOrPm = "PM";
      let twentyFourHourTime = myDate.getHours();
      let conversion = twentyFourHourTime - 12;
      return `${conversion}`;
    } else {
      amOrPm = "AM";
      return `${myDate.getHours()}`;
    }
  };
  let hours = twelveHours();
  let minutes = myDate.getMinutes();

  let currentTime = `${hours}:${minutes} ${amOrPm}`;
  let currentDateTime = `${today} | ${currentTime}`;
  return currentDateTime;
};
class agoraFuntionality {
  constructor(getModalSection) {
    this.sections = {
      getModalSection: getModalSection,
      getCallingType: null,
    };
    this.localTracks = {
      localAudioTrack: null,
      localVideoTrack: null,
    };
    this.mute = false;
    this.rtcClient = null;
    this.uid = "";
    this.userName = "";
    this.appId = "";
    this.rtmToken = "";
    this.channelId = "";
    this.rtcToken = "";
    this.rtmClient = "";
    this.status = "ofline";
    this.remoteInvitation = null;
    this.localInvitation = null;
    this.rington = "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3";
    this.collerTune = "https://audio.jukehost.co.uk/2OdnBtHkBRWn76r6YiNesNpb5PTNEg5b";
    this.tokenUrl = "http://47.241.99.15:5000";
    this.appCertificate = "";
  }
  hidecall(res) {
    this.stopCallerTune();
    this.stopRington();
    this.sections.getCallingType.innerHTML = res;
    document.getElementsByClassName("cems__callButtons")[0].style.display = "none";
    setTimeout(() => {
      this.status = "online";
      this.sections.getModalSection.style.display = "none";
    }, 1000);
  }
  playRington() {
    this.rington.play();
  }
  stopRington() {
    this.rington.pause();
    this.rington.currentTime = 0;
  }
  playCallerTune() {
    this.callerTune.play();
  }
  stopCallerTune() {
    this.callerTune.pause();
    this.currentTime = 0;
  }
  async logout() {
    this.rtmClient.logout().then(() => {
      document.getElementById("cems__chatbox__button").classList.add("cems__hide__section");
    });
  }
  async login(uid, name, appId, access_token) {
    this.uid = uid;
    this.appId = appId;
    this.userName = name;
    this.rtmToken = await this.createAgoraRtmToken(uid);
    this.rtmClient = AgoraRTM.createInstance(appId);
    rtmClient = this.rtmClient;
    await this.rtmClient
      .login({ uid, token: this.rtmToken })
      .then(async () => {
        // let data=await getChatData(access_token,uid)
        this.peerMessageRecive();
        this.RemoteInvitationReceived();
        this.status = "online";
        allDetails.userName = name;
        allDetails.userId = uid;
        allDetails.access_token = access_token;
        document.getElementById("cems__chatbox__button").classList.remove("cems__hide__section");
        fetchData(uid);
        gotoChatList();
        friendList = await getFriendListData(access_token, uid);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  init(uid, name, appId, access_token, rington, callerTune, tokenUrl, appCertificate) {
    if (tokenUrl != undefined) {
      this.tokenUrl = tokenUrl;
    }
    if (rington != undefined) {
      this.rington = new Audio(rington);
    }
    if (callerTune != undefined) {
      this.callerTune = new Audio(callerTune);
    }
    this.appCertificate = appCertificate;
    this.login(uid.toString(), name, appId, access_token);
  }
  async createAgoraRtmToken(userName) {
    try {
      const response = await axios.get(
        `${this.tokenUrl}/token/?username=${userName}&channelName=${userName}&appID=${this.appId}&appCertificate=${this.appCertificate}`
      );
      return await response.data.rtmToken;
    } catch (error) {
      console.error(error);
    }
  }
  async createAgoraRtcToken(id) {
    this.callid = id;
    console.log(`${this.tokenUrl}/rtc-uid-token/?uid=${id}&channelName=${this.channelId}&appID=${this.appId}&appCertificate=${this.appCertificate}`);
    try {
      const response = await axios.get(
        `${this.tokenUrl}/rtc-uid-token/?uid=${id}&channelName=${this.channelId}&appID=${this.appId}&appCertificate=${this.appCertificate}`
      );
      return await response.data.token;
    } catch (error) {
      console.error(error);
    }
  }
  async sendPeerMessage(message, peerId) {
    console.log(message);
    scrollBottom();
    if (message.type == "call") {
      return;
    }
    await this.rtmClient.sendMessageToPeer({ text: message.text }, peerId.toString()).then((sendResult) => {
      if (sendResult.hasPeerReceived) {
        console.log("message recived");
      } else {
        console.log("message send");
      }
    });
  }
  async checkPeerOnlineStatus(peerId) {
    return await this.rtmClient.queryPeersOnlineStatus([peerId.toString()]).then((res) => {
      return res[peerId.toString()];
    });
  }
  peerMessageRecive() {
    this.rtmClient.on("MessageFromPeer", async function (message, peerId, proper) {
      let withOutUnreadMessageId = unreadMessageId.filter((id) => id != peerId);
      unreadMessageId = [...withOutUnreadMessageId, peerId];

      message.messageType !== "call" && reciveMessageStoreAndOutput(message, peerId);
      chatbox.unreadMessageCountDisplay();
      chatbox.inChatList = true;
      chatbox.chatListOrUserEffect();
    });
  }
  scrollTop() {
    var chatEl = document.getElementById("cems__chatbox__messages");
    chatEl.scrollTop = chatEl.scrollHeight;
  }
  audioVideoCall = async (type) => {
    if (this.localInvitation != null) {
      this.localInvitation.removeAllListeners();
      this.localInvitation = null;
    }
    this.localInvitation = this.rtmClient.createLocalInvitation(calleeId.toString());

    this.localInvitationEvents();
    this.channelId = this.uid;
    this.localInvitation._channelId = this.uid;
    this.localInvitation._content = type;
    this.calltype = type;
    this.localInvitation.send();
    this.sections.getModalSection.innerHTML = outgoinCallOutput(type);
    this.sections.getCallingType = document.getElementById("callingType");
    this.status = "busy";
    this.sections.getModalSection.style.display = "flex";
    sendMessage(calleeId, { text: `You gave ${calleeName} a ${type} call `, type: "call" });
    this.rtcToken = await this.createAgoraRtcToken(1);
    this.joinReciveCallReciver(this.calltype);
  };

  localInvitationEvents = () => {
    // Send call invitation

    this.localInvitation.on("LocalInvitationReceivedByPeer", (r) => {
      this.sections.getCallingType.innerHTML = `Calling ${calleeName}`;
      this.playCallerTune();
    });
    this.localInvitation.on("LocalInvitationAccepted", (r) => {
      this.stopCallerTune();
      this.joinReciveCallSender(this.calltype);
      recivedCallOutput(this.calltype);
    });

    this.localInvitation.on("LocalInvitationCanceled", (r) => {
      console.log("LocalInvitationCanceled" + r);
    });

    this.localInvitation.on("LocalInvitationRefused", (r) => {
      this.hidecall(`${calleeName} busy now`);
    });
    this.localInvitation.on("LocalInvitationFailure", (r) => {
      this.hidecall(r);
    });
  };

  cancelOutgoingCall() {
    this.localInvitation.cancel();
    this.stopCallerTune();
    this.status = "online";
    this.sections.getModalSection.style.display = "none";
  }

  async RemoteInvitationReceived() {
    this.rtmClient.on("RemoteInvitationReceived", async (remoteInvitation) => {
      if (this.status != "online") {
        remoteInvitation.refuse();
        return;
      }
      if (this.remoteInvitation != null) {
        this.remoteInvitation.removeAllListeners();
        this.remoteInvitation = null;
      }
      this.remoteInvitation = remoteInvitation;
      this.channelId = remoteInvitation._channelId;
      this.rtcToken = await this.createAgoraRtcToken(2);
      this.calltype = remoteInvitation._content.toLowerCase();
      this.caller = friendList.find((f) => f.chat_uid === remoteInvitation.callerId);
      incomingCallOutput(this.caller.name, this.calltype);
      this.playRington();
      this.sections.getCallingType = document.getElementById("callingType");
      this.status = "busy";
      this.sections.getModalSection.style.display = "flex";
      this.peerEvents();
      reciveMessageStoreAndOutput({ text: `${this.caller.name} called You`, type: "call" }, remoteInvitation.callerId);
      this.joinReciveCallReciver(this.calltype);
    });
  }

  peerEvents = () => {
    this.remoteInvitation.on("RemoteInvitationReceived", (r) => {
      console.log("RemoteInvitationReceived" + r);
    });
    this.remoteInvitation.on("RemoteInvitationAccepted", (r) => {
      this.stopRington();
      this.joinReciveCallSender(this.calltype);
      recivedCallOutput(this.calltype);
    });
    this.remoteInvitation.on("RemoteInvitationCanceled", (r) => {
      this.hidecall(`${this.caller.name} canceled the call`);
    });
    this.remoteInvitation.on("RemoteInvitationRefused", (r) => {
      // this.hidecall();
      console.log("RemoteInvitationRefused " + r);
    });
    this.remoteInvitation.on("RemoteInvitationFailure", (r) => {
      // this.hidecall(r);
    });
  };
  cancelIncomingCall() {
    this.remoteInvitation.refuse();
    this.status = "online";
    this.sections.getModalSection.style.display = "none";
  }
  reciveIncomingCall() {
    this.remoteInvitation.accept();
  }
  // ********** video *************

  async joinReciveCallReciver(type) {
    this.rtcClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    this.rtcClient.on("user-published", async (user, mediaType) => {
      await this.rtcClient.subscribe(user, mediaType);
      console.log("subscribe success");
      if (type == "video") {
        if (mediaType === "video") {
          const remoteVideoTrack = user.videoTrack;
          const fricon = document.getElementById("cems__call__reciver");
          remoteVideoTrack.play(fricon);
        }
      }

      if (mediaType === "audio") {
        const remoteAudioTrack = user.audioTrack;
        remoteAudioTrack.play();
      }
      this.rtcClient.on("user-unpublished", async (user, mediaType) => {
        console.log("unpublish", user, mediaType);
      });
      this.rtcClient.on("user-info-updated", async (user, msg) => {
        console.log("updated", user, msg);
      });
      this.rtcClient.on("user-left", async (user, res) => {
        this.localTracks.localAudioTrack.close();
        this.localTracks.localVideoTrack && this.localTracks.localVideoTrack.close();
        this.localTracks.screenVideoTrack && this.localTracks.screenVideoTrack.close();
        // Leave the channe.
        await this.rtcClient.leave();
        this.sections.getModalSection.style.display = "none";
        this.status = "online";
        clearInterval(callInterval);
        mute = false;
      });
    });
  }
  async joinReciveCallSender(type) {
    await this.rtcClient.join(this.appId, this.channelId, this.rtcToken, this.callid);
    this.localTracks.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    if (type == "video") {
      this.localTracks.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
      await this.rtcClient.publish([this.localTracks.localAudioTrack, this.localTracks.localVideoTrack]);
      const mycon = document.getElementById("cems__call__sender");
      this.localTracks.localVideoTrack.play(mycon);
    } else {
      await this.rtcClient.publish([this.localTracks.localAudioTrack]);
    }

    console.log("publish success!");
  }

  muteAudio() {
    this.localTracks.localAudioTrack.close();
  }
  async unmuteAudio() {
    this.localTracks.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    await this.rtcClient.publish([this.localTracks.localAudioTrack]);
  }
  async screenshareOn() {
    this.localTracks.screenVideoTrack = await AgoraRTC.createScreenVideoTrack();
    if (this.localTracks.localVideoTrack) {
      await this.rtcClient.unpublish([this.localTracks.localVideoTrack]);
      this.localTracks.localVideoTrack.close();
    }
    await this.rtcClient.publish([this.localTracks.screenVideoTrack]);
    const mycon = document.getElementById("cems__call__sender");
    this.localTracks.screenVideoTrack.play(mycon);
    let getscreenShareBtn = document.getElementById("cems_shareScreenBtn");
    getscreenShareBtn.src = `https://img.icons8.com/ios-filled/80/0998f5/screensharing.png`;
    this.localTracks.screenVideoTrack.on("track-ended", async () => {
      screenshare();
    });
  }
  async screenshareOff() {
    this.rtcClient.unpublish([this.localTracks.screenVideoTrack]);
    this.localTracks.screenVideoTrack.close();
    this.localTracks.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
    await this.rtcClient.publish([this.localTracks.localVideoTrack]);
    const mycon = document.getElementById("cems__call__sender");
    this.localTracks.localVideoTrack.play(mycon);
  }
  async leaveReciveCall() {
    this.localTracks.localVideoTrack && this.localTracks.localVideoTrack.close();
    this.localTracks.screenVideoTrack && this.localTracks.screenVideoTrack.close();
    this.localTracks.localAudioTrack.close();
    // Leave the channel.
    await this.rtcClient.leave();
    this.sections.getModalSection.style.display = "none";
    this.status = "online";
    clearInterval(callInterval);
    mute = false;
  }
  fileOrBlobToDataURL = (obj, cb) => {
    var a = new FileReader();
    a.readAsDataURL(obj);
    a.onload = function (e) {
      cb(e.target.result);
    };
  };
  blobToImage = (blob, cb) => {
    this.fileOrBlobToDataURL(blob, function (dataurl) {
      var img = new Image();
      img.src = dataurl;
      cb(img);
    });
  };
  reciveFileControl = async (mediaId) => {
    let fileBlob = await rtmClient.downloadMedia(mediaId, {
      onOperationProgress: ({ currentSize, totalSize }) => {
        let downloadPercent = Math.round((currentSize / totalSize) * 50);
        percent = 50 + downloadPercent;
        console.log(percent);
      },
    });
    return fileBlob;
  };
}

let getModalSection = document.getElementById("cems__myModal");
let agoraFunction = new agoraFuntionality(getModalSection);

let cancelOutgoingCall = () => {
  agoraFunction.cancelOutgoingCall();
};
let reciveIncomingCall = () => {
  agoraFunction.reciveIncomingCall();
};
let cancelIncoingCall = () => {
  agoraFunction.cancelIncomingCall();
};
let cancelRecivedCall = () => {
  agoraFunction.leaveReciveCall();
};
let screenShare = false;
let screenshare = () => {
  let getscreenShareBtn = document.getElementById("cems_shareScreenBtn");
  if (screenShare !== false) {
    agoraFunction.screenshareOff();
    getscreenShareBtn.src = `https://img.icons8.com/dotty/80/0998f5/screensharing.png`;
  } else {
    agoraFunction.screenshareOn();
  }
  screenShare = !screenShare;
};
let createRecivedMessageOutput = (message, peerId) => {
  console.log(message);
  let createMessageOutput = document.createElement("div");
  let createTimeOutput = document.createElement("div");
  createTimeOutput.className = "cems__messages__time-visitor";
  createTimeOutput.innerHTML = `${message.time}`;
  if (message.messageType !== "TEXT") {
    let fileLink = message.mediaUrl;
    let fileName = message.mediaName;

    if (message.messageType === "IMAGE") {
      createMessageOutput.className = "cems__messages__item cems__messages__item--visitor_image";
      createMessageOutput.innerHTML = ` <a href="${fileLink}" download target="_blank">
        <img src="${fileLink}" alt="" style="width:125px">
        </a>`;
    } else {
      createMessageOutput.className = "cems__messages__item cems__messages__item--visitor";
      createMessageOutput.innerHTML = ` <a href="${fileLink}" download target="_blank">
        <img src="https://img.icons8.com/carbon-copy/100/000000/file.png" style="width:70px"/><br>
            <a href="${fileLink}" download target="_blank">${fileName}</a>
        </a>`;
    }
  } else {
    createMessageOutput.className = "cems__messages__item cems__messages__item--visitor";
    createMessageOutput.innerHTML = `${message.text}`;
  }
  let className = peerId;
  let isClass = document.getElementsByClassName(`cems__messageFor${className}`)[0];
  if (inMessages == true) {
    if (isClass != undefined) {
      unreadMessageId = unreadMessageId.filter((uid) => uid != peerId);
      isClass.appendChild(createMessageOutput);
      isClass.appendChild(createTimeOutput);
    }
  }
};
let mute = false;
let mutecontrol = () => {
  let getMuteButton = document.getElementById("muteMicrophone");
  if (mute !== false) {
    agoraFunction.unmuteAudio();
    getMuteButton.src =
      "https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/100/0998f5/external-microphone-interface-kiranshastry-lineal-kiranshastry.png";
  } else {
    agoraFunction.muteAudio();
    getMuteButton.src = "https://img.icons8.com/material-rounded/96/000000/block-microphone.png";
  }
  mute = !mute;
};
let videoshare = false;
let videoControl = () => {
  let getVideoMuteBtn = document.getElementById("cems_videomuteBtn");
  if (videoshare == false) {
    getVideoMuteBtn.innerHTML = `<svg class="cems__reciveBtn" onclick=videoControl() xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><path d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z" fill="#e74c3c"></path><g fill="#ffffff"><path d="M41.77143,51.6c-5.42046,0 -9.82857,4.40811 -9.82857,9.82857v49.14286c0,5.42046 4.40811,9.82857 9.82857,9.82857h63.88571c5.42046,0 9.82857,-4.40811 9.82857,-9.82857v-14.33973l16.58571,13.26473c0.88949,0.70766 1.97554,1.075 3.07143,1.075c0.7224,0 1.45263,-0.16516 2.1308,-0.48951c1.70526,-0.81577 2.78348,-2.53769 2.78348,-4.42478v-39.31429c0,-1.88709 -1.07822,-3.61369 -2.78348,-4.43438c-1.70034,-0.81086 -3.72795,-0.58434 -5.20223,0.59509l-16.58571,13.26473v-14.33973c0,-5.42046 -4.40811,-9.82857 -9.82857,-9.82857z"></path></g></g></svg>`;
  } else {
    getVideoMuteBtn.innerHTML = `<svg class="cems__reciveBtn" onclick=videoControl() xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><path d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z" fill="#2aa826"></path><g fill="#ffffff"><path d="M53.93429,61.06c-3.92983,0 -7.12571,3.19588 -7.12571,7.12571v35.62857c0,3.92983 3.19588,7.12571 7.12571,7.12571h46.31714c3.92983,0 7.12571,-3.19588 7.12571,-7.12571v-10.39631l12.02464,9.61693c0.64488,0.51305 1.43227,0.77937 2.22679,0.77937c0.52374,0 1.05316,-0.11974 1.54483,-0.35489c1.23631,-0.59143 2.01802,-1.83983 2.01802,-3.20796v-28.50286c0,-1.36814 -0.78171,-2.61992 -2.01802,-3.21492c-1.23275,-0.58787 -2.70276,-0.42365 -3.77162,0.43144l-12.02464,9.61693v-10.39631c0,-3.92983 -3.19588,-7.12571 -7.12571,-7.12571z"></path></g></g></svg>`;
  }
  videoshare = !videoshare;
};
let recivedCallOutput = (type) => {
  let output = `
    <div id="cems__callsection">
         
         ${
           type == "video"
             ? `<div id="cems__recivedcall__content">
            <div id="cams__call__timer" style='position: absolute; color:white'><span id="minutes"></span>:<span id="seconds"></span></div>
           <div id="cems__call__sender">
            <div>
              <p>Your camera off</p>
            </div>
           </div>
           <div id="cems__call__reciver">
            <div>
              <p>Your friend's camera off</p>
            </div>
            </div>`
             : `<div id="cems__call__content">
           <h3 class="bs__calleeName">${calleeName}</h3>
           <div id="cams__call__timer"><span id="minutes"></span>:<span id="seconds"></span></div>
           <div  class="cems__callImage" >
           <p class="bs__calleIcon">${calleeName.toUpperCase().charAt(0)}</p>
         </div>
           `
         }
         
           <div class="cems__callButtons" ${type === "video" ? "style='position: absolute'" : ""} >
           ${type === "video" ? `<img class='bs__videoOff' src='https://img.icons8.com/material-outlined/96/0998f5/video-call.png'/>` : ""}
           <img class="bs__cancleCallBtn" onclick=cancelRecivedCall() src="https://img.icons8.com/windows/96/FF0000/phone-disconnected--v1.png">
           
          <img id="muteMicrophone" class="bs__muteAudio"  onclick=mutecontrol()  src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/100/0998f5/external-microphone-interface-kiranshastry-lineal-kiranshastry.png"/>
          
           ${
             type == "video"
               ? `<img id="cems_shareScreenBtn"  onclick=screenshare() src="https://img.icons8.com/dotty/80/0998f5/screensharing.png"/>
             `
               : ""
           } </div>
           
         </div>
     </div>
    `;
  // <span id="cems_videomuteBtn">
  //               <svg class="cems__reciveBtn" onclick=videoControl() xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><path d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z" fill="#2aa826"></path><g fill="#ffffff"><path d="M53.93429,61.06c-3.92983,0 -7.12571,3.19588 -7.12571,7.12571v35.62857c0,3.92983 3.19588,7.12571 7.12571,7.12571h46.31714c3.92983,0 7.12571,-3.19588 7.12571,-7.12571v-10.39631l12.02464,9.61693c0.64488,0.51305 1.43227,0.77937 2.22679,0.77937c0.52374,0 1.05316,-0.11974 1.54483,-0.35489c1.23631,-0.59143 2.01802,-1.83983 2.01802,-3.20796v-28.50286c0,-1.36814 -0.78171,-2.61992 -2.01802,-3.21492c-1.23275,-0.58787 -2.70276,-0.42365 -3.77162,0.43144l-12.02464,9.61693v-10.39631c0,-3.92983 -3.19588,-7.12571 -7.12571,-7.12571z"></path></g></g></svg>
  //          </span>
  getModalSection.innerHTML = output;
  callTimer();
};
let callInterval;
let callTimer = () => {
  var sec = 0;
  function pad(val) {
    return val > 9 ? val : "0" + val;
  }
  callInterval = setInterval(function () {
    document.getElementById("seconds").innerHTML = pad(++sec % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
  }, 1000);
};
let outgoinCallOutput = (type) => {
  return `
    <div id="cems__callsection">
         <div id="cems__call__content">
           <h3 class="bs__calleeName">${calleeName}</h3>
           <h4 id='callingType'> Outgoing ${type === "" ? "audio" : "video"} call... </h4>
           <div  class="cems__callImage" >
           <p class="bs__calleIcon">${calleeName.toUpperCase().charAt(0)}</p>
          </div>
           <div class="cems__callButtons" >
           ${type === "video" ? "<img class='bs__videoOff' src='https://img.icons8.com/material-outlined/96/0998f5/video-call.png'/>" : ""}
           <img class="bs__cancleCallBtn" onclick=cancelOutgoingCall() src="https://img.icons8.com/windows/96/FF0000/phone-disconnected--v1.png">
           <img class="bs__muteAudio"  src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/100/0998f5/external-microphone-interface-kiranshastry-lineal-kiranshastry.png"/>
           </div>
         </div>
     </div>
    `;
};

let incomingCallOutput = (name, type) => {
  console.log(type);
  calleeName = name;
  let output = `
    <div id="cems__callsection">
         <div id="cems__call__content">
         <h3 class="bs__calleeName">${calleeName}</h3>
         <h4 id='callingType'> Incoming ${type === "" ? "audio" : "video"} call... </h4>
         <div  class="cems__callImage" >
         <p class="bs__calleIcon">${calleeName.toUpperCase().charAt(0)}</p>
        </div>
           <div class="cems__callButtons">
           ${type === "video" ? "<img class='bs__videoOff' src='https://img.icons8.com/material-outlined/96/0998f5/video-call.png'/>" : ""}
           <img class="bs__cancleCallBtn" onclick=cancelIncoingCall() src="https://img.icons8.com/windows/96/FF0000/phone-disconnected--v1.png">
              <img class="bs__reciveAudioCall" onclick=reciveIncomingCall() src="https://img.icons8.com/windows/96/4FBC87/phone-disconnected--v1.png">
               
           <img class="bs__muteAudio"  src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/100/0998f5/external-microphone-interface-kiranshastry-lineal-kiranshastry.png"/>
             
           </div>
         </div>
     </div>
    `;
  getModalSection.innerHTML = output;
};

let storeMessage = (message, peerId) => {
  let peerDetails = friendList.find((d) => d.chat_uid == peerId);
  chatListDataStore(message, peerId, peerDetails.name, "recive");

  // // newChatListStore(message, peerId, peerDetails.name, "recive");
  createRecivedMessageOutput(message, peerId);
  scrollBottom();
  gotoChatList();
  var chatEl = document.getElementById("cems__chatbox__messages");
  chatEl.scrollTop = chatEl.scrollHeight;
};
let reciveMessageStoreAndOutput = async (message, peerId) => {
  let currentDateTime = getCurrentDateTime();
  if (message.messageType === "TEXT") {
    message = message;
    message.time = currentDateTime;
    storeMessage(message, peerId);
  } else {
    let blob = await agoraFunction.reciveFileControl(message.mediaId);
    await agoraFunction.blobToImage(blob, async (file) => {
      message = {
        text: "",
        messageType: message.messageType,
        time: currentDateTime,
        mediaId: message.mediaId,
        mediaUrl: file.src,
        mediaName: message.fileName,
      };
      storeMessage(message, peerId);
    });
  }
};

let getChatData = async (authToken, uid) => {
  try {
    let response = await axios.get(`https://tradazine.com/api/v1/all-chat-message/${uid}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    return await response;
  } catch (err) {
    console.error(err);
  }
};
let getFriendListData = async (authToken, uid) => {
  if (authToken === null) {
    let friendList = [
      { chat_uid: "user1@gmail.com", name: "user1@gmail.com" },
      { chat_uid: "user2@gmail.com", name: "user2@gmail.com" },
      { chat_uid: "user3@gmail.com", name: "user3@gmail.com" },
      { chat_uid: "user4@gmail.com", name: "user4@gmail.com" },
    ];
    console.log(friendList, uid);

    friendList = friendList.filter((d) => d.chat_uid != uid);
    console.log(friendList);
    return friendList;
  }
  try {
    let response = await axios.get(`https://tradazine.com/api/v1/get-all-users`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    let friendlist = await response.data.data.filter((d) => d.chat_uid != uid);
    let isTecnicalHelp = friendList.find((f) => f.chat_uid === "tecnicalhelp");
    if (isTecnicalHelp === undefined) {
      friendlist.push({
        id: "technicalhelp",
        chat_uid: "technicalhelp",
        name: "technicalhelp",
      });
    }
    return await friendlist;
  } catch (err) {
    console.error(err);
  }
};
let chatListsDiv = document.getElementById("cems__all__chatlist");
let chatboxChattingDiv = document.getElementById("cems__chatbox__chatting");
let chatlistHeaderText = document.getElementById("cems__chatlist__header__text");
let chatboxMessagesDiv = document.getElementById("cems__chatbox__messages");

let scrollBottom = () => {
  var chatEl = document.getElementById("cems__chatbox__messages");
  chatEl.scrollTop = chatEl.scrollHeight;
};
let usersToggle = (data) => {
  let element = `
    <div class="cems__chat__list" id='${data.chat_uid}' onclick={showMesseges(this.id)}>
    <div class="cems__friend__icon">
      <p>${data.name.toUpperCase().charAt(0)}</p>
    </div>
    <div class="cems__chatlist__content">
      <h4 class="cems__chatlist__friendName">${data.name}</h4>
    </div>
  </div>
    `;
  return (chatListsDiv.innerHTML += element);
};
let chatsToggle = (data) => {
  let lastMessageDetails = data.messages.pop();
  console.log(lastMessageDetails);
  let lastMessage = "";
  if (lastMessageDetails != undefined) {
    data.messages.push(lastMessageDetails);
    if (lastMessageDetails.messageType == 2) {
      if (lastMessageDetails.text.substring(0, 27) === "FiLe-https://tradazine.com/") {
        lastMessage = `You : Send a file`;
      } else {
        lastMessage = `You : ${lastMessageDetails.text}`;
      }
    } else {
      if (lastMessageDetails.type !== "TEXT") {
        lastMessage = ` Send a file`;
      } else {
        lastMessage = lastMessageDetails.text;
      }
    }
  }

  let isUnread = unreadMessageId.find((id) => id == data.chat_uid);
  let setclass = "";
  if (isUnread != undefined) {
    setclass = "unseen__message";
  }
  let timeStamp = "";
  if (lastMessageDetails !== undefined) {
    if (lastMessageDetails.timeStamp !== null && lastMessageDetails.timeStamp !== undefined) {
      timeStamp = lastMessageDetails.timeStamp.split("|")[1];
    }
  }

  let element = `
    <div class="cems__chat__list ${setclass}" id='${data.chat_uid}' onclick={showMesseges(this.id)}>
      <div class="cems__friend__icon">
        <h3>${data.name.toUpperCase().charAt(0)}</h3>
      </div>
      <div class="cems__chatlist__content">
        <div class="cems__chatlist_fNameAndMessage">
          <h4 class="cems__chatlist__friendName">${data.name}</h4>
          <p class="chatListLastMessage"> ${lastMessage}</p>
        </div>
        <div class="cems__chatlist__time">
         <p  class="chatListLastMessageTime"> ${timeStamp}</p>
        </div>
      </div>
      
    </div>
    `;
  return (chatListsDiv.innerHTML += element);
};
let gotoChatList = () => {
  let className = calleeId;
  chatListsDiv.innerHTML = "";
  chatlistHeaderText.innerText = "Chats";
  if (chatListData.length < 1) {
    chatListsDiv.innerHTML = `<p class="cems__no_found">No Chats found</p>`;
  } else {
    chatListData.map((data) => {
      chatsToggle(data);
    });
  }
};
let gotoUsers = () => {
  chatbox.gotoUsers();
  chatListsDiv.innerHTML = "";
  chatlistHeaderText.innerText = "Users";
  if (friendList.length < 1) {
    chatListsDiv.innerHTML = `<p class="cems__no_found">No Friend found</p>`;
  } else {
    friendList.map((data) => {
      usersToggle(data);
    });
  }
};
async function showMesseges(id) {
  inMessages = true;
  let exactData = chatListData.find((data) => data.chat_uid == id);
  if (exactData == undefined) {
    exactData = friendList.find((data) => data.chat_uid == id);
    exactData.messages = [];
  }
  calleeId = exactData.chat_uid;
  unreadMessageId = unreadMessageId.filter((id) => id != exactData.chat_uid);
  calleeName = exactData.name;

  chatboxChattingDiv.innerHTML = chatboxChating(exactData);
  sendMessageWithEnterKey();
  chatbox.gotoChat();
  filesend();
  imageAndFileQuery();
  let onlineStatus = await agoraFunction.checkPeerOnlineStatus(exactData.chat_uid);
  let onlineOrOflineIcon = document.getElementById("cems__onlineOrOfflineIcon");
  let onlineOrOflineText = document.getElementById("cems__onlineOrOfflineText");
  if (onlineStatus) {
    onlineOrOflineIcon.classList.remove("cems__offlineIcon");
    onlineOrOflineIcon.classList.add("cems__onlineIcon");
    onlineOrOflineText.classList.remove("cems__offlineText");
    onlineOrOflineText.classList.add("cems__onlineText");
    onlineOrOflineText.innerText = "Active now";
  } else {
    onlineOrOflineIcon.classList.add("cems__offlineIcon");
    onlineOrOflineIcon.classList.remove("cems__onlineIcon");
    onlineOrOflineText.classList.add("cems__offlineText");
    onlineOrOflineText.classList.remove("cems__onlineText");
    onlineOrOflineText.innerText = "Offline";
  }
  if (exactData.messages.length) {
    controlSentOrReciveMessage(exactData);
  }
}

let backToChatList = () => {
  inMessages = false;
  gotoChatList();
  chatbox.backTochatList();
};

let controlSentOrReciveMessage = (data) => {
  console.log(data);
  let chatboxMessages = document.createElement("ul");

  chatboxMessages.innerHTML = "";

  data.messages.map((m) => {
    console.log(m);
    let chatboxMessageTime = (type) => {
      chatboxMessages.innerHTML += `<div class="cems__messages__time-${type}">${m.timeStamp}</div>`;
    };
    let message = m.text;

    if (m.messageType == 2) {
      if (m.type === "FILE" || m.type === "IMAGE") {
        let fileLink = m.mediaUrl;
        let fileName = m.mediaName;
        if (m.type === "IMAGE") {
          chatboxMessages.innerHTML += `<div class="cems__messages__item cems__messages__item--operator_image">
<a href="${fileLink}" download target="_blank">
        <img src="${fileLink}" alt="" style="width:125px">
        </a>
      </div>`;
          chatboxMessageTime("operator");
        } else {
          chatboxMessages.innerHTML += `<div class="cems__messages__item cems__messages__item--operator"  >
      <a href="${fileLink}" download target="_blank">
      <img src="https://img.icons8.com/carbon-copy/100/000000/file.png" style="width:70px"/><br>
      <a href="${fileLink}" download target="_blank" style="color:#ffecec">${fileName}</a>
      </a>
      </div>`;
          chatboxMessageTime("operator");
        }
      } else {
        chatboxMessages.innerHTML += `<div class="cems__messages__item cems__messages__item--operator">${m.text}</div>`;
        chatboxMessageTime("operator");
      }
    } else {
      if (m.type === "FILE" || m.type === "IMAGE") {
        let fileLink = m.mediaUrl;
        let fileName = m.mediaName;
        if (m.type === "IMAGE") {
          chatboxMessages.innerHTML += `<div class="cems__messages__item cems__messages__item--visitor_image" >
          <a href="${fileLink}" download target="_blank">
          <img src="${fileLink}" alt="" style="width:125px">
          </a>
      </div>`;
          chatboxMessageTime("visitor");
        } else {
          chatboxMessages.innerHTML += `<div class="cems__messages__item cems__messages__item--visitor"  >
      <a href="${fileLink}" download target="_blank">
      <img src="https://img.icons8.com/carbon-copy/100/000000/file.png" style="width:70px"/><br>
          <a href="${fileLink}" download target="_blank">${fileName}</a>
      </a>
      </div>`;
          chatboxMessageTime("visitor");
        }
      } else {
        chatboxMessages.innerHTML += `<div class="cems__messages__item cems__messages__item--visitor">${m.text}</div>`;
        chatboxMessageTime("visitor");
      }
    }
  });
  document.getElementById("cems__chatbox__messages").innerHTML = chatboxMessages.innerHTML;
  scrollBottom();
  return chatboxMessages.innerHTML;
};
let getFileByMediaId = (mediaId) => {};
// Convert the Blob to an image file

let finalFileMessageOutput = (time, type, mediaMessage, src) => {
  let createTimeOutput = document.createElement("div");
  createTimeOutput.className = "cems__messages__time-operator";
  createTimeOutput.innerHTML = `${time}`;
  let fileLink = src;
  let fileName = mediaMessage.fileName;
  let createMessageOutputDiv = document.createElement("div");
  if (type === "IMAGE") {
    createMessageOutputDiv.className = "cems__messages__item cems__messages__item--operator_image";
    createMessageOutputDiv.innerHTML = `<a href="${fileLink}"  target="_blank">
    <img src="${fileLink}" alt="" style="width:125px">
    </a>`;
  } else {
    createMessageOutputDiv.className = "cems__messages__item cems__messages__item--operator";
    createMessageOutputDiv.innerHTML = `<a href="${fileLink}"  target="_blank">
    <img src="https://img.icons8.com/carbon-copy/100/000000/file.png" style="width:70px"/><br>
    <a href="${fileLink}" download target="_blank" style="color:#ffecec">${fileName}</a>
    </a>`;
  }
  document.getElementById("cems__chatbox__messages").appendChild(createMessageOutputDiv);
  document.getElementById("cems__chatbox__messages").appendChild(createTimeOutput);
};
let percent;

let createFileMessageOutput = async (mediaMessage, time, type) => {
  let fileBlob = await rtmClient.downloadMedia(mediaMessage.mediaId, {
    onOperationProgress: ({ currentSize, totalSize }) => {
      downloadPercent = Math.round((currentSize / totalSize) * 50);
      percent = 50 + downloadPercent;
      console.log(percent);
    },
  });
  console.log(agoraFunction);
  agoraFunction.blobToImage(fileBlob, async (file) => {
    message = {
      text: "",
      messageType: type,
      time: time,
      mediaId: mediaMessage.mediaId,
      mediaUrl: file.src,
      mediaName: mediaMessage.fileName,
    };
    chatListDataStore(message, clickFriendId, allDetails.userName, "sent");
    removeSelectFile();
    var image = new Image();
    image.src = file.src;
    mediaMessage.description = image;
    console.log(mediaMessage);
    await rtmClient
      .sendMessageToPeer(mediaMessage, clickFriendId)
      .then((sendResult) => {
        if (sendResult.hasPeerReceived) {
          console.log("message recived");
        } else {
          console.log("message send");
        }
        finalFileMessageOutput(time, type, mediaMessage, file.src);
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });

    document.getElementById("sendMessageBtn").disabled = false;
    document.getElementById("sendMessageBtn").innerHTML = '<img src="https://img.icons8.com/material/96/03a9f4/filled-sent.png">';
  });
};
let createTextMessageOutput = (message, time, type) => {
  let createTimeOutput = document.createElement("div");
  createTimeOutput.className = "cems__messages__time-operator";
  createTimeOutput.innerHTML = `${time}`;

  if (type === "IMAGE" || type === "FILE") {
    createFileMessageOutput(message, time, type);
  } else {
    let createMessageOutputDiv = document.createElement("div");
    createMessageOutputDiv.className = "cems__messages__item cems__messages__item--operator";
    createMessageOutputDiv.innerHTML = `${message}`;
    document.getElementById("cems__chatbox__messages").appendChild(createMessageOutputDiv);
    document.getElementById("cems__chatbox__messages").appendChild(createTimeOutput);
  }
};
let sendMessageWithEnterKey = () => {
  let cems__input__message = document.getElementById("cems__input__message");
  cems__input__message.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      console.log("first");
      event.preventDefault();
      sendMessage();
    }
  });
};
let isImage = false;
let sendFileMessage = async (id, message = null) => {
  document.getElementById("sendMessageBtn").disabled = true;
  document.getElementById("sendMessageBtn").innerHTML = '<div class="bs__loader"></div>';
  id = clickFriendId;
  let currentDateTime = getCurrentDateTime();
  const fileToBlob = async (file) => new Blob([new Uint8Array(await file.arrayBuffer())], { type: file.type });
  let blobF = await fileToBlob(selectFile);
  let mediaMessage = await rtmClient.createMediaMessageByUploading(
    blobF,
    {
      messageType: isImage ? "IMAGE" : "FILE",
      fileName: selectFile.name,
    },
    {
      onOperationProgress: ({ currentSize, totalSize }) => {
        percent = Math.round((currentSize / totalSize) * 50);
        console.log(percent);
      },
    }
  );
  console.log(mediaMessage);
  createFileMessageOutput(mediaMessage, currentDateTime, isImage ? "IMAGE" : "FILE");
};
let sendMessage = async (id, message = null) => {
  id = clickFriendId;
  let currentDateTime = getCurrentDateTime();
  console.log(message);
  if (message == null) {
    typeMessage = document.getElementById("cems__input__message").value;
    message = {
      text: typeMessage,
      type: "TEXT",
      time: currentDateTime,
      mediaUrl: undefined,
      mediaId: undefined,
      mediaName: undefined,
    };
    document.getElementById("cems__input__message").value = "";
  }

  if (message.text.length == 0 && selectFile == undefined) {
    alert("write something");
  } else {
    if (selectFile != undefined) {
      sendFileMessage();
    }
    if (message.text.length == 0) {
    } else {
      let exactMessagesData = chatListDataStore(message, id, allDetails.userName, "sent");

      createTextMessageOutput(message.text, currentDateTime, message.type);
      var chatEl = document.getElementById("cems__chatbox__messages");
      chatEl.scrollTop = chatEl.scrollHeight;
      await agoraFunction.sendPeerMessage(message, exactMessagesData.chat_uid);
    }
  }
};
let filesend = () => {
  document.getElementById("cems_file_upload").addEventListener("change", function (e) {
    selectFile = e.target.files[0];
    console.log(selectFile);
    if (selectFile === undefined) {
      document.getElementById(
        "cems_send_message"
      ).innerHTML = `<input id="cems__input__message" type="text" placeholder="Write a message..." autocomplete="off"/>`;
    } else {
      let fileName = e.target.files[0].name;
      let fileExtention = fileName.split(".").pop().toLowerCase();
      if (fileName.length > 30) {
        fileName = fileName.substring(0, 30) + "..." + fileExtention;
      }
      document.getElementById("bs__image_fileSelect").style.left = "-416px";
      document.getElementById("bs_input_file_output").style.left = "16px";
      console.log(fileExtention);
      if (fileExtention === "txt" || fileExtention === "pdf") {
        isImage = false;
        document.getElementById("bs_input_file_show_image").src = "https://img.icons8.com/material-two-tone/96/60A5FA/file.png";
        document.getElementById("bs_input_file_show_name").innerText = fileName;
      } else {
        isImage = true;
        console.log(URL.createObjectURL(selectFile));
        document.getElementById("bs_input_file_show_image").src = URL.createObjectURL(selectFile);
        document.getElementById("bs_input_file_show_name").innerText = "";
      }
    }
  });
};
let chatListDataStore = (message, id, name, type) => {
  console.log(message);

  let messageType;
  if (type == "sent") {
    messageType = 2;
  } else {
    messageType = 3;
  }

  let exactMessagesData = chatListData.find((d) => d.chat_uid == id);
  if (exactMessagesData == undefined) {
    exactMessagesData = friendList.find((data) => data.id == id);
    if (exactMessagesData === undefined) {
      exactMessagesData = friendList.find((data) => data.chat_uid == id);
      exactMessagesData.messages = [
        {
          type: message.messageType,
          messageType: messageType,
          text: message.text,
          timeStamp: message.time,
          username: name,
          mediaUrl: message.mediaUrl,
          mediaId: message.mediaId,
          mediaName: message.mediaName,
        },
      ];
    } else {
      exactMessagesData.messages = [
        {
          type: message.messageType,
          messageType: messageType,
          text: message.text,
          timeStamp: message.time,
          username: name,
          mediaUrl: message.mediaUrl,
          mediaId: message.mediaId,
          mediaName: message.mediaName,
        },
      ];
    }

    chatListData.unshift(exactMessagesData);
    document.getElementById("cems__chatbox__messages").innerHTML = "";
  } else {
    let withoutExactMessagesData = chatListData.filter((d) => d.chat_uid != id);
    if (exactMessagesData.messages.length == 0) {
      document.getElementById("cems__chatbox__messages").innerHTML = "";
    }
    exactMessagesData.messages.push({
      type: message.messageType,
      messageType: messageType,
      text: message.text,
      timeStamp: message.time,
      username: name,
      mediaUrl: message.mediaUrl,
      mediaId: message.mediaId,
      mediaName: message.mediaName,
    });
    chatListData = [exactMessagesData, ...withoutExactMessagesData];
  }
  return exactMessagesData;
};
// let newChatListStore = (message, id, name, type, time) => {
//   let messageType;
//   if (type == "sent") {
//     messageType = 2;
//   } else {
//     messageType = 3;
//   }

//   let exactMessagesData = newChatList.find((d) => d.chat_uid == id);
//   if (exactMessagesData == undefined) {
//     console.log(friendList)
//     exactMessagesData = friendList.find((data) => data.chat_uid == id);

//     exactMessagesData.messages = [
//       {
//         messageType: messageType,
//         text: message.text,
//         timeStamp: time,
//         username: name,
//       },
//     ];
//     newChatList.unshift(exactMessagesData);
//   } else {
//     let withoutExactMessagesData = newChatList.filter((d) => d.id != id);

//     exactMessagesData.messages.push({
//       messageType: 2,
//       text: message.text,
//       timeStamp: time,
//       username: allDetails.userName,
//     });

//     newChatList = [exactMessagesData, ...withoutExactMessagesData];
//   }
// };
let imageAndFileQuery = () => {
  document.getElementById("bs__imageSelect").addEventListener("click", () => {
    document.getElementById("cems_file_upload").setAttribute("accept", "image/*");
  });
  document.getElementById("bs__anyFileSelect").addEventListener("click", () => {
    document.getElementById("cems_file_upload").setAttribute("accept", " .pdf");
  });
};

let showSelectFileVisibility = false;
let removeSelectFile = () => {
  selectFile = undefined;
  document.getElementById("bs_input_file_output").style.left = "-416px";
  showSelectFileVisibility = false;
  document.getElementById("selectFilePlusIcon").style.transform = "rotate(0deg)";
  document.getElementById("bs__image_fileSelect").style.left = "-416px";
};
let showSelectFile = () => {
  if (showSelectFileVisibility == false) {
    showSelectFileVisibility = true;
    console.log(selectFile);
    document.getElementById("bs__image_fileSelect").style.left = "16px";
    document.getElementById("selectFilePlusIcon").style.transform = "rotate(45deg)";
  } else {
    removeSelectFile();
  }
};
let chatboxChating = (data) => {
  clickFriendId = data.chat_uid;
  return `
  <div class="cems__chatbox__header">
    <div class="cems__chat__details">
    <div id="cems__chatbox_backButton--header" onclick=backToChatList()>
    <img src="https://img.icons8.com/material-outlined/96/000000/back--v1.png"/>
    </div>
    <div class="cems__chatHead__friend__icon">
      <p>${data.name.toUpperCase().charAt(0)}</p>
      <div id='cems__onlineOrOfflineIcon' class='cems__offlineIcon'></div>
    </div>
    <div class="cems__chatbox__content--header">
      <h4 class="cems__chatbox__heading--header">${data.name}</h4>
      <p id='cems__onlineOrOfflineText' class="cems__offlineText">Offline</p>
    </div>
  </div>
  <div class="cems__chat__callicon">
  <img  class="cems__chat__VideoCallicon" src="https://img.icons8.com/material-outlined/96/60A5FA/video-call.png" onclick=agoraFunction.audioVideoCall('video')>
  <img class="cems__chat__audioCallicon" src="https://img.icons8.com/windows/96/60A5FA/phone-disconnected--v1.png" onclick=agoraFunction.audioVideoCall('')>
  </div>
</div>
<div id="cems__chatbox__messages" class="cems__messageFor${data.chat_uid}">
  ${!data.messages.length ? `<p class="cems__no_found">No message found</p>` : `<p class="cems__no_found">Loading....</p>`}
</div>
<div id="bs__image_fileSelect">
  <div id="bs__imageSelect">
  <label for="cems_file_upload">
  <img src="https://img.icons8.com/material-outlined/24/60A5FA/add-image.png"/>
  <p>Image</p>
  </div>
</label>
   <div id="bs__anyFileSelect">
   
<label for="cems_file_upload">
   <img src="https://img.icons8.com/ios/50/60A5FA/add-file.png"/>
   <p>File</p>
</label>
  </div>
  
</div>
<div id="bs_input_file_output">
  <img id="selectFileRemoveIcon" src="https://img.icons8.com/windows/96/60A5FA/plus.png " onclick=removeSelectFile()>
  <div id='bs_input_file_show'>
  <img id='bs_input_file_show_image' src=""/>
  <p id='bs_input_file_show_name'></p>
  </div>
</div>

<div class="cems__chatbox__footer_inmessage">
<img id="selectFilePlusIcon" src="https://img.icons8.com/windows/96/60A5FA/plus.png " onclick=showSelectFile()>
<input type="file" id="cems_file_upload"  name="cems_file_upload" style="display:none;">
  
  <div id="cems_send_message">
  <input id="cems__input__message" type="text" placeholder="Write a message..." autocomplete="off"/>
  </div>
  <button id="sendMessageBtn" class="cems__chatbox__send--footer" onclick=sendMessage()>
  <img src="https://img.icons8.com/fluency-systems-regular/96/60A5FA/sent.png" onmouseover="this.src='https://img.icons8.com/fluency-systems-filled/96/60A5FA/sent.png'" onmouseout="this.src='https://img.icons8.com/fluency-systems-regular/96/60A5FA/sent.png'"/>
  </button>
  
</div>
  `;
};

// modal script************************
var modal = document.getElementById("cems__myModal");

// Get the button that opens the modal
var btn = document.getElementById("cems__myBtn");

// Get the <span> element that closes the modal

// When the user clicks the button, open the modal
class InteractiveChatbox {
  constructor(chatToggleButton, chatbox, icons, chatSection, chatList) {
    this.args = {
      chatToggleButton: chatToggleButton,
      chatbox: chatbox,
      chatSection,
      chatList,
    };
    this.icons = icons;
    this.showChatbox = false;
    this.isBack = true;
    this.inChatList = true;
  }

  display() {
    const { chatToggleButton, chatbox } = this.args;
    chatToggleButton.addEventListener("click", () => this.toggleState(chatbox));
    this.chatListOrUserEffect();
    this.unreadMessageCountDisplay();
  }

  chatListOrUserEffect() {
    let chatDiv = document.querySelector(".chatlist__footer__chatIcon");
    let userDiv = document.querySelector(".chatlist__footer__userIcon");
    let unreadMessageCountP = document.getElementById("unreadMessageCountP");
    let unreadMessageCountDiv = document.getElementById("unreadMessageCount");
    if (this.inChatList) {
      chatDiv.src = "https://img.icons8.com/ios-filled/100/000000/communication.png";
      userDiv.src = "https://img.icons8.com/ios/50/000000/user.png";
      // unreadMessageCountDiv.style.background = "white";
      // unreadMessageCountP.style.color = "red";
    } else {
      chatDiv.src = "https://img.icons8.com/ios/100/000000/communication.png";
      userDiv.src = "https://img.icons8.com/ios-filled/100/000000/user.png";
      // unreadMessageCountP.style.color = "white";
      // unreadMessageCountDiv.style.background = "black";
    }
  }
  unreadMessageCountDisplay() {
    let unreadMessageCountDiv = document.getElementById("unreadMessageCount");
    console.log(unreadMessageCountDiv);
    unreadMessageId.length === 0
      ? (unreadMessageCountDiv.style.display = "none")
      : ((unreadMessageCountDiv.style.display = "flex"),
        (unreadMessageCountDiv.innerHTML = `<p id="unreadMessageCountP">${unreadMessageId.length}</p>`));
  }
  gotoUsers() {
    this.inChatList = false;
    this.chatListOrUserEffect();
  }
  toggleState(chatbox) {
    this.showChatbox = !this.showChatbox;
    this.showOrHideChatBox(chatbox, this.args.chatToggleButton);
  }
  chatInitWithUid(chatbox) {
    if (!this.showChatbox) {
      chatbox.classList.remove("cems__chatbox--active");
      this.toggleIcon(false, this.args.chatToggleButton);
    }
    this.showChatbox = true;
    this.showOrHideChatBox(chatbox, this.args.chatToggleButton);
  }
  chatboxoff() {
    this.showChatbox = false;
    this.toggleIcon(false, this.args.chatToggleButton);
    this.args.chatbox.classList.remove("cems__chatbox--active");
  }
  showOrHideChatBox(chatbox, chatToggleButton) {
    if (this.showChatbox) {
      chatbox.classList.add("cems__chatbox--active");
      this.toggleIcon(true, chatToggleButton);
    } else if (!this.showChatbox) {
      chatbox.classList.remove("cems__chatbox--active");
      this.toggleIcon(false, chatToggleButton);
    }
  }

  toggleIcon(showChatbox, chatToggleButton) {
    const { isClicked, isNotClicked } = this.icons;
    if (showChatbox) {
      chatToggleButton.children[0].innerHTML = isClicked;
    } else if (!showChatbox) {
      chatToggleButton.children[0].innerHTML = isNotClicked;
    }
  }
  gotoChat() {
    const { chatSection, chatList } = this.args;
    this.isBack = !this.isBack;
    if (!this.isBack) {
      chatSection.classList.remove("cems__hide__section");
      chatList.classList.add("cems__hide__section");
      var chatEl = document.getElementById("cems__chatbox__messages");
      chatEl.scrollTop = chatEl.scrollHeight;
    }
  }
  backTochatList() {
    this.inChatList = true;
    this.chatListOrUserEffect();
    this.unreadMessageCountDisplay();
    const { chatSection, chatList } = this.args;
    this.isBack = !this.isBack;
    if (this.isBack) {
      chatList.classList.remove("cems__hide__section");
      chatSection.classList.add("cems__hide__section");
    }
  }
}
const chatToggleButton = document.querySelector(".cems__chatbox__button");
const chatContent = document.querySelector(".cems__chatbox__support");
const chatList = document.getElementById("cems__chatbox__chatlists");
const chatSection = document.getElementById("cems__chatbox__chatting");

const icons = {
  isClicked: '<img class="arrowIcon" src="https://img.icons8.com/ios-glyphs/90/ffffff/expand-arrow--v1.png"/>',
  isNotClicked:
    '<img class="chatIcon" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/ffffff/external-chat-multimedia-kiranshastry-lineal-kiranshastry.png"/>',
};
const chatbox = new InteractiveChatbox(chatToggleButton, chatContent, icons, chatSection, chatList);
chatbox.display();
chatbox.toggleIcon(false, chatToggleButton);

let getAuthToken = async (email, pass) => {
  try {
    const response = await axios.post(`https://tradazine.com/api/v1/login?username=${email}&password=${pass}`);
    let res = {
      token: response.data.access_token,
      uid: response.data.chat_uid,
      name: response.data.name,
    };
    allDetails.access_token = response.data.access_token;
    return await res;
  } catch (error) {
    return (res = {
      token: null,
      uid: email,
      name: email,
    });
    console.error(error.message);
  }
};
let bsChatInit = async (email, pass, appId, tokenUrl, appCertificate, rington, callerTune) => {
  backToChatList();
  let authData = await getAuthToken(email, pass);
  await agoraFunction.init(authData.uid, authData.name, appId, authData.token, rington, callerTune, tokenUrl, appCertificate);
};
let chatInitWithUid = (id) => {
  const chatContent = document.querySelector(".cems__chatbox__support");
  chatbox.chatInitWithUid(chatContent);
  inMessages = true;
  showMesseges(id.toString());
};
let logoutFromAgora = () => {
  chatbox.chatboxoff();
  agoraFunction.logout();
};
