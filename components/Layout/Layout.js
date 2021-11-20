const Layout = ({ children }) => {
	return (
		<>
		<div className="w-100vw h-100vh bg-black p-6">
				<main>{children}</main>
			</div>
		</>
	);
};
export default Layout;
