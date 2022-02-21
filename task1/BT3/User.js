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

      //đối tượng muốn gửi sẽ gọi phương thức nhận tin nhắn
      //với tham số là tin nhắn mình muốn gửi
      objDifferent.receiveMess(this.messSend);
      
  }

  receiveMess(messReceive) {
    
      this.messReceive = messReceive;
    // console.log("hiện diện bên" + this.nameUser +"::"+ objSentMess.nameUser + ':' + messReceive);

  }

  
}

