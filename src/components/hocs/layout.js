const Layout = Comp => ({ title }) => {
	return (
		<>
			<header>
				<h1>{title}</h1>
			</header>
			<Comp />
		</>
	);
};
export default Layout;
