import { Text, TextInput } from 'react-native';

import renderer, { act } from 'react-test-renderer';

import { Input } from '../Input';

describe('Input component', () => {
  it('renders a TextInput', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(<Input placeholder="test" />);
    });
    expect(component!.root.findByType(TextInput)).toBeTruthy();
  });

  it('renders error message when provided', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(<Input errorMessage="Error" />);
    });
    const texts = component!.root.findAllByType(Text);
    expect(texts[0].props.children).toContain('Error');
  });
});
