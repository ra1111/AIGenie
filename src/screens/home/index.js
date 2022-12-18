
import myImage from '../images/whatsapp_chat-5.png';
import myImage1 from '../images/whatsapp_chat-6.png';
import f1 from '../images/f1.png';
import './styles.css';
const IphoneMockup = ({ image, className = '' }) => (

  <div className={`iphone-mockup ${className}`}>
    <div className="iphone14-screen">
      <img src={image} loading="lazy" alt="" className="iphone14-image" />
    </div>
    <img src="images/iPhone14-space-black-min.svg" loading="lazy" alt="" className="iphone-shape" />
  </div>
);
function Home() {
  return (
    <div className="App">
     
      <header className="App-header">
        <header className='new-header'>
      <img src="https://i.imgur.com/jo4e5yX.jpg" className="App-logo" alt="logo" />
      <h2 className="mockup-title">AI GENIE</h2>
      </header>
      <p className="mockup-subtitle">
          With AI Genie, you can get help from a powerful AI directly on your <strong>Whatsapp</strong> chats.This Genie will give you any Three free wishes . Simply message the bot and get instant access to its vast knowledge.
          
          For just $6 per month, you can have access to AI Genie's single user plan. Don't miss out on the convenience and intelligence of this cutting-edge chatbot. Try AI Genie today and see how it can help you with all of your questions and concerns.
           </p>
      
           <div className="mockup-wrapper">
    <IphoneMockup image={f1} />
    <IphoneMockup image= {myImage} className="is-second" />
    <IphoneMockup image= {myImage1} />
  </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Connect Whatsapp
        </a>
      </header>
    </div>
  );
}
export default Home;