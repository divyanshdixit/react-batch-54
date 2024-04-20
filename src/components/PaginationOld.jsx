import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [posts, setPosts] = useState([]); //
  const [postPerPage, setPostPerPage] = useState(10); // 
  const [currentPage, setCurrentPage] = useState(1); //
  const lastIndex = currentPage*postPerPage ; // 10 => page1
  const firstIndex = postPerPage - lastIndex; // 0=> page1 , 20 - 10 => 10 => page 2
  const total = Math.ceil(posts.length/postPerPage);
  const totalPages = [];
  for(let i=1; i<=total; i++){
    totalPages.push(i);
  }

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setPosts(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  const changeRowsPerPage = (e) => {
    setPostPerPage(e.target.value)
  };

  const prevPost = () => {

  }

  const nextPost = () => {

  }

  const paginate = (page) => {
    setCurrentPage(page);
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th> id </th>
            <th> title </th>
          </tr>
        </thead>
        <tbody>
          {posts.slice(firstIndex, lastIndex).map((post, i) => (
            <tr key={i}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <select
          name="postperpage"
          value={postPerPage}
          onChange={changeRowsPerPage}
        >
          <option value={10}> 10 </option>
          <option value={25}> 25 </option>
          <option value={50}> 50 </option>
        </select>
        <ul>
          <li>
            <button onClick={prevPost} type="button" disabled={currentPage === 1 ? true : false}> Prev </button>
          </li>
          {
            totalPages && totalPages.map((page, i) => {
                return (
                <li key={i}>
                    <a href="#" onClick={() => paginate(page)}> {page}</a>
                </li>
            )})
          }
          <li onClick={nextPost}>
            <button onClick={nextPost} type="button" disabled={currentPage === total ? true : false}> Next </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
