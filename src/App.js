import "./App.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

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
