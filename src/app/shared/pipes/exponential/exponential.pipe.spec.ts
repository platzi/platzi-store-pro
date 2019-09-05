import { ExponentialPipe } from './exponential.pipe';

xdescribe('ExponentialPipe', () => {
  it('create an instance', () => {
    const pipe = new ExponentialPipe();
    expect(pipe).toBeTruthy();
  });
});
