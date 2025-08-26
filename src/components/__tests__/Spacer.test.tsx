import { View } from 'react-native';

import renderer, { act } from 'react-test-renderer';

import { Spacer } from '../Spacer';
import { stylesWithParams } from '../Spacer/styles';

describe('Spacer component', () => {
  it('renders vertical space', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(<Spacer size={10} />);
    });
    const view = component!.root.findByType(View);
    expect(view.props.style.height).toBe(10);
  });

  it('renders horizontal space', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(<Spacer size={5} orientation="horizontal" />);
    });
    const view = component!.root.findByType(View);
    expect(view.props.style.width).toBe(5);
  });
});

describe('Spacer stylesWithParams', () => {
  it('creates styles correctly', () => {
    const styles = stylesWithParams({ size: 8, orientation: 'vertical' });
    expect(styles.container.height).toBe(8);
  });
});
