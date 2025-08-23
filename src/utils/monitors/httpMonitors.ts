import { isAxiosError } from 'axios';
import Toast from 'react-native-toast-message';

import type { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

export function requestMonitor(config: InternalAxiosRequestConfig) {
    const { url } = config;
    console.log(`REQUEST: ${url}`, JSON.stringify(config, null, 4));
    return config;
}

export function responseMonitor(response: AxiosResponse) {
    const url = response.config.url ?? 'unknown';
    console.log(`RESPONSE: ${url}`, JSON.stringify(response.data, null, 4));
    return response;
}

export function catchError(error: AxiosError) {
    if (isAxiosError(error)) {
        const url = error.config?.url ?? 'unknown';

        console.log(`ERROR: ${url}`, JSON.stringify({
            message: error.response?.data,
            errorStatus: error.response?.status,
            errorCode: error.code,
        }, null, 4));

        Toast.show({
            type: 'error',
            text1: error.response?.data as string ?? 'Erro inesperado',
            text2: error.message,
            position: "bottom"
        })

        return Promise.reject(error);
    }

    console.log('UNKNOWN ERROR:', JSON.stringify(error, null, 4));
    Toast.show({
        type: 'error',
        text1: 'Atenção',
        text2: "Erro inesperado",
        position: "bottom"
    })
    return Promise.reject(error);
}
