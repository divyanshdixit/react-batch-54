import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";

const PostsData = () => {
  const [posts, setPosts] = useState([]); // totalCount
  const [postPerPage, setPostPerPage] = useState(10); // page size
  const [currentPage, setCurrentPage] = useState(1); //
  // for the dots in pagination: siblingcount
  const [siblingCount, setSiblingCount] = useState(1);
  const lastIndex = currentPage * postPerPage; // 10 => page1
  const firstIndex = lastIndex - postPerPage; // 0=> page1 , 20 - 10 => 10 => page 2
  const total = Math.ceil(posts.length / postPerPage); // total page count

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

  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };

  const changeRowsPerPage = (e) => {
    setPostPerPage(e.target.value);
  };

  const prevPost = (page) => {
    setCurrentPage(page - 1);
  };

  const nextPost = (page) => {
    setCurrentPage(page + 1);
  };

  const jumptoFirst = () => {
    setCurrentPage(1);
  };

  const jumptoLast = () => {
    setCurrentPage(total);
  };

  return (
    <>
      <Posts posts={posts} firstIndex={firstIndex} lastIndex={lastIndex} />
      <Pagination
        totalCount={posts.length}
        siblingCount={siblingCount}
        prevPost={prevPost}
        nextPost={nextPost}
        jumptoLast={jumptoLast}
        jumptoFirst={jumptoFirst}
        total={total}
        postPerPage={postPerPage}
        currentPage={currentPage}
        paginate={paginate}
        changeRowsPerPage={changeRowsPerPage}
      />
    </>
  );
};

export default PostsData;
