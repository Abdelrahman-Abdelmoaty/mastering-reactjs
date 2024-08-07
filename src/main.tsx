import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import Root from "./Root";
import AuthProvider from "./contexts/auth/AuthProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<Root />
				<RouterProvider router={router} />
				<Toaster richColors position="top-right" />
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>,
);
