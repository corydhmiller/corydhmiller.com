import Header from "@components/Header"

const Layout = ({ children }) => {
	return (
		<>
			<div className="p-6 w-100vw">
				<Header />
				<main>{children}</main>
			</div>
		</>
	)
}
export default Layout
