import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import DictionaryPage from "./pages/Dictionary";
import SentencesPage from "./pages/Sentences";
import RootLayout from "./pages/Root";
import { ThemeProvider } from "./themeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/dictionary", element: <DictionaryPage /> },
      { path: "/sentences", element: <SentencesPage /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
