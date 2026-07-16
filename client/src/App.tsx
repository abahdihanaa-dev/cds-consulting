import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Formations from "@/pages/Formations";
import AuditContact from "@/pages/AuditContact";
import MentionsLegales from "@/pages/MentionsLegales";
import PolitiqueConfidentialite from "@/pages/PolitiqueConfidentialite";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/a-propos" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/formations" component={Formations} />
      <Route path="/audit-contact" component={AuditContact} />
      <Route path="/mentions-legales" component={MentionsLegales} />
      <Route path="/politique-confidentialite" component={PolitiqueConfidentialite} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
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
