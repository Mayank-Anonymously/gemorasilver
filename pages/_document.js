import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
				/>
				<meta
					name='mobile-web-app-capable'
					content='yes'
				/>
				<meta
					name='apple-mobile-web-app-status-bar-style'
					content='black-translucent'
				/>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossorigin
				/>

				<link
					href='https://fonts.googleapis.com/css2?
  family=Poppins:ital,wght@0,100..900;1,100..900&
  family=Epunda+Slab:ital,wght@0,300..900;1,300..900&
  family=Nunito:ital,wght@0,200..1000;1,200..1000&
  family=Cedarville+Cursive&
  family=Great+Vibes&
  display=swap'
					rel='stylesheet'
				/>
			</Head>

			<body>
				<Head>
					{/* <!-- Google tag (gtag.js) --> */}
					<script
						async
						src='https://www.googletagmanager.com/gtag/js?id=G-B20Y5V1TDS'></script>
					<script>
						{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-B20Y5V1TDS');`}
					</script>
				</Head>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
