class User {
  constructor(nameUser) {
    this.nameUser = nameUser;
    this.messSend = "";
    this.messReceive = "";
    this.messWriting = "";
  }

  writeMess(mes) {
    // let mes = prompt("soạn tin nhắn bạn muốn gửi");
    this.messWriting = mes;
  }

  sendMess(objDifferent) {
      this.messSend = this.messWriting;
      objDifferent.receiveMess(this.messSend,this);
  }

  receiveMess(messReceive,objSentMess) {
    
      this.messReceive = messReceive;
    // console.log("hiện diện bên" + this.nameUser +"::"+ objSentMess.nameUser + ':' + messReceive);

  }

  
}

