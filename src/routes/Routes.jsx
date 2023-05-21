import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AddToys from '../pages/AddToys/AddToys';
import Toys from '../pages/Toys/Toys';
import SingleToy from '../pages/SingleToy/SingleToy';
import PrivateRoute from './PrivateRoute';
import MyToys from '../pages/MyToys/MyToys';
import UpdateToy from '../pages/UpdateToy/UpdateToy';
import Home from '../pages/Home/Home';
import Blogs from '../pages/Blogs/Blogs';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ToyDetails from '../pages/ToyDetails/ToyDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
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
				path: '/blogs',
				element: <Blogs></Blogs>,
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
					fetch(
						`https://toy-marketplace-server-roan.vercel.app/toys/${params.id}`
					),
			},
			{
				path: '/updateToy/:id',
				element: (
					<PrivateRoute>
						<UpdateToy></UpdateToy>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://toy-marketplace-server-roan.vercel.app/toys/${params.id}`
					),
			},
			{
				path: '/toysDetails/:id',
				element: <ToyDetails></ToyDetails>,
				loader: ({ params }) =>
					fetch(
						`https://toy-marketplace-server-roan.vercel.app/toys/${params.id}`
					),
			},
		],
	},
]);

export default router;
