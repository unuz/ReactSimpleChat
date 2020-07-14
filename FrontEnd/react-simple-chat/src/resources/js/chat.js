import SockJS from 'sockjs-client';
import React from 'react';

const sock = new SockJS("http://localhost:8080/chatting");

let codes = "";
sock.onopen = wsOpen;
sock.onmessage = wsEvt;


export function wsOpen() {
    console.log('소켓 OPEN');
    //ws =  new SocketJS("/ws/chatting");
    wsEvt();
}

export function wsEvt() {
    sock.onopen = function (data) {
        console.log('소켓 OPEN : clear');
        //소켓이 열리면 초기화 세팅하기
    }

    sock.onmessage = function (data) {
        console.log('소켓 onmessage');
        console.log('data : ' + data.data);
        var msg = data.data;
        var newLine = React.createElement('p',null,msg);
        if (msg !== null) {
            document.getElementById("chating").append(newLine);
        }
    }
}

export function send() {
    console.log('소켓 send');
    var msg = document.getElementById("chatting").value;
    console.log('msg : ' + msg);
    sock.send(msg);
    document.getElementById("chatting").value = "";
}