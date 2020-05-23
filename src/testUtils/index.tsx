import React, { ReactElement, ReactNode } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { render } from "@testing-library/react";

export const renderWithCotnext = (
  component: ReactElement,
  { mocks: mocks = {} }
) => {
  const wrapper = ({ children }: { children?: ReactNode }) => <>{children}</>;

  const renderResults = render(component, { wrapper });
  return {
    ...renderResults,
    snapshot: () => {
      expect(renderResults.container).toMatchSnapshot();
    }
  };
};
