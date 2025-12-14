import Head from 'next/document';

const Seo = ({ title, description, canonical, image }) => (
	<Head>
		<title>{title}</title>
		<meta
			name='description'
			content={description}
		/>

		<link
			rel='canonical'
			href={canonical}
		/>

		<meta
			name='robots'
			content='index, follow'
		/>

		{/* Open Graph */}
		<meta
			property='og:type'
			content='website'
		/>
		<meta
			property='og:title'
			content={title}
		/>
		<meta
			property='og:description'
			content={description}
		/>
		<meta
			property='og:url'
			content={canonical}
		/>
		<meta
			property='og:image'
			content={image}
		/>

		{/* Twitter */}
		<meta
			name='twitter:card'
			content='summary_large_image'
		/>
		<meta
			name='twitter:title'
			content={title}
		/>
		<meta
			name='twitter:description'
			content={description}
		/>
		<meta
			name='twitter:image'
			content={image}
		/>
	</Head>
);

export default Seo;
