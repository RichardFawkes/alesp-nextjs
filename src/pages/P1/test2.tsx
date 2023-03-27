import React, { useState } from "react";

const HooksTest = () => {
  const [posts, setPosts] = useState([
    { id: 1, name: "Pedro", idade: 10 },
    { id: 2, name: "Joao", idade: 20 },
  ]);

  const newPost = { id: 11, name: "Jorge", idade: 20 };

  const postLenght = posts.length;

  console.log(posts);
  return (
    <>
      <h2>State</h2>
      <button onClick={() => setPosts((prev) => [...prev, newPost])}>
        Adicionar Post
      </button>
      {<p>Quantidade: {postLenght}</p>}
      <b>Teste2</b>
      <b>Teste02</b>
    </>
  );
};

export default HooksTest;
