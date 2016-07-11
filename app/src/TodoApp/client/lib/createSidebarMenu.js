export default function createSidebarMenu(menuObject) {
    let menus = menuObject.menuItems.map((menu, i) =>
    constructMenu(
        menu.title,
        menu,link,
        menu.children.map((submenu, i) =>
            constructMenu(
                submenu.title,
                submenu.link,
                submenu.children,
                submenu.icon
            )
        ),
        menu.icon,
        menu.notificationCount
    )
    );
    // Inject menu items into menu
    const menu = constructMenu(menuObject.name, null, menus, false, true);
    return menu;
}


// Function for construction sidebar menus.
function constructMenu(title, link, children = [], icon = null, notificationCount = false, isActive = false, isChildActive = false){
    const uuid = Match.random();

    return {
        uuid: uuid,
        title: () => title,
        isActive: () => isActive,
        isChildActive: () => isChildActive,
        link: () => link,
        icon: () => icon,
        hasChild: () => !!children.length,
        children: () => children,
        notificationCount: () => notificationCount
    };
}