import { Button } from "@mui/material";

function ContactMe() {
  return (
    <section id="contactMe">
      <div className="section__title ">
        <span className="section__title--number text--orange">03.</span>
        <h1 className="section__title--text">What's Next?</h1>
        <div className="section__title--line"></div>
      </div>
      <h1 className="contact__title">Let's Get In Touch!</h1>
      <p className="contact__para">
        Currently I'm open to new projects, so if you're looking to make your
        dream website come true or just have a question about web development or
        any past projects of mine, my inbox is always open!
      </p>
      <a href="mailto:jacobdennisnandrews@icloud.com">
        <Button className="contact__button" variant="outlined">
          contact me
        </Button>
      </a>
    </section>
  );
}

export default ContactMe;
