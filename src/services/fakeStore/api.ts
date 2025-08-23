import axios from 'axios';
import Config from 'react-native-config';

import { requestMonitor, responseMonitor, catchError } from '@utils';

const fakeStoreApi = axios.create({
    baseURL: Config.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

if (__DEV__) {
    fakeStoreApi.interceptors.request.use(requestMonitor, catchError);
    fakeStoreApi.interceptors.response.use(responseMonitor, catchError);
}



export { fakeStoreApi };
