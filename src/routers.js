import React from 'react';
import Home from './components/Home/Index'
import Contact from './components/Contact/Index'
import About from './components/About/Index'
import Shop from './components/Shop/Index'
import AddItem from './components/AddItem/Index'
import ItemList from './components/Admin/ItemList'
import Cart from './components/Cart/Index'
import Login from './components/Login/Index'
import Register from './components/Register/Index'


const routes = [
    {
        path:'/',
        exact:true,
        main: () => <Home/>
    },
    {
        path:'/contact',
        exact:false,
        main:()=><Contact/>
    },
    {
        path:'/about',
        exact:false,
        main:()=><About/>
    },
    {
        path:'/product',
        exact:false,
        main:()=><Shop/>
    },
    {
        path:'/cart',
        exact:false,
        main:()=><Cart/>
    },
    {
        path:'/register',
        exact:false,
        main:({history})=><Register history={history}/>
    },
    {
        path:'/login',
        exact:false,
        main:()=><Login/>
    },
    // {
    //     path:'/userList',
    //     exact:false,
    //     main:({history})=><UserList history={history}/>
    // },
    // {
    //     path:'/:id/editUser',
    //     exact:false,
    //     main:({match,history})=><EditUser history={history} match={match}/>
    // },
    // {
    //     path:'/:id/infoProduct',
    //     exact:false,
    //     main:({match,history})=><Info history={history} match={match}/>
    // },
    {
        path:'/addClothe',
        exact:false,
        main:({history})=><AddItem history={history}/>
    },
    {
        path:'/productList',
        exact:false,
        main:({history})=><ItemList history={history}/>
    },
    // {
    //     path:'/:id/editProduct',
    //     exact:false,
    //     main:({match,history})=><EditProduct history={history} match={match}/>
    // },
]
export default routes;

