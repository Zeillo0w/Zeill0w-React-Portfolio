import React from 'react'
import './ContactME.css'
import ContactInfoCard from './ContacInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactME = () => {
    return (
        <section className="contact-container">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl={'/Zeill0w-React-Portfolio/assets/images/mail-icon.png'}
                        text={'yanisgh59@gmail.com'}
                    />
                    <ContactInfoCard
                        iconUrl={'/Zeill0w-React-Portfolio/assets/images/phone-icon.png'}
                        text={'06 27 85 29 87'}

                    />
                </div>



                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactME