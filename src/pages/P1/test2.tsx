import React, { useState } from "react";

const HooksTest = () => {
  const [posts, setPosts] = useState([
    { id: 1, name: "Cuzin", idade: 10 },
    { id: 2, name: "Penis", idade: 20 },
  ]);

  const newPost = { id: 11, name: "Penis", idade: 20 };

  const postLenght = posts.length;

  console.log(posts);
  return (
    <>
      <h2>State</h2>
      <button onClick={() => setPosts((prev) => [...prev, newPost])}>
        Adicionar Post
      </button>
      {<p>Quantidade: {postLenght}</p>}
    </>
  );
};

export default HooksTest;
