import type { RouteRecord } from "vite-react-ssg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "./pages/HomePage";
import CardDiscountPage from "./pages/CardDiscountPage";
import HowToUsePage from "./pages/HowToUsePage";
import SavingsStrategyPage from "./pages/SavingsStrategyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "card-discount", element: <CardDiscountPage /> },
      { path: "how-to-use", element: <HowToUsePage /> },
      { path: "savings-strategy", element: <SavingsStrategyPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
