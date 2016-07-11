export default {
    name: 'Main menu',
    menuItems: [
        {
            title: 'Dashboard',
            link: '/',
            children: [],
            icon: 'fa fa-home fa-fw',
            notificationCount: null
        },
        {
            title: 'UI Elements',
            link: null,
            children: [
                {
                    title: 'Typography',
                    link: '/typography',
                    children: [],
                    icon: 'sidebar-sub-link fa fa-circle-thin'
                }
            ],
            icon: 'fa fa-desktop fa-fw',
            notificationCount: 19,
        },
        {
            title: 'Charts',
            link: '/charts',
            children: [],
            icon: 'fa fa-bar-chart fa-fw',
            notificationCount: null
        }
    ]
}