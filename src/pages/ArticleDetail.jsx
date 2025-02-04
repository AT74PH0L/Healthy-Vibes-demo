// import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import Navbar from "../components/Navbar";
const ArticleDetail = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <Container className="mt-4">
        <Card>
          <Card.Body>
            <h1>รายละเอียดบทความ {id}</h1>
            <p>เนื้อหาของบทความ...</p>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ArticleDetail;
