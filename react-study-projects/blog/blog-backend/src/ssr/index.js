require('browser-env')();
const render = require('./render').default;

function buildHtml({html, helmet, preloadedState}) {
    const { title, meta } = helmet;
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        ${title.toString()}
        ${meta.toString()}
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${html}</div>
        <script>
            window.__PRELOADED_STATE__ = ${preloadedState}
        </script>
    </body>
    </html>
    `;
}

module.exports = async (ctx) => {
    try {
        const rendered = await render(ctx);
        ctx.body = buildHtml(rendered);
    } catch (e) {
        // 오류가 발생하면 일반 html 응답
        ctx.body = buildHtml({});
    }
}
