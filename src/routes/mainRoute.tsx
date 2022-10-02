import React from 'react';

const Home = React.lazy(() => import('../pages/home/Home'));

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
        path: '401',
        element: <p>No Authorization Found</p>,
    },
    {
        path: '*',
        element: <p>Page Not Found</p>,
    },
];
