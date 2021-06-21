import * as React from "react"
import * as contactStyles from "./contact.module.css"
import emailjs from "emailjs-com"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function Contact() {
  return (
    <section className={contactStyles.contact}>
      <h2>Contact me for questions and inquiries!</h2>
      <div className={contactStyles.contactInfo}>
        <div>
          <p>TEL: +49 159 08167673</p>
          <p className={contactStyles.breakWord}>
            E-Mail: altergott.viktor@gmail.com
          </p>
        </div>
        <div>
          <h4>
            Viktor Altergott<br></br>Lange Äcker 1<br></br>71543 Wüstenrot
            <br></br>
            Deutschland
          </h4>
        </div>
      </div>
      <BootstrapForm />
    </section>
  )
}

class BootstrapForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      from_name: "",
      message: "",
      error: false,
      success: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onError = this.onError.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })

    console.log("input change: " + name + ", " + value)
  }

  handleSubmit(event) {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    event.preventDefault()

    const templateId = "contact-form-victory"

    this.sendFeedback(templateId, {
      from_name: this.state.from_name,
      email: this.state.email,
      message: this.state.message,
    })
  }

  sendFeedback(templateId, variables) {
    emailjs.init("user_I9FyFfX7L39aORKgyjeQW")
    emailjs
      .send("viktory-email", templateId, variables)
      .then(res => {
        //alert('Your message is sent!');
        this.setState(state => {
          // Important: read `state` instead of `this.state` when updating.
          return { success: true }
        })
        return
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(this.onError)
  }

  onError() {
    this.setState(state => {
      // Important: read `state` instead of `this.state` when updating.
      return { error: true }
    })
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <div>
            <h3>
              Es ist ein Fehler aufgetreten, bitte versuchen Sie es nochmal.
            </h3>
          </div>
        </div>
      )
    }

    if (this.state.success) {
      return (
        <div>
          <div>
            <h3>Vielen Dank für Ihre Nachricht!</h3>
          </div>
        </div>
      )
    }

    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
          className={contactStyles.contactForm}
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              className={contactStyles.inputText}
              name="from_name"
              required
              size="lg"
              type="text"
              placeholder="Ihr Name"
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              className={contactStyles.inputText}
              name="email"
              required
              size="lg"
              type="email"
              placeholder="Ihre Email"
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              className={contactStyles.inputText}
              name="message"
              required
              size="lg"
              as="textarea"
              rows={4}
              placeholder="Was ist Ihr Anliegen?"
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Button
            className={contactStyles.submitButton}
            variant="outline-dark"
            size="lg"
            type="submit"
          >
            Abschicken
          </Button>
        </Form>
      </div>
    )
  }
}
