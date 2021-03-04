import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Images from './pages/images';
import Weather from './pages/weather';
import Page404 from './pages/page-404';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/images" exact>
					<Images title="Mars Images By Date" />
				</Route>
				<Route path="/weather" exact>
					<Weather title="Mars Weather" />
				</Route>
				<Route path="/" exact>
					<About title="About The Program" />
				</Route>
				<Route path="*">
					<Page404 />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
