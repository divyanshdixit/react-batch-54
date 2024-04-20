import React from "react";

const Posts = ({ posts, firstIndex, lastIndex }) => {
  return (
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
  );
};

export default Posts;
