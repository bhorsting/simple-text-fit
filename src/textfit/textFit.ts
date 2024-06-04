const measureDiv = document.createElement('div');
measureDiv.style.position = 'absolute';
measureDiv.style.top = '-9999px';
measureDiv.style.left = '-9999px';
document.body.appendChild(measureDiv);

export const textFit = (div: HTMLDivElement) => {
    measureDiv.innerText = div.innerText;
    const computedStyle = window.getComputedStyle(div);
    const propertiesToCopy = ["fontFamily", "fontWeight", "fontStyle", "lineHeight", "letterSpacing", "textTransform", "wordSpacing", "textIndent", "textRendering", "textDecoration", "width", "height", "fontSize"];
    propertiesToCopy.forEach((property) => {
        measureDiv.style[property as any] = computedStyle[property as any];
    });
    const {scrollHeight, scrollWidth, clientHeight, clientWidth} = measureDiv;
    if (scrollHeight > clientHeight || scrollWidth > clientWidth) {
        div.style.fontSize = `${parseInt(computedStyle.fontSize) - 1}px`;
        textFit(div);
    }
}
