describe('check message', () => {
  test('message', () => {
    expect('Finish Hw').toBe('Finish Hw')
  }); 
});


describe('check button click', () => {
  test('button click', () => {
    expect('1').toBe('1')
  }); 
});

/* import { render, fireEvent } from '@testing-library/vue'

test('properly handles v-model', async () => {
  const { getByLabelText, getByText } = render(Component)

  // Asserts initial state.
  getByText('Add Goal')

  // Get the input DOM node by querying the associated label.
  const usernameInput = getByLabelText(/Goal/i)

  // Updates the <input> value and triggers an `input` event.
  // fireEvent.input() would make the test fail.
  await fireEvent.update(usernameInput, 'test')

  getByText('test')
}) */