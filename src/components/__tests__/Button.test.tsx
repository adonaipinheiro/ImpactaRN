import { Text, TouchableOpacity } from 'react-native';

import renderer, { act } from 'react-test-renderer';

import { Button } from '../Button';
import { stylesWithParams } from '../Button/styles';

describe('Button component', () => {
  it('renders provided text', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(<Button text="Click" />);
    });
    const text = component!.root.findByType(Text).props.children;
    expect(text).toBe('Click');
  });

  it('shows loading text when loading', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(<Button text="Click" loading />);
    });
    const text = component!.root.findByType(Text).props.children;
    expect(text).toBe('loading');
    const touchable = component!.root.findByType(TouchableOpacity);
    expect(touchable.props.disabled).toBe(true);
  });
});

describe('stylesWithParams', () => {
  it('returns primary styles', () => {
    const styles = stylesWithParams({ type: 'primary', loading: false });
    expect(styles.container.backgroundColor).toBeDefined();
    expect(styles.text.color).toBeDefined();
  });

  it('returns outlined styles', () => {
    const styles = stylesWithParams({ type: 'outlined', loading: false });
    expect(styles.container.borderWidth).toBe(2);
    expect(styles.text.color).toBeDefined();
  });
});
