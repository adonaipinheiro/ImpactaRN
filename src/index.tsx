import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from 'react-native-toast-message';

import { useApp } from "@hooks";
import { Router } from "@routes";

const queryClient = new QueryClient();

export default function App() {
    useApp();

    return (
        <QueryClientProvider client={queryClient}>
            <Router />
            <Toast />
        </QueryClientProvider>
    );
}
