import React from 'react'

import App from './App'
import HomePage from './Pages/HomePage.jsx'
import UsersListPage from './Pages/UsersListPage.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import AdminsListPage from './Pages/AdminsListPage.jsx'

export default [
    {
        ...App,
        routes: [
            {
            ...HomePage,
            path: '/',
            exact: true
            },
            {
            ...UsersListPage,
            path: '/users',
            },
            {
            ...AdminsListPage,
            path: '/admins'

            },
            {
            ...NotFoundPage
            }

        ]
    }
  
];


