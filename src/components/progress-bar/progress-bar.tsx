import {
  Component,
  h,
  Host,
  Prop,
  Watch,
} from '@stencil/core';

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
   * True, if the progress bar should fade out when complete.
   */
  @Prop() fadeOut: boolean = true;

  /**
   * The current progress as number between 0.0 and 1.0 (equals 100%).
   */
  @Prop() progress: number = 0.0;

  /**
   * Assures that the value is between 0.0 and 1.0.
   * @param newValue The new value.
   */
  @Watch('progress')
  handleProgress(newValue: number): void {
    this.progress = Math.max(0.0, Math.min(1.0, newValue));
  }

  /**
   * Action before the component loaded.
   */
  componentWillLoad(): void {
    this.handleProgress(this.progress);
  }

  /**
   * Renders the progress bar.
   */
  render() {
    return (
      <Host
        class={{
          'fade-out': this.fadeOut && this.progress >= 1.0
        }}
      >
        <div
          style={{
            width: (this.progress * 100) + '%'
          }}
        />
      </Host>
    );
  }
}
