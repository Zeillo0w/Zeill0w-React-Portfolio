import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className="contact-form-content">
            <form action="https://formspree.io/mqkrpvny" method="POST">
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="FirstName" />
                    <input type="text" name="Lastme" placeholder="LastName" />
                </div>
                <input type="email" name="email" placeholder="Email" />
                <textarea name="message" placeholder="Message" rows={3}></textarea>
                <button type="submit">SEND</button>
            </form>
        </div>
    );
};

export default ContactForm;
