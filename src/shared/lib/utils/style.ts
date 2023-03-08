export function css<T extends HTMLElement>(element: T, styles: Partial<CSSStyleDeclaration>) {
  Object.assign(element.style, styles);
}

export const toggleScroll = (bool: boolean) => {
  css(document.body, { overflow: '', paddingRight: '' });

  if (!bool) {
    let bodyWidth = document.body.getBoundingClientRect().width;
    let paddingRight = window.innerWidth - bodyWidth + 'px';
    css(document.body, {
      overflow: 'hidden',
      paddingRight,
    });
  }
};