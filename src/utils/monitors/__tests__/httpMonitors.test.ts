import Toast from 'react-native-toast-message';

import { requestMonitor, responseMonitor, catchError } from '../httpMonitors';

import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

describe('httpMonitors', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('requestMonitor should log and return config', () => {
        const config = { url: '/test' } as InternalAxiosRequestConfig;
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        const result = requestMonitor(config);
        expect(result).toBe(config);
        expect(logSpy).toHaveBeenCalledWith(`REQUEST: ${config.url}`, JSON.stringify(config, null, 4));
        logSpy.mockRestore();
    });

    it('responseMonitor should log and return response', () => {
        const response = { config: { url: '/test' }, data: { ok: true } } as AxiosResponse;
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        const result = responseMonitor(response);
        expect(result).toBe(response);
        expect(logSpy).toHaveBeenCalledWith(`RESPONSE: ${response.config.url}`, JSON.stringify(response.data, null, 4));
        logSpy.mockRestore();
    });

    it('catchError should handle AxiosError', async () => {
        const error = {
            isAxiosError: true,
            config: { url: '/test' },
            response: { data: 'failure', status: 400 },
            message: 'Request failed',
            name: 'AxiosError',
            toJSON: () => ({}),
        } as AxiosError;

        const showSpy = jest.spyOn(Toast, 'show');
        await expect(catchError(error)).rejects.toBe(error);
        expect(showSpy).toHaveBeenCalledWith({
            type: 'error',
            text1: 'failure',
            text2: error.message,
            position: 'bottom',
        });
    });

    it('catchError should handle non-Axios error', async () => {
        const error = new Error('unknown');
        const showSpy = jest.spyOn(Toast, 'show');
        await expect(catchError(error as unknown as AxiosError)).rejects.toBe(error);
        expect(showSpy).toHaveBeenCalledWith({
            type: 'error',
            text1: 'Atenção',
            text2: 'Erro inesperado',
            position: 'bottom',
        });
    });
});
