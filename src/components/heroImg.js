import React from "react"
import PropTypes from "prop-types"
import * as heroStyles from "./heroImg.module.css"


export default class HeroImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      index: 0,
      opacity: 0,
    };
  }
  toggleVisible = () => {
    console.log('clicked')
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible,
        index: 0
      };
    })
  }
  fadeInEffect = (target) => {
    console.log('fadeout')
    var fadeTarget = document.getElementById(target);
    var fadeEffect = setInterval(() => {
      if (fadeTarget.style.opacity >= 1)
      {
        console.log('clearing')
        clearInterval(fadeEffect);
        this.setState(prevState => {
          return {opacity: 0}
        })
      }
      else
      {
        this.setState(prevState => {
          return {opacity: prevState.opacity += 0.1}
        })
        fadeTarget.style.opacity = this.state.opacity
        console.log('rising')
        console.log(fadeTarget.style.opacity)
        console.log('opacity',this.state.opacity)
      }
    }, 100);
  }
  changeImg = () => {
    console.log('changing')
    console.log('index', this.state.index)
    var bottom = document.getElementById('bottom');
    var top = document.getElementById('top');
    bottom.style.backgroundImage = this.props.bgImages[this.state.index]
    this.setState(prevState => {
      return {index: prevState.index + 1}
    })
    console.log(this.state.index)
    if (this.state.index >= (this.props.bgImages.length)){
      this.setState({
        index: 0
      })
    }
    top.style.display = 'block'
  }
  componentDidMount = () => {
    console.log(this.props.bgImages.length)
    var bottom = document.getElementById('bottom');
    var top = document.getElementById('top');
    bottom.style.backgroundImage = this.props.bgImages[0]
    top.style.display = 'none'
    this.fadeInEffect('bottom');
    // setInterval(this.changeImg, 3000);
    console.log('woopty')
  }
  render() {
    return (
      <div className={heroStyles.heroImg} id="heroImg">
          <p className={heroStyles.callToAction}>Join the conversation on our <a>Discord</a></p>
          <button>Subscribe to my channel</button>
        <figure id="bottom">
          <p className={heroStyles.callToAction}>Join the conversation on our <a>Discord</a></p>
          <button>Subscribe to my channel</button>
        </figure>
        <figure id="top">
          <p className={heroStyles.callToAction}>Join the conversation on our <a>Discord</a></p>
          <button>Subscribe to my channel</button>
        </figure>
      </div>
    )
  }
}
HeroImg.propTypes = {
  bgImages: PropTypes.array,
}
HeroImg.defaultProps = {
  bgImages: ['url(../1-min.png)','url(../2-min.png)', 'url(../3-min.png)'],
}