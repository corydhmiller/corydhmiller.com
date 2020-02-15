/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "../styles/button.scss"

const Button = ({text = "Default", url}) => {
 
  return (
    <button>
      {text}
    </button>
  )
}

export default Button
