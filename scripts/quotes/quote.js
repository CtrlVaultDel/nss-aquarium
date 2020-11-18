export const quoteHTML = (quote) => {
    // Returns a string of HTML
    return `
        <section class="quote">
            <div class="quote__text">"${quote.text}"</div>
            <div class="quote__author"><strong>-${quote.author}</strong></div>
        </section>
    `
}