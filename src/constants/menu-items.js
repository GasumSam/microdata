import React from "react"
import { DiGithubBadge } from "react-icons/di"
import { FaTwitter, FaLinkedin, FaTelegram } from "react-icons/fa"

export const mainMenuItems = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/#about",
    title: "about",
  },
  {
    path: "/#packages",
    title: "solutions",
  },
  {
    path: "/#contact",
    title: "contact",
  },
]

export const socialMenuItems = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/josemanguzman/",
    name: "LinkedIn",
  },
  {
    icon: <FaTelegram />,
    url: "https://t.me/microdata_ai",
    name: "Telegram",
  },
  {
    icon: <DiGithubBadge />,
    url: "https://github.com/bagseye",
    name: "GitHub",
  },
]

/*export const footerMenuItems = [
  {
    path: "/privacy",
    title: "privacy",
  },
  {
    path: "/cookies",
    title: "cookies",
  },
]*/
