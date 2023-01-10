Cypress.$(document).ready(function() {
  // function updateMousePositionIndicator(e) {
  //   const x = e.clientX;
  //   const y = e.clientY;

  //   document.getElementById(
  //     'cypress-mouse-position-indicator',
  //   ).innerHTML = mousePositionText(x, y);
  // }

  // function mousePositionText(x, y) {
  //   return `
  //   Mouse Position<br />
  //   clientX: ${x}<br />
  //   clientY: ${y}<br />
  //   `;
  // }

  // const mousePositionIndicator = Cypress.$(
  //   `
  //   <div id="cypress-mouse-position-indicator">
  //     ${mousePositionText(0, 0)}
  //   </div>
  // `,
  // );

  // Cypress.$(document.body).append(mousePositionIndicator);
  const baseUrl = Cypress.config().baseUrl
  document.querySelector('.aut-iframe').addEventListener('load', function() {
    // this.contentWindow.document.body.onmousemove = updateMousePositionIndicator;

    const seleniumFollowerImg = document.createElement("img");
    seleniumFollowerImg.setAttribute('src', 'data:image/png;base64,'
      + 'iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAQAAACGG/bgAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAA'
      + 'HsYAAB7GAZEt8iwAAAAHdElNRQfgAwgMIwdxU/i7AAABZklEQVQ4y43TsU4UURSH8W+XmYwkS2I0'
      + '9CRKpKGhsvIJjG9giQmliHFZlkUIGnEF7KTiCagpsYHWhoTQaiUUxLixYZb5KAAZZhbunu7O/PKf'
      + 'e+fcA+/pqwb4DuximEqXhT4iI8dMpBWEsWsuGYdpZFttiLSSgTvhZ1W/SvfO1CvYdV1kPghV68a3'
      + '0zzUWZH5pBqEui7dnqlFmLoq0gxC1XfGZdoLal2kea8ahLoqKXNAJQBT2yJzwUTVt0bS6ANqy1ga'
      + 'VCEq/oVTtjji4hQVhhnlYBH4WIJV9vlkXLm+10R8oJb79Jl1j9UdazJRGpkrmNkSF9SOz2T71s7M'
      + 'SIfD2lmmfjGSRz3hK8l4w1P+bah/HJLN0sys2JSMZQB+jKo6KSc8vLlLn5ikzF4268Wg2+pPOWW6'
      + 'ONcpr3PrXy9VfS473M/D7H+TLmrqsXtOGctvxvMv2oVNP+Av0uHbzbxyJaywyUjx8TlnPY2YxqkD'
      + 'dAAAAABJRU5ErkJggg==');
    seleniumFollowerImg.setAttribute('id', 'selenium_mouse_follower');
    seleniumFollowerImg.setAttribute('style', 'position: absolute; z-index: 99999999999; pointer-events: none; left:0; top:0');
    this.contentWindow.document.body.appendChild(seleniumFollowerImg);

    this.contentWindow.document.body.onmousemove = (e) => {
      this.contentWindow.document.body.querySelector("#selenium_mouse_follower").style.left = e.pageX + 'px';
      this.contentWindow.document.body.querySelector("#selenium_mouse_follower").style.top = e.pageY + 'px';
    };
  })
});
