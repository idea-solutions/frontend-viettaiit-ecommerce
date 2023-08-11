import { useParams } from "react-router-dom";
import { deslugify } from "../../utils/slug";

function Category() {
  const params = useParams();
  const title = deslugify(params.name);
  return (
    <div>
      <h1>{title}</h1>
    
    </div>
  );
}

export default Category;
