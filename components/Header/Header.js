export const Header = ({ props }) => {
	return (
		<header>
			<div className={"bg-gradient-to-b from-orange-100 leading-none to-purple-400 rounded-full flex justify-center items-center p-0 text-gray-300 font-bold text-2xl"} style={{ width: 30, height: 30, boxShadow:"0 0 3px 2px var(--purple-400), 0 1px 5px 2px var(--orange-600), 0 0  15px 5px var(--blue-100)" }}>
				<span style={{textShadow:"2px 4px 1px var(--purple-400)"}}>C</span>
			</div>
			<h1 className="text-6xl font-semibold mb-6"></h1>
		</header>
	);
};
