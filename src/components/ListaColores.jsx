import { CardFooter, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ListaColores = ({ color, borrarColor }) => {
  return (
    <Col sm={12} md={4} lg={3}>
      <Card className="cardColores">
        <Card.Body className="rounded-2 p-0">
          <Card.Title
            className="text-center p-3 text-light mb-0"
            style={{ background: color.nombreColor }}
          >
            Color elegido
          </Card.Title>
          <Card.Text className="text-center bg-dark-subtle mb-0 p-2">
            El nombre color hexadecimal es:
            <strong className="text-dark"> {color.nombreColor}</strong>
          </Card.Text>
          <CardFooter className="text-center p-0">
            <Button variant="warning" className="mx-2">
              <i className="bi bi-pencil-square"></i>
            </Button>
            <Button variant="danger" className="my-1" onClick={borrarColor}>
              Eliminar
            </Button>
          </CardFooter>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListaColores;
