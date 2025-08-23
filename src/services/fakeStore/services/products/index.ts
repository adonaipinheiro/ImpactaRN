import { fakeStoreApi } from "services/fakeStore/api";

import { ProductsGetResponseType } from "./types";

export async function productsGetRequest() {
    return await fakeStoreApi.get<ProductsGetResponseType>("products")
        .then(r => r.data);
}
