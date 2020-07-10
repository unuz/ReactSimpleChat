import socketio from 'socket.io-client';

var ws;
export function wsOpen() {
    ws = socketio.connect('httP://localhost:8080/chatting');
    //ws =  new SocketJS("/ws/chatting");
    wsEvt();
}

export function wsEvt() {
    ws.onopen = function (data) {
        //소켓이 열리면 초기화 세팅하기
    }

    ws.onmessage = function (data) {
        var msg = data.data;
        if (msg !== null) {
            document.getElementById("chating").append("<p>" + msg + "</p>");
        }
    }

    document.addEventListener("keypress", function (e) {
        if (e.keyCode === 13) { //enter press
            send();
        }
    });
}

export function chatName() {
    var userName = document.getElementById("userName").val;
    if (userName === null) {
        alert("사용자 이름을 입력해주세요.");
        document.getElementById("userName").focus();
    } else {
        wsOpen();
        document.getElementById("yourName").style.display = "none";
        document.getElementById("yourMsg").style.display = "block";
    }
}

export function send() {
    var uN = document.getElementById("userName").innerText;
    var msg = document.getElementById("chatting").innerText;
    ws.send(uN + " : " + msg);
    document.getElementById("chatting").innerText = "";
}