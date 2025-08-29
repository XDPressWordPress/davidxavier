import { Switch, Route } from "wouter";
import React, { useEffect } from 'react'; // Importe useEffect aqui
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/components/HomePage.jsx";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={() => <div>404 Not Found</div>} />
    </Switch>
  );
}

function App() {
  // Desabilita o menu de contexto do botão direito e a cópia de conteúdo
  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      alert('Conteúdo protegido contra cópia.'); // Exibe um alerta
    };

    document.addEventListener('contextmenu', handleContextmenu);
    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('contextmenu', handleContextmenu);
      document.removeEventListener('copy', handleCopy);
    };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
