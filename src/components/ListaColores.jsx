import { CardFooter, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ListaColores = ({ color }) => {
  return (
    <Col sm={12} md={4} lg={3}>
      <Card>
        <Card.Body className="rounded-2" style={{ background: color.nombreColor }}>
          <Card.Title className="text-center">Color</Card.Title>
          <Card.Text className="text-center">
            El color hexadecimal es:
            <strong className="text-light"> {color.nombreColor}</strong>
          </Card.Text>
          <CardFooter className="text-center p-0">
            <Button className="" variant="danger">
              Eliminar
            </Button>
          </CardFooter>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListaColores;
