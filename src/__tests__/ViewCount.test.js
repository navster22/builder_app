import { render, screen } from '@testing-library/react';
import ViewCount from '../components/ViewCount';

describe('ViewCount',()=>{

    test('rendering ViewCount without any errors',() => {
        render(<ViewCount />)
    })

    test('check if correct value of count is displayed',() => {
        const count = 3;
        const {getByText} = render(<ViewCount count={count}/>)
        const countText = getByText(`I am coming from ViewCount ${count}`)
        expect(countText).toBeInTheDocument();
    })
})