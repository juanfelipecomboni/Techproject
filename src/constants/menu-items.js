import React from "react"
import { DiGithubBadge } from "react-icons/di"
import { FaTwitter, FaLinkedin } from "react-icons/fa"

export const mainMenuItems = [  
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/#about",
    title: "about",
  },
  {
    path: "#packages",
    title: "packages",
  },
  {
    path: "#contact",
    title: "contact",
  },
]

export const socialMenuItems = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/felipe-comboni-2b988a3b/",
    name: "LinkedIn",
  },
 
  {
    icon: <DiGithubBadge />,
    url: "https://github.com/juanfelipecomboni",
    name: "GitHub",
  },
]

