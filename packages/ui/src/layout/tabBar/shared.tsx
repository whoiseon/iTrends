import { Icon } from '../../system/icon';

type TabBarIconReturn = {
  tabBarIcon: ({
    className,
    size,
    color,
  }: {
    className?: string;
    size?: number;
    color?: string;
  }) => React.ReactNode;
  title: string;
  href?: string;
  activation?: (segment: string) => boolean;
};

export type TabBarIcon = () => TabBarIconReturn;

export const getSharedNewsTabIconOptions: TabBarIcon = () => ({
  tabBarIcon: ({ className, size, color }) => {
    return (
      <Icon
        name="Home"
        className={className}
        size={size}
        strokeWidth={1.5}
        color={color}
      />
    );
  },
  title: 'News',
});

export const getSharedCommentsTabIconOptions: TabBarIcon = () => ({
  tabBarIcon: ({ className, size, color }) => {
    return (
      <Icon
        name="MessageCircle"
        className={className}
        size={size}
        strokeWidth={1.5}
        color={color}
      />
    );
  },
  title: 'Comments',
});

export const getSharedAskTabIconOptions: TabBarIcon = () => ({
  tabBarIcon: ({ className, size, color }) => {
    return (
      <Icon
        name="MessageCircleQuestion"
        className={className}
        size={size}
        strokeWidth={1.5}
        color={color}
      />
    );
  },
  title: 'Ask',
});

export const getSharedMyPageTabIconOptions: TabBarIcon = () => ({
  tabBarIcon: ({ className, size, color }) => {
    return (
      <Icon
        name="UserRound"
        className={className}
        size={size}
        strokeWidth={1.5}
        color={color}
      />
    );
  },
  title: 'My Page',
});
