/**
 * Scroll spy utility using Intersection Observer API
 * Tracks which section is currently visible and updates navigation accordingly
 */

export interface ScrollSpyOptions {
  /**
   * Root margin for the intersection observer
   * Default: '-180px 0px -70% 0px' (accounts for sticky nav)
   */
  rootMargin?: string;

  /**
   * Intersection threshold (0-1)
   * Default: 0
   */
  threshold?: number;
}

/**
 * Create a scroll spy observer
 * @param elements - Elements to observe (e.g., day content sections)
 * @param callback - Function called when active element changes
 * @param options - Observer options
 * @returns IntersectionObserver instance
 */
export function createScrollSpy(
  elements: NodeListOf<Element> | Element[],
  callback: (index: number) => void,
  options: ScrollSpyOptions = {}
): IntersectionObserver {
  const {
    rootMargin = '-180px 0px -70% 0px',
    threshold = 0,
  } = options;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elementsArray = Array.from(elements);
          const index = elementsArray.indexOf(entry.target as Element);

          if (index !== -1) {
            callback(index);
          }
        }
      });
    },
    { rootMargin, threshold }
  );

  elements.forEach((element) => observer.observe(element));

  return observer;
}

/**
 * Update tab active states based on current index
 * @param tabs - Tab elements
 * @param activeIndex - Index of the active tab
 * @param activeClasses - Classes to add to active tab
 * @param inactiveClasses - Classes to add to inactive tabs
 */
export function updateTabStates(
  tabs: NodeListOf<Element> | Element[],
  activeIndex: number,
  activeClasses: string[] = ['bg-ruby-500', 'text-white', 'shadow-md'],
  inactiveClasses: string[] = ['text-gray-700', 'hover:bg-white', 'hover:shadow-sm']
): void {
  tabs.forEach((tab, index) => {
    if (index === activeIndex) {
      tab.classList.add(...activeClasses);
      tab.classList.remove(...inactiveClasses);
    } else {
      tab.classList.remove(...activeClasses);
      tab.classList.add(...inactiveClasses);
    }
  });
}
