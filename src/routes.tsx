import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: '/', element: <LayoutPage />, children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'games/:id',
        element: <GameDetailPage />
      }

    ]
  }
])

export default router;
