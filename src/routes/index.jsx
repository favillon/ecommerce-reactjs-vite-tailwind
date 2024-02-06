import { useRoutes } from 'react-router-dom';

import { Home } from '../Page/Home'
import { MyAccount } from '../Page/MyAccount'
import { MyOrder } from '../Page/MyOrder'
import { MyOrders } from '../Page/MyOrders'
import { NotFound } from '../Page/NotFound'
import { Signin } from '../Page/Signin'

const AppRoutes =  () => {
    const router = useRoutes([
        {
          path: '/', element: <Home />
        },
        {
          path: '/my-account', element: <MyAccount />
        },
        {
            path: '/my-order', element: <MyOrder />
        },
        {
            path: '/my-orders', element: <MyOrders />
        },
        {
            path: '/signin', element: <Signin />
        },
        {
            path: '/*', element: <NotFound />
        }
    ]);
    return router;
}
export { AppRoutes };