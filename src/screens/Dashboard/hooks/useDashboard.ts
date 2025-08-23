import { useQuery } from "@tanstack/react-query"

import { productsGetRequest } from "@services"

export function useDashboard() {
    const { data, isFetching } = useQuery({
        queryKey: ["productsGetRequest"],
        queryFn: productsGetRequest
    })

    return {
        data,
        isFetching
    }
}
