import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>
        <div className="main" style={{height:"50vh"}}>
                    <h1>Review your past Questions For Enginnering </h1>
                    <h2>2020-2024</h2>
                    <h2>Mech,Cee,</h2>
                </div>
        </Col>
        <Col></Col>
      </Row>
      <h2 style={{textAlign:"center"}} className="h2">Importance of Past Questions </h2>
     
      <Row>
        <Col sm> 
          
         <p>
         <img src="/icon/285679_book_address_icon.png" alt='' style={{width:"50px", height:"50px"}}/><br></br>
          It allows students to familiarize themselves with the exam format, the types of questions asked, and the appropriate time management techniques.
          </p>
          
         </Col>
        <Col sm>
        <p>
           <img src="/icon/299047_address_book_icon.png" alt="" style={{height:"50px",width:"50px"}}/><br></br>
                Furthermore, practicing with past questions helps students identify their strengths and weaknesses, enabling them to focus their revision on areas that require improvement.
            </p>
        </Col>
        <Col sm>
        <p>
                <img src="/icon/285679_book_address_icon.png" alt="" style={{height:"50px",width:"50px"}}/><br></br>
                Studying past papers is a valuable part of exam preparation. It helps keep revision focused on important themes whilst practising exam-style questions.
              </p>
              </Col>
      </Row>
    <h2 className="h2" style={{textAlign: "center"}}>Other 5 Benefits of Doing Past Exam Papers</h2>
    <Row>
        <Col sm>
        <p className="ppp">
              <img src="/icon/6895440.png" alt="" style={{height:"50px",width:"50px"}}/><br></br>
              They Prepare You Psychologically</p>
            <p>Students usually have anxiety when exams are near. Their mind keeps thinking how the exams will look like and if they will get their best grades. Some end up being sick because they cannot manage the pressure within them.</p>
            </Col>
        <Col sm>
        <p className="ppp">
              <img src="/icon/Management_Skill-256.webp" alt="" style={{height:"50px",width:"50px"}}/><br></br>
              It Sharpens Your Skills
              </p>
            <p>The more you practice with past exam questions, the more you sharpen your skills. These papers help you to recall what you have been learning in your class. Besides, it allows you to apply the concepts you have been mastering during your study times.
            </p>
            </Col>
        <Col sm>
        <p className="ppp">
              <img src="/icon/3669470_line_style_ic_icon.png" alt="" style={{height:"50px",width:"50px"}}/><br></br>
              It Helps You to Mark Out Your Weak Area
              </p>
            <p>Have you finished reading your school notes, and do you want to do thorough practice for your upcoming exam? Find past exam papers and utilize them. Try and solve the questions without consulting your class notes.</p>
        </Col>
      </Row>
      <Row>
        <Col sm>
        <p className="ppp">
              <img src="/icon/5986175_area_coronavirus_covid_disease_infection_icon.png" alt=""style={{height:"50px",width:"50px"}}/><br></br>
              It Helps You to Understand the Exam Questions Style</p>
            <p>Exam questions are presented in different formats. Some are multiple-choice questions, while others are in essay form. As a student, you need to familiarize yourself with these different formats to build your confidence.
            </p>
        </Col>
        <Col sm>
        <div className="img1">
        <img src="/image/sutterlin-1362879_640.jpg" alt="" style={{borderRadius:"30px",height:"300px" ,width:"400px"}}/>

        </div> 
        </Col>
        <Col sm>
        <p className="ppp">
              <img src="/icon/work_time_process_workflow-512.webp" alt=""style={{height:"50px",width:"50px"}}/><br></br>
              It Enhances Your Time Management Skills</p>
            <p>Time management is one of the key things to observe when sitting for your exams. It helps you to tackle all the questions and double-check your answers for your best performance. Therefore, it would be wise to share your time amongst all the questions you tested when you get into the exam room.</p>
        </Col>
      </Row>
      
    </Container>
  );
}

export default AutoLayoutExample;