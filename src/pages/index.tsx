import loadable from '@loadable/component';

export const Home = loadable(() => import( /* webpackChunkName: "Home" */ './Home'));
export const ChatRoom = loadable(() => import( /* webpackChunkName: "ChatRoom" */ './ChatRoom'));