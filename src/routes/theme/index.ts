import { Platform } from 'react-native';

import { Theme } from '@react-navigation/native';
import { Colors } from '@utils';

export const ImpactaTheme: Theme = {
    dark: false,
    colors: {
        primary: Colors.primary,
        background: Colors.background,
        text: Colors.text,
        border: Colors.border,
        notification: Colors.notification,
        card: Colors.card
    },
    fonts: Platform.select({
        ios: {
            regular: {
                fontFamily: 'System',
                fontWeight: '400',
            },
            medium: {
                fontFamily: 'System',
                fontWeight: '500',
            },
            bold: {
                fontFamily: 'System',
                fontWeight: '600',
            },
            heavy: {
                fontFamily: 'System',
                fontWeight: '700',
            },
        },
        default: {
            regular: {
                fontFamily: 'sans-serif',
                fontWeight: 'normal',
            },
            medium: {
                fontFamily: 'sans-serif-medium',
                fontWeight: 'normal',
            },
            bold: {
                fontFamily: 'sans-serif',
                fontWeight: '600',
            },
            heavy: {
                fontFamily: 'sans-serif',
                fontWeight: '700',
            },
        },
    }),
};
