export default function Header({ tagline }) {
	return (
		<div>
			<h1 className="title">
				Hi, I'm <span className="title-name">Harun Richards</span>
			</h1>
			<h2 className="tag-line">{tagline}</h2>
		</div>
	);
}
