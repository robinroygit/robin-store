import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">contact</h2>

      <iFrame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14873.129421110558!2d77.21178022533438!3d28.52354029221866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f4d9f62005%3A0x3aee569514ba9326!2sDLF%20Avenue%20Saket!5e0!3m2!1sen!2sin!4v1676700645835!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0 " }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iFrame>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xlekbdwv" method="post" className="contact-inputs">
            <input type="text" placeholder="username" name="username" required autoComplete="off" />
            <input type="email" placeholder="email" name="email" required autoComplete="off" />
            <textarea name="message" placeholder="Enter Your Message"  cols="30" rows="10" required autoComplete="off"></textarea>
            <input type="submit" value="send"  />

          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
