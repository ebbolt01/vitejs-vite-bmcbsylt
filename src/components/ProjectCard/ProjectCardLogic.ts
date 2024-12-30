export class ProjectCardComponent {
  constructor(element: Element) {
    const inner = element.querySelector<HTMLElement>('[data-card-inner]');
    const viewModelBtn = element.querySelector<HTMLButtonElement>('[data-view-model]');
    const viewDescBtn = element.querySelector<HTMLButtonElement>('[data-view-description]');

    // Carousel functionality
    let currentSlide = 0;
    const slides = element.querySelectorAll<HTMLElement>('[data-carousel-slide]');
    const prevBtn = element.querySelector<HTMLButtonElement>('[data-carousel-prev]');
    const nextBtn = element.querySelector<HTMLButtonElement>('[data-carousel-next]');

    const showSlide = (index: number) => {
      slides.forEach((slide: HTMLElement, i: number) => {
        slide.style.opacity = i === index ? '1' : '0';
      });
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    };

    // Auto-advance carousel
    const interval = setInterval(nextSlide, 5000);

    // Event listeners
    prevBtn?.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation();
      clearInterval(interval);
      prevSlide();
    });

    nextBtn?.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation();
      clearInterval(interval);
      nextSlide();
    });

    // Flip card functionality
    viewModelBtn?.addEventListener('click', () => {
      inner?.classList.add('rotate-y-180');
    });

    viewDescBtn?.addEventListener('click', () => {
      inner?.classList.remove('rotate-y-180');
    });

    // Auto-return to description after 30 seconds
    let flipTimeout: number | undefined;
    const autoReturn = () => {
      clearTimeout(flipTimeout);
      flipTimeout = setTimeout(() => {
        inner?.classList.remove('rotate-y-180');
      }, 30000) as unknown as number; // Type assertion
    };

    viewModelBtn?.addEventListener('click', autoReturn);
  }
}
