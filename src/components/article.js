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
            <span class="date">Posted - {this.props.articleDate}</span>
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