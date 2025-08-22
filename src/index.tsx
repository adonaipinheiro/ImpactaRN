import { Router } from "@routes";

import { useApp } from "@hooks";

export default function App() {
    useApp();

    return (
        <Router />
    )
}
