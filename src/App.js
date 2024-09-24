
import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/usericon.jpg';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages]= useState([{
      text:"Hi! I am ChatGPT, a state-of-the-art AI which helps you answer all your questions as much as possible" ,
      isBot: true, 
  }]);
  const handleSend=async()=>{
    const res= await sendMsgToOpenAI(input);
    setMessages([
      ...messages,
    { text: input, isBot: false },
  { text : res, isBot: true}])
    console.log(res);
  }
  return (
    <div className="App">
      <div className="sideBar">
          <div className="upperSide">
              <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatGPT</span></div>
              <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
              <div className="upperSideBottom">
                
                <button className="query"><img src={msgIcon} alt="Query" />How to use an API?</button>
              </div>
          </div>
          <div className="lowerSide">
            <div className="listItems"><img src={home} alt="" className="listItemsImg" />Home</div>
            <div className="listItems"><img src={saved} alt="" className="listItemsImg" />Saved</div>
            <div className="listItems"><img src={rocket} alt="" className="listItemsImg" />Upgrade to Pro</div>
          </div>
      </div>
      <div className="main">
        <div className="chats">
            <div className="chat">
              <img className='chatImg' src={userIcon} alt="" /> <p className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ad odio culpa odit voluptatum dolores rerum ut repellat. Voluptas nemo accusantium nihil necessitatibus itaque voluptatibus nam dolorem, eius animi libero.</p>
            </div>
            <div className="chat bot">
              <img className='chatImg' src={gptImgLogo} alt="" /> <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo ratione ex qui nobis quaerat sit, doloribus perferendis, vero beatae adipisci amet repellat aperiam pariatur minus facere. Asperiores, exercitationem eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime explicabo quis fugit maiores ipsa excepturi harum ut placeat cumque recusandae cupiditate, laboriosam eos. Iste voluptate, nihil ipsum quibusdam et a.</p>
            </div>
            {messages.map((message, i)=> 
              <div key={i} className={message.isBot?"chat bot":"chat"}>
              <img className='chatImg' src={message.isBot?gptImgLogo:userIcon} alt="" /> <p className="txt">{ message.text }</p>
            </div>
            )}
        </div>
          <div className="chatFooter">
            <div className="inp">
                <input type="text"  placeholder='Send a message' value={input} onChange={(e)=>{setInput(e.target.value)}}/> <button className="send" onClick={handleSend}><img src={sendBtn} alt="" /></button>
                
            </div>
            <p>ChatGPT may produce incorrect information about people, places and facts</p>
          </div>
      </div>
    </div>
  );
}

export default App;
