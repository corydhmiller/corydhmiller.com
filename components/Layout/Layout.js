import Header from "@components/Header";
const Layout = ({ children }) => {
	return (
		<>
			<div className="w-100vw bg-black p-6">
				<Header />
				<main>{children}</main>
			</div>
		</>
	);
};
export default Layout;
