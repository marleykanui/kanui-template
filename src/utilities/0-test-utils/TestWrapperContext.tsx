// React Types
import { Fragment } from "react";

// React Testing Library
import { render, RenderOptions } from "@testing-library/react";

// Redux Context
import { wrapper } from "@/redux/0-store/store";

// React Types
import { FC, ReactElement } from "react";

const Providers: FC = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

const ProvidersWithReduxContext = wrapper.withRedux(Providers);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: ProvidersWithReduxContext, ...options });

export * from "@testing-library/react";
export { customRender as render };
