import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-light p-5 rounded d-flex justify-content-center align-items-center gap-5">
        <div>
          <h1 className="display-4">
            <span>สุขภาพ</span> ดีได้ด้วยตัวคุณเอง <br />
            บทความสำหรับคนรักสุขภาพ
          </h1>

          <a href="/articles" className="btn btn-success mt-3 btn-custom">
            บทความสำหรับคนรักสุขภาพ
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Health"
          className="w-25 h-auto rounded"
        />
      </div>

      <div className="mt-4 ">
        <h5 className="fw-bold">บทความสำหรับคนรักสุขภาพ</h5>
      </div>
      <ArticleCard limit={4}/>
    </>
  );
};

export default Home;
