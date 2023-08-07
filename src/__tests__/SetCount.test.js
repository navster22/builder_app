import { render, fireEvent } from '@testing-library/react';
import SetCount from '../components/SetCount';

describe('SetCount', () => {
    test('check if counter increase when increment button clicked', () => {
        const setCountMock = jest.fn();
        const count = 0;
        const {getByText} = render(<SetCount count={count} setCount={setCountMock}/>)
        const incrementButton = getByText('Increment +')
        fireEvent.click(incrementButton);
        expect(setCountMock).toHaveBeenCalledTimes(1);
        expect(setCountMock).toHaveBeenCalledWith(count + 1);
     });
     test('check if counter decrease when decreament button clicked', () => {
        const setCountMock = jest.fn();
        const count = 0;
        const {getByText} = render(<SetCount count={count} setCount={setCountMock}/>)
        const decrementButton = getByText('Decrement -')
        fireEvent.click(decrementButton);
        expect(setCountMock).toHaveBeenCalledTimes(1);
        expect(setCountMock).toHaveBeenCalledWith(count - 1);
     });
})