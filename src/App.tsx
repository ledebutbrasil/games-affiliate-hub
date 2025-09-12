import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Marketplace from "./pages/Marketplace";
import Solicitacoes from "./pages/Solicitacoes";
import Estatisticas from "./pages/Estatisticas";
import Achievements from "./pages/Achievements";
import Suporte from "./pages/Suporte";
import MeusDados from "./pages/MeusDados";
import MeuGerente from "./pages/MeuGerente";
import NotFound from "./pages/NotFound";
import { DashboardLayout } from "./layouts/DashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/marketplace" element={<DashboardLayout><Marketplace /></DashboardLayout>} />
          <Route path="/solicitacoes" element={<DashboardLayout><Solicitacoes /></DashboardLayout>} />
          <Route path="/estatisticas" element={<DashboardLayout><Estatisticas /></DashboardLayout>} />
          <Route path="/achievements" element={<DashboardLayout><Achievements /></DashboardLayout>} />
          <Route path="/suporte" element={<DashboardLayout><Suporte /></DashboardLayout>} />
          <Route path="/meus-dados" element={<DashboardLayout><MeusDados /></DashboardLayout>} />
          <Route path="/meu-gerente" element={<DashboardLayout><MeuGerente /></DashboardLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
