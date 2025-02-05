import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar"; // Correctly import Navbar
import ArticleCard from "../components/ArticleCard"; // Correctly import Navbar

const Articles = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-4">
        <h1 className="text-center">บทความเกี่ยวกับสุขภาพ</h1>
        <ArticleCard />
        <ArticleCard />
      </Container>
    </>
  );
};

export default Articles;
