import React from "react"
import * as heroStyles from "./heroImg.module.css"

export default function HeroImg(props) {
    return <div className={heroStyles.heroImg}>
        <p className={heroStyles.callToAction}>Join the conversation on our <a>Discord</a></p>
        <button>Subscribe to my channel</button>
    </div>
}
