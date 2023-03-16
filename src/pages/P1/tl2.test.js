import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import MinhaPagina from "./tl2";

describe("MinhaPagina", () => {
  it("deve incrementar o contador quando o botão for clicado", () => {
    const { getByText } = render(<MinhaPagina />);
    const botao = getByText("Clique aqui");

    fireEvent.click(botao);

    expect(getByText("O contador está em 1.")).toBeInTheDocument();
  });
});

describe("MinhaPagina", () => {
  it("deve incrementar o contador quando o botão for clicado", () => {
    const { getByText } = render(<MinhaPagina />);
    const botao = getByText("Clique aqui");

    for (let i = 1; i <= 5; i++) {
      fireEvent.click(botao);
      expect(getByText(`O contador está em ${i}.`)).toBeInTheDocument();
    }
  });
});
