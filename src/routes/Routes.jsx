import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AddToys from '../pages/AddToys/AddToys';
import Toys from '../pages/Toys/Toys';
import AllToys from '../pages/AllToys/AllToys';

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
	{
		path: '/allToys',
		element: <AllToys></AllToys>,
	},
	{
		path: '/toys',
		element: <Toys></Toys>,
	},
	{
		path: '/addToys',
		element: <AddToys></AddToys>,
	},
]);

export default router;
