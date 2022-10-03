import { lazy, LazyExoticComponent } from 'react';

import { NoLazy } from '../01-lazyload/pages/NoLazy';


type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent // () => JSX.Element ;
    children?: Route[];
}
                                           // Renombrar los chunks
// const LazyPage1 = lazy( () => import( /* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1') );



export const routes: Route[] = [
    {
        path: '/lazyload',
        Component: lazy( () => import( /* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout')),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy Loading'
    }
]

