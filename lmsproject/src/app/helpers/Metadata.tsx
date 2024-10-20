import React from 'react'
import {Helmet} from "react-helmet"
const Metadata = ({title}:{title:string}) => {
  return (
    <Helmet>
      <title>{`LMS - ${title}`}</title>
    </Helmet>
  )
}

export default Metadata
