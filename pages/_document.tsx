import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='ru'>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link href='https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap' rel='stylesheet' />
					<meta name='description' content='Фронтенд разработчик ищет работу' />
					<meta
						name='keywords'
						content='фулл стек разработчик, фронтенд разработчик, разработчик в узбекистане, фронтенд узбекистан, фрилансер в узбекистане'
					/>
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
