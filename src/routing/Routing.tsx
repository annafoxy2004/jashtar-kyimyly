import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";

export default function Routing() {
//   const accessToken = localStorage.getItem("accessToken");

  const PUBLIC_PAGES = [
    { link: "/", page: <MainPage />, id: 1 },
    // { link: "/about-motion", page: <AboutUsPage />, id: 2 },

    // { link: "/directions", page: <NewsPage />, id: 3 },
    // { link: "/events", page: <NewsDetailPage />, id: 12 },

    // { link: "/projects", page: <ProductsPage />, id: 4 },
    // { link: "/media", page: <ProductDetailPage />, id: 8 },

    // { link: "/reg-departments", page: <FAQPage />, id: 5 },
    // { link: "/signup", page: <SignUpPage />, id: 6 },
    // { link: "/login", page: <LoginPage />, id: 7 },

  ];

  return (
    <Routes>
      {PUBLIC_PAGES.map((page) => (
        <Route
          path={page.link}
          element={<div>{page.page}</div>}
          key={page.id}
        />
      ))}
    </Routes>
  );
}
