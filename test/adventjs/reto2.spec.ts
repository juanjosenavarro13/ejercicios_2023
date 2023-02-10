import { countHours } from '../../src/adventjs/reto2';

describe('Reto 2', () => {
  it('expect 4 hours extra', ()=>{
    expect(countHours(2023, ['01/06', '04/01', '12/25'])).toBe(4)
  })
});