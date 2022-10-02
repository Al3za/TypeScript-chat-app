import React from "react";
import { useState } from "react";
import Styled from 'styled-components';
import './App.css';


const SendButton = Styled.button`margin: 5px; padding:5px; color: #555; background: papaya-whip`;
const Input = Styled.input`margin: 5px; padding:5px; color: #555; background: papaya-whip`;
const Message= Styled.p`margin: 5px; padding:5px; color: #555; background: papaya-whip`


                         // som parameter på funktionen har vi en objekt som innehåller en till funktionen
const MessageAndButton = (props: { onSend: (message: string) => void, test:(testO:string)=> void }) => { /// detta är en JSX component (MessageAndButton.jsx)


  const [messages, setMessages] = useState('');
  const [testo,setTesto]=useState('ale')
  


  return (
    <>
      <Input value={messages} onChange={(e) => { setMessages(e.target.value) }} /> 
      <SendButton onClick={(e) => props.onSend(messages)}>send</SendButton> 
      <SendButton onClick={(e)=> props.test(testo) }>send</SendButton>
    {/* <SendButton onClick={SendMessage} >send</SendButton> */}
    </>
  )
}


function App() {
  
  //skapa en arrai där vi kan lopa genom messages;
  const [Allmessages, setAllMessages] = useState([]);//en array
  
  const SendMessage = (messages:string) => {
    console.log(`sending ${messages} `)
    //setAllMessages([...AllMessages,mess])//setAllMessages är en array[] som innehåller strängar
  }

  const sendTestMessage = (sms: string)=>{
    console.log(sms)
  }

  return (
    <div className="App">
      <header className="App-header"> my chat app</header>

      <div>
        {Allmessages.map((item, index) => {
          return (
            <Message key={index}> {item} </Message>
          )
        })}
      </div>

      <div className='App-content' >
         <MessageAndButton onSend={SendMessage} test={sendTestMessage}  />  {/*//komponent ska ha stora bokstever */}
      </div>
    </div>
  );
}

export default App;
