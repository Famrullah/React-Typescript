import { render } from "@testing-library/react";

import Home from "../index";
// import { MemoryRouter } from 'react-router-dom'
// import { createMemoryHistory } from 'history'

it("correct main route", () => {
  // const root = document.createElement("div");
  //   const history = createMemoryHistory()
  //   document.body.appendChild(root)
  // Render app
  const { container } = render(<Home />);

  //   expect(history.location.pathname).toBe('/')
  console.log(container);
});
