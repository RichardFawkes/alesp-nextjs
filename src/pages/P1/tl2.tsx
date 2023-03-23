import { useRef, useState } from "react";

interface Props {
  onButtonClick: () => void;
}

const Botao = (props: Props) => {
  return <button onClick={props.onButtonClick}>Clique aqui</button>;
};

export default function MinhaPagina() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const inputRef = useRef("gay");

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <p>O contador está em {contador}.</p>
      <Botao onButtonClick={incrementarContador} />
      <br></br>

      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
