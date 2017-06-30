"# project-w" 

Installation:  npm install

Please update your /node_modules/next/dist/pages/_document.js file with content:
"

import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          {/* ... */}

          {styleTags}
        </Head>

        <body>
          <div className="root">
            {main}
          </div>

          <NextScript />
        </body>
      </html>
    )
  }
}

"

So, that your styled-components can support the server side rendering.

To Run: npm run next    OR    node server.js
