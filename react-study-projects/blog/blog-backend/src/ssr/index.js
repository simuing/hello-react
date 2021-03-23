require('browser-env')();
const render = require('./render').default;

function buildHtml({html, preloadedState}) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
        name="description"
        content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <!--
        manifest.json provides metadata used when your web app is installed on a
        user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
        -->
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>React App</title>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
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
