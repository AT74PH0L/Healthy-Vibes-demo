import './ArticleCard.css'; // อย่าลืม import CSS

const ArticleCard = () => {
  const articles = [
    { id: 1, title: "ร้านอาหารเพื่อสุขภาพ", img: "https://www.matichon.co.th/wp-content/uploads/2018/11/fit-and-firm-salad.jpg" },
    { id: 2, title: "วิธีการออกกำลังกาย", img: "https://www.matichon.co.th/wp-content/uploads/2018/11/fit-and-firm-salad.jpg" },
    { id: 3, title: "สถานการณ์โรคระบาดปัจจุบัน", img: "https://www.matichon.co.th/wp-content/uploads/2018/11/fit-and-firm-salad.jpg" },
    { id: 4, title: "วิธีดูแลสุขภาพ", img: "https://www.matichon.co.th/wp-content/uploads/2018/11/fit-and-firm-salad.jpg" },
  ];

  return (
    <div className="container">
      <div className="mt-4">
        <h5 className="fw-bold">บทความสำหรับคนรักสุขภาพ</h5>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
        {articles.map((article) => (
          <div key={article.id} className="col d-flex justify-content-center">
            <div className="card shadow-sm border-light rounded-lg article-card">
              <img
                src={article.img}
                alt={article.title}
                className="card-img-top rounded-top article-img"
              />
              <div className="card-body">
                <h5 className="card-title text-dark">{article.title}</h5>
                <a href={`/articles/${article.id}`} className="btn btn-outline-success mt-2 read">
                  อ่านเพิ่มเติม →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleCard;
