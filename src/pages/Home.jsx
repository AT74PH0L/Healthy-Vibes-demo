import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import './Home.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-light p-5 rounded d-flex justify-content-center align-items-center gap-5">
        <div>
          <h1 className="display-4">
          <span >สุขภาพ</span> ดีได้ด้วยตัวคุณเอง <br />
            บทความสำหรับคนรักสุขภาพ
          </h1>

          <a href="/articles" className="btn btn-success mt-3 btn-custom">
            บทความสำหรับคนรักสุขภาพ
          </a>
        </div>
        <img
          src="https://s.isanook.com/wo/0/ud/48/243501/tnw2.jpg?ip/crop/w670h402/q80/jpg"
          alt="Health"
          className="w-25 h-auto rounded"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <ArticleCard />
      </div>
    </>
  );
};

export default Home;
