import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Apps from "./Image1";
import Apps2 from "./image2";
import Apps3 from "./image3";
import App4 from "./image4";
import App5 from "./image5";


const Main = () =>{
    
    const [pic,  setpic] = useState([
        {
            id:1,
            image:"/past/IMG-20240919-WA0025.jpg2.jpg",
            king:<Apps/>


            
            
        },
        {
            id:2,
            image:"/past/IMG-20240919-WA0026.jpg2.jpg",
            king:<Apps2/> 

        },
        {
            id:3,
            image:"/past/IMG-20240919-WA0028.jpg",
            king:<Apps3/>

        },
        {
            id:4,
            image:"/past/IMG-20240919-WA0029.jpg",
            king:<App4/>
        },
        {
            id:5,
            image:"/past/IMG-20240919-WA0031.jpg",
            king:<App5/>
        }
    ])

    return(

        <main className="mainog" >
        <h2 style={{textAlign:"center"}} className="h2">These are some past Questions</h2>
        {pic.map((images)  =>
      
       

         <Container key={images.id}>
        <div className="kin2"  >
        <div className="king" >
        <Card style={{ width: "10rem", display:"flex"}}>
            <Card.Img variant="top" src={images.image} alt="king" />
            <Card.Body>
                <Card.Title></Card.Title>
               <Button variant="primary">
               {images.king}
               </Button>
            </Card.Body>
        </Card>
        
        </div>
        </div>
        </Container>

   
        
       
          
        )}
        
  
        </main>
    )
}

export default Main