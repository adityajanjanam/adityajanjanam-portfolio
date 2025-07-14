/**
 * Smooth scroll utility for browsers that don't support scroll-behavior: smooth
 */
export const smoothScrollTo = (target, duration = 500) => {
  // Check if scroll-behavior is supported
  if ("scrollBehavior" in document.documentElement.style) {
    // Use native smooth scrolling
    target.scrollIntoView({ behavior: "smooth" });
    return;
  }

  // Fallback for older browsers
  const targetPosition = target.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
};

/**
 * Smooth scroll to element by ID
 */
export const smoothScrollToId = (elementId, duration = 500) => {
  const element = document.getElementById(elementId);
  if (element) {
    smoothScrollTo(element, duration);
  }
};
