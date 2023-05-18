import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/login',
		element: <Login></Login>,
	},
	{
		path: '/register',
		element: <Register></Register>,
	},
]);

export default router;
