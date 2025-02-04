import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "../components/Navbar";  // Correctly import Navbar

const Articles = () => {
  const articles = Array(8).fill({
    id: 1,
    title: "ร้านอาหารเพื่อสุขภาพ",
    img: "/images/healthy-food.jpg",
  });

  return (
    <>
      <Navbar />
      <Container className="mt-4">
        <h1 className="text-center">บทความเกี่ยวกับสุขภาพ</h1>

        <Row className="mt-4">
          {articles.map((article, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={article.img} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Link href={`/articles/${index + 1}`}>อ่านเพิ่มเติม</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Articles;
