import React from 'react';
import { useState } from 'react';
import Styled from 'styled-components';
import './App.css';


const SendButton = Styled.button`margin: 5px; padding:5px; color: #555; background: papaya-whip`;
const Input = Styled.input`margin: 5px; padding:5px; color: #555; background: papaya-whip`;
const Message= Styled.p`margin: 5px; padding:5px; color: #555; background: papaya-whip`

                         /*props är lika med en objekt, som har två functioner som property {onSend:(message:string)=>{}, onCancel: ()=> void }, 
                         som den ena här function har som parameter en string, och den andra ä r tom */
const MessageSendButton = (props: { onSend: (Msg: string) => void /*, onCancel: ()=> void*/ }) => {

  const [message, setMessage] = useState  < string > ('');
 
  
  return (
    <>
        <Input value={message} onChange={(e) => { setMessage(e.target.value) }} />
        <SendButton  onClick={(e)=> props.onSend(message)} > send</SendButton>
    </>
  )
}

function App() {

  const [messages, setMessages] = useState<string[]>([]);

    const sendMessage = (newMessage: string) => {
      setMessages([...messages, newMessage])
    }
   
  
  return (
    <div className="App">
      <header className="App-header">
        
        my chat app
        
      </header>

      <div className='App-content' >
      <div className='MessageList' >
        {
          messages.map((message,index) => {
            return (
              <Message key={index} > {message} </Message>
            )
          })
        }
        
      </div>
        <MessageSendButton onSend={sendMessage} /*onCancel={HandleOnCancel}*/ />
                          {/* här skickar vi mot functionen MessageSendButton en property som skickar meddelandet, och en till fiktiv property för att visa hur det går till */}
      </div>
    </div>
  );
}

export default App;