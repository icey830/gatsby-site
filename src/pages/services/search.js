import React, { useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";

import ServicePage from "../../components/service/service";

export default () => {
  useEffect(() => {
    document.body.classList.remove("homepage");
  });
  return (
    <StaticQuery
      query={graphql`
        query searchQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/search/" } }
            sort: { fields: frontmatter___title }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  path
                  url
                  logo
                  tags
                }
                html
                fields {
                  collection
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => (
        <ServicePage
          pageTitle="Services | Search"
          pageHeader="Services"
          pageSubHeader="Search"
          intro="You don't need your own server to have search functionality, as there are services that do it all through APIs."
          services={data.allMarkdownRemark.edges}
        />
      )}
    />
  );
};
