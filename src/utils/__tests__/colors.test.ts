import { Colors } from '../colors';

describe('Colors utility', () => {
    it('should expose primary color', () => {
        expect(Colors.primary).toBe('#c3eb1e');
    });

    it('should expose white variant', () => {
        expect(Colors.white[100]).toBe('#FFFFFF');
    });
});
