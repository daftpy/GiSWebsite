import PropTypes from "prop-types"
import React from "react"
import * as articleStyles from "./article.module.css"

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( <div className={articleStyles.article}>
            <h3>{this.props.articleTitle}</h3>
            <div dangerouslySetInnerHTML={{__html: this.props.articleBody}}></div>
            <div className={articleStyles.articleMetaContainer}>
                <span className={articleStyles.date}>Posted - {this.props.articleDate}</span>
                <button class="blue-button">Read more</button>
            </div>
        </div>
        )
    }
}
Article.propTypes = {
    articleTitle: PropTypes.string,
}
Article.defaultProps = {
    articleTitle: ``,
}