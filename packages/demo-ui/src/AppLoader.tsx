import { Container, Row } from "react-bootstrap";
import Router from "./Router";

function AppLoader() {
    return (
        
          <Container fluid>
      <Row>
         <Router/>
      </Row>
    </Container>
        
    );
}

export default AppLoader;