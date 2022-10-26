import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Favorite from '~/pages/Favorite';
import { OnlyHeader } from '~/components/Layout';

const priveRoutes = [];

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following, layout: OnlyHeader },
  { path: '/favorite', component: Favorite, layout: null },
];

export { publicRoutes, priveRoutes };
