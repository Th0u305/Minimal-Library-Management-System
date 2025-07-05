import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
// import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { routes } from "./routes/routes.tsx";
import { store } from "./redux/store.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ThemeProvider> */}
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
    {/* </ThemeProvider> */}
  </StrictMode>
);
