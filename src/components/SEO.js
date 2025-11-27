import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SEO;
