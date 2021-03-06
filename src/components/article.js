import PropTypes from "prop-types"
import React from "react"
import articleStyles from "./article.module.css"

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isVisible: false,
        // };
    }
    // toggleVisible = () => {
    //     console.log('clicked')
    //     this.setState((prevState) => {
    //         return {
    //             isVisible: !prevState.isVisible
    //         };
    //     })
    // }
    render() {
        return ( <div className={articleStyles.article}>
            <h3>{this.props.articleTitle}</h3>
            <p>{this.props.articleBody}</p>
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