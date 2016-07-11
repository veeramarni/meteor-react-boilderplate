import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Divider from './Divider';
import SidebarMenu from './SidebarMenu';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router';

export default class Sidebar extends Component {

    static propTypes = {
        location: PropTypes.string.isRequired,
        mainMenu: PropTypes.object.isRequired,
        profileMenu: PropTypes.object.isRequired,
        ui: PropTypes.object.isRequired
    };

    render() {
        const sidebarOpen = this.props.ui.isSideMenuOpen;
        const miniMenuClass = classNames({'sidebar': true, 'mini-menu': sidebarOpen});
        const mainMenu = this.props.mainMenu.children()
            .map((menu, i) => <SidebarMenu key={i} location={pathname} menu={menu}/>);
        const profileMenu = this.props.profileMenu.children()
            .map((menu, i) => <SidebarMenu key={i} location={pathname} menu={menu}/>);

        return (

            <div className={miniMenuClass} id="sidebar">
                <Link to="/">
                    <Image circle className="profile-pic" src="img/profile/twitter-avatar.png"/>
                </Link>
                <div className="sidebar-menu nav-collapse">
                    <div className="divide-20"></div>
                    <ul>
                        {profileMenu}
                        <Divider height={20}/>
                        {mainMenu}
                        <Divider height={20}/>
                    </ul>
                </div>
            </div>
        )
    }
}