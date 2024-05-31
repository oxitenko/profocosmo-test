import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ForbidenPage from '../pages/ForbidenPage/ForbidenPage';
import {routesLinksEnum} from './routes';
import MainPage from '../pages/MainPage/MainPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import LogoutPage from '../pages/LogoutPage/LogoutPage';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: routesLinksEnum.main,
				element: <MainPage />,
			},
			{
				path: routesLinksEnum.login,
				element: <LoginPage />,
			},
			{
				path: routesLinksEnum.logout,
				element: <LogoutPage />,
			},
		],
	},
	{
		path: '*',
		element: <ForbidenPage />,
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
