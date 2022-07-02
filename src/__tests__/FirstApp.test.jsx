import { render } from "@testing-library/react";
import FirstApp from "../react-component/FirstApp";

describe("Pruebas en FirstApp", () => {
  test("debe de hacer match con el snaptshot", () => {
    /*  const title = "Hola, Soy Goku";
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot(); */
  });

  test("debe de mostar el titulo en un h1", () => {
    const titulo = "Hola, Soy Goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp titulo={titulo} />
    );
    //estas funciones que nos proporciona react-testing-library me sirve para analizar rapidamente el dom -> componente renderizado.

    expect(getByText(titulo)).toBeTruthy();

    //  const h1 = container.querySelector("h1");
    /*     expect(h1.innerHTML).to Be(titulo); */
    //  expect(h1.innerHTML).toContain(titulo);
    //Que contenga el titulo, me sirve para que no sea tan preciso y deje q haya almenos un espacio

    expect(getByTestId("test-title").innerHTML).toBe(titulo);
  });

  test("debe demostar el subtitulo enviado por props", () => {
    const titulo = "Hola, Soy Goku";
    const subtitulo = "Hola, Soy un subtitulo";
    const { getAllByText } = render(
      <FirstApp titulo={titulo} subtitulo={subtitulo} />
    );

    expect(getAllByText(subtitulo).length).toBe(2);
  });
});
