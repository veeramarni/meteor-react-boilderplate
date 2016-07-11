import {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {Collapse} from 'react-bootstrap';
import classNames from 'classnames';

export default class SidebarMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openMenus: []
        };
    }

    static propTypes = {
        location: PropTypes.string.isRequired,
        menu: PropTypes.object.isRequired
    };


    isOpen(menu) {
        return menu.isChildActive() || this.state.openMenus.indexOf(menu) !== -1;
    }

    toggleChildren(e) {
        e.preventDefault();

        const menu = this.props.menu;
        const path = this.props.location;
        const openMenus = this.state.openMenus;

        if (openMenus.indexOf(menu) !== -1) {
            // menu is already open, the click closes it
            // except if a submenu is open
            if (menu.isChildActive(path)) {
                return;
            }

            openMenus.splice(openMenus.indexOf(menu), 1);
        } else {
            openMenus.push(menu);
        }

        this.setState({
            openMenus: openMenus
        });
    }

    render() {
        if (!this.state) {
            return null;
        }

        const menu = this.props.menu;
        const link = menu.link();
        const hasChild = menu.hasChild();
        const path = this.props.location;

        let childClass = classNames({'has-sub': hasChild, 'active': this.isOpen(menu)});
        let content;
        let childrenContainer;
        const icon = menu.icon() ? <i className={menu.icon()}></i> : '';
        const arrowClass = classNames({'arrow': true, 'open': this.isOpen(menu)});
        const arrow = hasChild ? <span className={arrowClass}></span> : null;

        // Children
        if (hasChild) {
            const containerClass = classNames({'sub': true, 'active': this.isOpen(menu)});
            const children = menu.children();
            let childrenElements = [];
            let child;

            for (let i in children) {
                child = children[i];
                childrenElements.push(<SidebarMenu key={child.uuid} location={path} menu={child}/>);
            }

            childrenContainer = (
                <Collapse in={this.isOpen(menu)}>
                    <ul className={containerClass}>
                        {childrenElements}
                    </ul>
                </Collapse>
            );
        }

        // No link provided
        if (!link) {
            content = (
                <a href="#" onClick={this.toggleChildren.bind(this)}>
                    { icon }
                    <span className="menu-text"> { menu.title() }</span>
                    {arrow}
                </a>
            )
        } else {
            content = (
                <Link to={link}>
                    {icon}
                    <span className="menu-text">{ menu.title() }</span>
                    {arrow}
                </Link>
            )
        }
        return (
            <li className={childClass}>
                {content}

                {childrenContainer}
            </li>
        )
    }

}