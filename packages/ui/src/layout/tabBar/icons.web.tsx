import {
  getSharedAskTabIconOptions,
  getSharedCommentsTabIconOptions,
  getSharedMyPageTabIconOptions,
  getSharedNewsTabIconOptions,
  TabBarIcon,
} from './shared';

export const getNewsTabIconOptions: TabBarIcon = () => ({
  ...getSharedNewsTabIconOptions(),
  activation: (segment) => segment === 'news',
  href: '/news',
});

export const getCommentsTabIconOptions: TabBarIcon = () => ({
  ...getSharedCommentsTabIconOptions(),
  activation: (segment) => segment === 'comments',
  href: '/comments',
});

export const getAskTabIconOptions: TabBarIcon = () => ({
  ...getSharedAskTabIconOptions(),
  activation: (segment) => segment === 'ask',
  href: '/ask',
});

export const getMyPageTabIconOptions: TabBarIcon = () => ({
  ...getSharedMyPageTabIconOptions(),
  activation: (segment) => segment === 'my-page',
  href: '/my-page',
});
