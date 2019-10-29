import { ProgressBar } from './progress-bar';

describe('strc-progress-bar', () => {
  let progressBar: ProgressBar;

  beforeEach(() => {
    progressBar = new ProgressBar;
  });

  it('builds', () => {
    expect(progressBar).toBeTruthy();
  });

  it('initializes with a value of 0', () => {
    expect(progressBar.progress).toBe(0);
  }); 

  describe('handleProgress', () => {
    it('limits numbers to the interval between 0 and 1', () => {
      for (let progress = -2; progress < 3; progress += 0.1) {
        progressBar.handleProgress(progress);
        expect(progressBar.progress).toBe(
          (progress < 0.0)
            ? 0.0
            : (progress > 1.0)
              ? 1.0
              : progress
        );
      }
    });
  });
});
