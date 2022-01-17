import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Harun Richards</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header name="Harun" tagline="A Frontend Web Developer" />
				<p className="description">
					Proactive, multi-skilled and a highly resourceful individual with a few
					years experience manipulating data. High proficiency in several programming
					principles and languages. Passionate about improving things and carry this
					out through analysis and problem solving.Always on the look out for
					efficient working patterns without negatively impacting the output.
				</p>
			</main>

			<Footer />
		</div>
	);
}
