import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../react-component/CounterApp";

describe("Pruebas en Counter App", () => {
  const value = 100;

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("Deje de mostrar el valor inicial de 100", () => {
    render(<CounterApp value={value} />);

    expect(screen.getByText(100)).toBeTruthy();
  });

  test("debe de incrementar con el boton +1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));

    expect(screen.getByText("101")).toBeTruthy();
  });

  test("debe de incrementar con el boton -1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));

    expect(screen.getByText("99")).toBeTruthy();
  });

  test("debe de funcionar el boton de reset", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("Reset"));

    expect(screen.getByText(value)).toBeTruthy();
  });
});
