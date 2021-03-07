import PropTypes from "prop-types"
import React from "react"
import * as footerStyles from "./footer.module.css"

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={footerStyles.footer}>
        <div className={footerStyles.contactContainer}>
          <div className={footerStyles.contact}>
            <h2>Contact</h2>
            <p>For inquiries contact gabeisgunk@gmail.com</p>
            <p>To contact the webadmin click <a href="#">here</a></p>
          </div>
          <div className={footerStyles.schedule}>
            <h2>Schedule</h2>
            <p>Schedule is subject to change</p>
            <p><b>Monday-Friday</b> 4PM - 7:30PM PST</p>
          </div>
        </div>
        <div className={footerStyles.socialLinkContainer}>
          <h2>Social</h2>
          <div class={footerStyles.icons}>
            <div><i class="fab fa-twitch fa-3x"></i></div>
            <div><i class="fab fa-instagram fa-3x"></i></div>
            <div><i class="fab fa-tiktok fa-3x"></i></div>
            <div><i class="fab fa-soundcloud fa-3x"></i></div>
            <div><i class="fab fa-youtube fa-3x"></i></div>
          </div>
        </div>
      </div>
    )
  }
}
Footer.propTypes = {
    // siteTitle: PropTypes.string,
}
Footer.defaultProps = {
    // siteTitle: ``,
}