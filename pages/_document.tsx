import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='ru'>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link href='https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap' rel='stylesheet' />
				</Head>
				<body className='from-green dark:from-dark-100 dark:to-dark-200 bg-gradient-to-r to-blue-400 dark:text-white print:bg-black'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
