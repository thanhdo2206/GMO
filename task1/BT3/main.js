let userA = new User("A");
let userB = new User("B");

const getDOM = function (selector) {
  return document.querySelector(selector);
};

const getDOMs = function (selector) {
  return document.querySelectorAll(selector);
};

let btnA = getDOM(".btn_sendA");
let btnB = getDOM(".btn_sendB");
let inputA = getDOM(".text_messA");
let inputB = getDOM(".text_messB");
let contentMessA = getDOM(".content_messA");
let contentMessB = getDOM(".content_messB");
let btnBoldA = getDOM(".boldA");
let btnItalicA = getDOM(".italicizedA");
let btnBoldB = getDOM(".boldB");
let btnItalicB = getDOM(".italicizedB");


const renderMessReceive = function (userReceive, domContentMess,domInput) {
 
  let messReceiveTagSpan = document.createElement("span");
  let messReceiveTagP = document.createElement("p");

  messReceiveTagSpan.innerText = userReceive.messReceive;
  messReceiveTagSpan.style.cssText = domInput.style.cssText;//gán css style chữ của input cho tin nhắn hiển thị
  messReceiveTagSpan.classList.add("mess_receive");

  messReceiveTagP.appendChild(messReceiveTagSpan);
  domContentMess.appendChild(messReceiveTagP);
};

const renderMessSend = function (userSend, domContentMess,domInput) {
  let messSendTagSpan = document.createElement("span");
  let messSendTagP = document.createElement("p");

  messSendTagP.classList.add("mess_send-container");

  messSendTagSpan.innerText = userSend.messSend;
  messSendTagSpan.style.cssText = domInput.style.cssText;
  messSendTagSpan.classList.add("mess_send");

  messSendTagP.appendChild(messSendTagSpan);
  domContentMess.appendChild(messSendTagP);
};

const send = function (userSend, userReceive, messSend) {
  userSend.writeMess(messSend);
  userSend.sendMess(userReceive);
};

const sendA = function () {
  send(userA, userB, inputA.value);
  renderMessReceive(userB, contentMessB,inputA);
  renderMessSend(userA, contentMessA,inputA);
 
  inputA.value = "";
};

btnA.onclick = sendA;

const sendB = function () {
  send(userB, userA, inputB.value);
  renderMessReceive(userA, contentMessA);
  renderMessSend(userB, contentMessB);
  inputB.value = "";
};

btnB.onclick = sendB;

//in đậm
const boldText = function (domTextMess) {
  
  domTextMess.style.fontWeight = "bold";
};

const boldNoText = function (domTextMess) {
  domTextMess.style.fontWeight = "unset";
};

btnBoldA.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  if (e.target.classList.contains("active"))  boldText(inputA);  
  else boldNoText(inputA);
});

btnBoldB.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  if (e.target.classList.contains("active"))  boldText(inputB);  
  else boldNoText(inputB);
});

//in nghiêng
const ItalicText = function (domTextMess) { 
  domTextMess.style.fontStyle = "italic";
};

const ItalicNoText = function (domTextMess) {
  domTextMess.style.fontStyle = "unset";
};

btnItalicA.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  if (e.target.classList.contains("active"))  ItalicText(inputA);  
  else ItalicNoText(inputA);
});

btnItalicB.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  if (e.target.classList.contains("active"))  ItalicText(inputB);  
  else ItalicNoText(inputB);
});