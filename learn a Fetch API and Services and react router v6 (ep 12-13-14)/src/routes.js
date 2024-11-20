import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Blog404 from "./pages/blog/Blog404";
import Blog from "./pages/blog/Blog";
import Page404 from "./pages/404";
import Profile from "./pages/Profile";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
import HomeLayout from "./pages/HomeLayout";
import PrivateRoute from "./components/PrivateRoute";

const routes = [
    {
        path: '/',
        name: 'home', // Burada "home" adıyla eşleşiyor
        element: <HomeLayout />,
        children: [
            {
                index: true,
                name: 'index',
                element: <Home />
            },
            {
                name: 'contact',
                path: 'contact',
                element: <Contact />
            },
            {
                name: 'blog',
                path: 'blog',
                element: <BlogLayout />,
                auth: true,
                children: [
                    {
                        name: 'index',
                        index: true,
                        element: <Blog />
                    },
                    {
                        name: 'categories',
                        path: 'categories',
                        element: <Categories />
                    },
                    {
                        name: 'post', // Burada "post" adı ve parametreli path
                        path: 'post/:id/:url',
                        element: <Post />
                    },
                    {
                        name: 'notFound',
                        path: '*',
                        element: <Blog404 />
                    }
                ]
            },
            {
                name: 'profile',
                path: 'profile',
                element: <Profile />,
                auth: true
            },
            {
                name: 'auth',
                path: 'auth',
                element: <AuthLayout />,
                children: [
                    {
                        name: 'login',
                        path: 'login',
                        element: <Login />
                    }
                ]
            },
            {
                name: 'notFound',
                path: '*',
                element: <Page404 />
            }
        ]
    }
];


const authMap = routes => routes.map(route => {
    if (route?.auth){
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if (route?.children){
        route.children  = authMap(route.children)
    }
    return route
})

authMap(routes)

export default authMap(routes)
