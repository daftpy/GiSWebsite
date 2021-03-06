import PropTypes from "prop-types"
import React from "react"
import * as headerStyles from "./header.module.css"

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }
    toggleVisible = () => {
        console.log('clicked')
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            };
        })
    }
    render() {
        return ( <div className={headerStyles.header}>
            <div class={headerStyles.headerContainer}>
                <h1 class={headerStyles.brand}>{this.props.siteTitle}</h1>
                <div class={headerStyles.navbarContainer}>
                    <ul class={headerStyles.navbar}>
                        {this.props.links.map(link => (
                            <li className={headerStyles.navLink}><a href={link.url}>{link.text}</a></li>
                        ))}
                    </ul>
                </div>
                <div class={headerStyles.hamburger}><button onClick={this.toggleVisible}><i class="fas fa-bars" role="button" aria-label="Expand menu"></i></button></div>
            </div>
            { this.state.isVisible &&
                <ul class={headerStyles.dropdownHeader}>
                    {this.props.links.map(link => (
                        <li className={headerStyles.dropdownLink}><a href={link.url}>{link.text}</a></li>
                    ))}
                </ul>
            }
        </div>
        )
    }
}
Header.propTypes = {
    siteTitle: PropTypes.string,
}
Header.defaultProps = {
    siteTitle: ``,
}