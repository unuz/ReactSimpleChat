import React, { Fragment } from 'react';
import { chatName, send } from './resources/js/chat';
import "./App.css";

function App() {
  return (
    <Fragment>
      <div id="container" className="container">
        <h1>채팅</h1>
        <div id="chating" className="chating">
        </div>

        <div id="yourName">
          <table className="inputTable">
            <tr>
              <th>사용자명</th>
              <th>
                <input type="text" name="userName" id="userName" />
              </th>
              <th>
                <button onClick={chatName} id="startBtn">이름 등록</button>
              </th>
            </tr>
          </table>
        </div>
        <div id="yourMsg">
          <table className="inputTable">
            <tr>
              <th>메시지</th>
              <th>
                <input id="chatting" placeholder="보내실 메시지를 입력하세요." />
              </th>
              <th>
                <button onClick={send} id="sendBtn">보내기</button>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
