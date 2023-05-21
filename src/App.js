import "./App.css";

import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="w-screen h-screen p-5">
          <Outlet />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
