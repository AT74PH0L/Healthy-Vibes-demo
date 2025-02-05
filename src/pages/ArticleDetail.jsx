import { useParams } from "react-router-dom";
import One from "../demo/One";
import Two from "../demo/Two";
import Tree from "../demo/Tree";
import Four from "../demo/Four";


const ArticleDetail = () => {
  const { id } = useParams(); // ดึง id จาก URL
  let component;
  const numId = Number(id); // แปลงเป็นตัวเลข

  switch (numId) {
    case 1:
      component = <One />;
      break;
    case 2:
      component = <Two />;
      break;
    case 3:
      component = <Tree />;
      break;
    case 4:
      component = <Four />;
      break;
    default:
      component = <h1>ไม่พบหน้า {id}</h1>;
  }

  return component;
};

export default ArticleDetail;
