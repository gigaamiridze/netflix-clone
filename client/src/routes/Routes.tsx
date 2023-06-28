import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Root, Home, Video, Login, Register } from '../pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' Component={Root}>
      <Route index Component={Home} />
      <Route path='/video' Component={Video} />
      <Route path='/login' Component={Login} />
      <Route path='/register' Component={Register} />      
    </Route>
  )
);

export default router;