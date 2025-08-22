import { useEffect } from "react";

import BootSplash from "react-native-bootsplash";

export function useApp() {
    async function init() {
        await BootSplash.hide({ fade: true })
    }

    useEffect(() => {
        init()
    }, [])
}