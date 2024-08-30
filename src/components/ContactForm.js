import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ImageLoader from './ImageLoader';
import classroomImg from '../assets/images/classroom_1.jpg'
import linegraphic from '../assets/images/line-graphic2.png'
import brownTick from '../assets/images/brown-tick.png'


const ContactForm = () => {

  const [showMsgSuccess,setShowMsgSuccess] = useState(false)

 const submitForm = (e) =>{
  e.preventDefault();

  setTimeout(() => {
     setShowMsgSuccess(true);
  }, 2000);

  setTimeout(() => {
    setShowMsgSuccess(false);
  }, 10000);
  
 }

  return (
    
    <div className='contact-form-container' id="contact-form-container" >

       
{showMsgSuccess ? 
<div className='d-flex align-items-center justify-content-center flex-column mt-3'>
  <ImageLoader width="80px" src={brownTick} />
  <p className="mt-3" style={{fontWeight:"600",color:"#884e1c"}}>Message sent successfully</p>
</div>
:
<Form  onSubmit={submitForm} className='contact-form' >
<br></br>
<div className="title mb-3"style={{position:'relative'}}>
<h3 className='mb-3'>Get In Touch</h3> 

<span style={{position:'absolute',top:'90%',left:'5%'}}>
<ImageLoader  src={linegraphic} width='150px' height='8px'/>
</span>


</div>
<br></br>

        

      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label><b>Email address</b></Form.Label>
        <Form.Control type="email" placeholder="xxx@gmail.com"required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><b>Full names</b></Form.Label>
        <Form.Control type="text" placeholder="Osborn Maja"  required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><b>Message</b></Form.Label>
        <Form.Control as="textarea" rows={3}  required/>
      </Form.Group>
    
      <Button className='w-100' variant="primary" type="submit">
        Submit
      </Button>
</Form>
}



<div className="img-contact-us">
<ImageLoader src={classroomImg} width="450px" height="350px"/>  
</div>


    





    </div>
  )
}

export default ContactForm