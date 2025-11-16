import Head from 'next/head';
import Header from '@components/Header';
import Body from '@components/Body';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Harun Richards</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header name="Harun" tagline="An Oracle Database Admin" />
				<Body text="Proactive, multi-skilled and a highly resourceful individual with a few
					years experience manipulating data. High proficiency in several programming
					principles and languages. Passionate about improving things and carry this
					out through analysis and problem solving.Always on the look out for
					efficient working patterns without negatively impacting the output." />
			</main>
			<Footer />
		</div>
	);
}
