import PropTypes from "prop-types";
import "./ArticleCard.css";
import articles from "../data/Demo_data";

const ArticleCard = ({ limit }) => {
  const displayedArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center mt-2">
        {displayedArticles.map((article) => (
          <div key={article.id} className="col d-flex justify-content-center">
            <div className="card shadow-sm border-light rounded-lg article-card">
              <img
                src={article.img}
                alt={article.title}
                className="card-img-top rounded-top article-img"
              />
              <div className="card-body">
                <h5 className="card-title text-dark">{article.title}</h5>
                <a
                  href={`/articles/${article.id}`}
                  className="btn btn-outline-success mt-2 read"
                >
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

ArticleCard.propTypes = {
  limit: PropTypes.number,
};

export default ArticleCard;
