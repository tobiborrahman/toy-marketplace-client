import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AddToys from '../pages/AddToys/AddToys';
import Toys from '../pages/Toys/Toys';
import AllToys from '../pages/AllToys/AllToys';
import SingleToy from '../pages/SingleToy/SingleToy';
import PrivateRoute from './PrivateRoute';
import MyToys from '../pages/MyToys/MyToys';
import UpdateToy from '../pages/UpdateToy/UpdateToy';

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
		path: '/toys',
		element: <Toys></Toys>,
	},
	{
		path: '/addToys',
		element: (
			<PrivateRoute>
				<AddToys></AddToys>
			</PrivateRoute>
		),
	},
	{
		path: '/myToys',
		element: (
			<PrivateRoute>
				<MyToys></MyToys>
			</PrivateRoute>
		),
	},
	{
		path: '/singleToy/:id',
		element: (
			<PrivateRoute>
				<SingleToy></SingleToy>
			</PrivateRoute>
		),
		loader: ({ params }) =>
			fetch(`http://localhost:5000/toys/${params.id}`),
	},
	{
		path: '/updateToy/:id',
		element: (
			<PrivateRoute>
				<UpdateToy></UpdateToy>
			</PrivateRoute>
		),
		loader: ({ params }) =>
			fetch(`http://localhost:5000/toys/${params.id}`),
	},
]);

export default router;
