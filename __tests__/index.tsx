import { render } from "@testing-library/react";
import Home from "../pages/index";
console.log(Home);

jest.mock("next/head", () => ({
  __esModule: true,
  default: ({ children }: any) => <span data-component="Head">{children}</span>,
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <span data-component="Image" {...props} />,
}));

describe("Hello World!", () => {
  it("should touch home component", () => {
    const sut = render(<Home />);

    expect(sut.asFragment()).toMatchSnapshot();
  });
});
