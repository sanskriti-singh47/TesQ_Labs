import React from 'react';
import styled from 'styled-components'

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
       
},
{
    title: 'Candidates',
    path: '/candidate',
    subNav: [
        {
            title: 'Active',
            path: '/candidates/active',
        },
        {
            title: 'Favourite',
            path: '/candidates/favourite',
        },
        {
            title: 'Archieved',
            path: '/candidates/archieved',
        },
        {
            title: 'Pending',
            path: '/candidates/pending',
        },
        {
            title: 'Completed',
            path: '/candidates/complete',
        },
        {
            title: 'All',
            path: '/candidates/all',
        },
    ]
},
{
    title: 'Test Configuration',
    path: '/test configuration',
},
{
    title: 'Profiles',
    path: '/profiles',
},
{
    title: 'Connected Accounts',
    path: '/connected accounts',
},
{
    title: 'Products',
    path: '/products',
},
{
    title: 'Analytics',
    path: '/analytics',
},
{
    title: 'Reports',
    path: '/reports',
},
{
    title: 'Billing',
    path: '/billing',
},
]
