import React from 'react';
import CategoryDetail from '../components/category/CategoryDetail';

const Home = React.lazy(() => import('../pages/home/Home'));
const Category = React.lazy(() => import('../pages/category/Category'));

export const mainRoute = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/:id',
        element: <Category />,
    },
    {
        path: '401',
        element: <p>No Authorization Found</p>,
    },
    {
        path: '*',
        element: <p>Page Not Found</p>,
    },
];
