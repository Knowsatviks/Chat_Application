import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () =>
{
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height="100vh"
            projectID= "1cdc0eb2-dcef-462e-aaef-e3779531703a"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    )
}


export default App;