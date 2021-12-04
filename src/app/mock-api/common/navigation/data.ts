/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    // {
    //     id   : 'example',
    //     title: 'Example',
    //     type : 'basic',
    //     icon : 'heroicons_outline:chart-pie',
    //     link : '/example'
    // }
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        subtitle: 'Unique dashboard designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'home',
                title: 'Home',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/dashboard'
            },
        ]
    },
    {
        id      : 'games',
        title   : 'Games',
        subtitle: 'Play to earn games',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'blocky',
                title: 'Blocky',
                type : 'basic',
                icon : 'heroicons_outline:chat-alt',
                link : '/chat'
            }
        ]
    }
];
export const defaultAdminNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        subtitle: 'Unique dashboard designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'home',
                title: 'Home',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : 'admin/dashboard'
            },
            {
                id   : 'admin-users',
                title: 'Users',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : 'admin/users'
            },
            {
                id   : 'games',
                title: 'Games',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : 'admin/games'
            },
            {
                id   : 'news-challenges',
                title: 'News / Challenges',
                type : 'basic',
                icon : 'heroicons_outline:currency-dollar',
                link : 'admin/news-challenges'
            }
        ]
    },
    {
        id      : 'applications',
        title   : 'Applications',
        subtitle: 'Custom mode application designs',
        type    : 'group',
        // icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'leaderboard',
                title: 'Leaderboard',
                type : 'basic',
                icon : 'heroicons_outline:academic-cap',
                link : 'admin/leaderboard'
            },
            {
                id   : 'points',
                title: 'Points',
                type : 'basic',
                icon : 'heroicons_outline:chat-alt',
                link : 'admin/points'
            },
            {
                id   : 'item-bonus',
                title: 'Item & Bonus',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : 'admin/item-bonus'
            },
            {
                id   : 'withdraw',
                title: 'Withdraw',
                type : 'collapsable',
                icon : 'heroicons_outline:shopping-cart',
                link : 'admin/withdraw',
                subtitle: ''
            },
            {
                id   : 'rewards',
                title: 'Rewards',
                type : 'basic',
                icon : 'heroicons_outline:cloud',
                link : 'admin/rewards'
            },
            {
                id   : 'help-center',
                title: 'Help Center',
                type : 'collapsable',
                icon : 'heroicons_outline:support',
                link : 'admin/help-center'
            }
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
