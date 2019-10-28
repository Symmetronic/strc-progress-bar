import { Component, h, Prop } from '@stencil/core';

/**
 * A simple progress bar.
 */
@Component({
  tag: 'strc-progress-bar',
  styleUrl: 'progress-bar.css',
  shadow: true
})
export class ProgressBar {

  /**
   * The current progress as number between 0.0 and 1.0 (equals 100%).
   */
  @Prop() progress: number;

  /**
   * Renders the progress bar.
   */
  render() {
    return (
      <div
        style={{
          width: (this.progress * 100) + '%'
        }}
      />
    );
  }
}
