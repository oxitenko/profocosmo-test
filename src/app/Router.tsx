import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ForbidenPage from '../pages/ForbidenPage/ForbidenPage';
import {routesLinksEnum} from './routes';
import MainPage from '../pages/MainPage/MainPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import LogoutPage from '../pages/LogoutPage/LogoutPage';
import ProtectedLayout from './layouts/ProtectedLayout';
import LoginLayout from './layouts/LoginLayout';

const router = createBrowserRouter([
	{
		element: <ProtectedLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: routesLinksEnum.main,
				element: <MainPage />,
			},

			{
				path: routesLinksEnum.logout,
				element: <LogoutPage />,
			},
		],
	},
	{
		element: <LoginLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: routesLinksEnum.login,
				element: <LoginPage />,
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
