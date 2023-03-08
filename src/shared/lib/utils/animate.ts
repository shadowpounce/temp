interface AnimateProps {
  timing: (fraction: number) => number;
  draw: (progress: number) => void;
  duration: number;
  onComplete?: () => void;
}

export function animate({ timing, draw, duration, onComplete = () => {} }: AnimateProps) {
  let startTime = performance.now();
  let completeFn = onComplete;
  let animationId: number | null = null;
  let restartId:  NodeJS.Timeout | null = null;

  const animate = function animate(time: number) {
    let timeFraction = (time - startTime) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      animationId = requestAnimationFrame(animate);
    } else {
      completeFn();
    }
  };

  const start = () => {
    startTime = performance.now();
    animationId = requestAnimationFrame(animate);
  };

  const stop = () => {
    if (animationId) cancelAnimationFrame(animationId);
  };

  const restart = (delayMs: number = 0) => {
    if (restartId) clearTimeout(restartId);
    restartId = setTimeout(() => {
      stop();
      start();
    }, delayMs);
  };

  const completeChange = (fn: () => void) => {
    completeFn = fn;
  };

  return {
    start,
    stop,
    restart,
    onComplete: completeChange,
  };
}
