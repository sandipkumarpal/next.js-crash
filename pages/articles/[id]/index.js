import { useRouter } from "next/router";
import Article from "../../../containers/Article";

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h2>
        Single Article <sup>{id}</sup>
      </h2>
      <Article />
    </div>
  );
};

export default ArticlePage;
