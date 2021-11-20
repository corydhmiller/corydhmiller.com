const Content = ({ children }) => {
	return (
		<div className="bg-blue-800">
			<div className="max-w-4xl p-7 mx-auto text-gray-100">{children}</div>
		</div>
	);
};

export default Content;