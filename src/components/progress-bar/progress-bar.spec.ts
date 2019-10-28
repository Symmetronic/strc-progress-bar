import { ProgressBar } from './progress-bar';

describe('strc-progress-bar', () => {
  let progressBar: ProgressBar;

  beforeEach(() => {
    progressBar = new ProgressBar;
  });

  it('builds', () => {
    expect(progressBar).toBeTruthy();
  });
});
