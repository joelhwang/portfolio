import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xrgjowoy");
    if (state.succeeded) {
        return <p>Thanks for the question or comment!</p>;
    }
    return ( 
        <form className='contact-form' onSubmit={handleSubmit}>
            <p>Any questions or comments? Leave a message and I'll get back to you as soon as possible.</p>
            <input
                id="email"
                type="email" 
                name="email"
                placeholder="Email"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder="Message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
     );
}
 
export default ContactForm;