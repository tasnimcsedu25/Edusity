import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1713cd36-1bf0-4fc7-8a19-389f477c9bb5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon}/> </h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, question, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li>
                    <img src={mail_icon}/>
                    Contact@stack.dev
                </li>
                <li><img src={phone_icon}/>01717261504</li>
                <li><img src={location_icon}/>34/1a-hartkhola road</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
              <label>Your name</label>  
      <input type="text" name='name' placeholder='Enter your name' required/>
              <label>Phone Number</label>  
              <input type="tel" name='phone'placeholder='Enter your mobile number' required/>
              <label>Write your messages here</label>  
              <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
              <button type='submit' className='btn dark-btn'>Submit new 
                <img src={white_arrow}/>
            </button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
