import Articles from "../../containers/Articles";

const ArticlesPage = ({ users }) => {
  return (
    <div>
      <h2>Articles</h2>
      <Articles />
    </div>
  );
};

// export async function getStaticProps(context) {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   return {
//     props: {
//       users
//     }
//   };
// }

export default ArticlesPage;
