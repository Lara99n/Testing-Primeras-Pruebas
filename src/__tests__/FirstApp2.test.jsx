import { render, screen } from "@testing-library/react";
import FirstApp from "../react-component/FirstApp";

describe("Pruebas en FirstApp", () => {
  const titulo = "Hola, soy Goku";
  let subTitulo = "soy un subtitulo";

  test("debe de hacer match con el snaptshot", () => {
    const { container } = render(<FirstApp titulo={titulo} />);
    expect(container).toMatchSnapshot();
  });

  test('debe demostrar el mensaje "Hola sot Goku"', () => {
    render(<FirstApp titulo={titulo} />);
    expect(screen.getByText(titulo)).toBeTruthy();
  });

  test("debe de mostrar el titulo en un h1", () => {
    render(<FirstApp titulo={titulo} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      titulo
    );
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    render(<FirstApp titulo={titulo} subTitulo={subTitulo} />);

    /*  expect(screen.getAllByText(subTitulo).length).toBe(2); */
  });
});
