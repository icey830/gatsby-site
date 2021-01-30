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
        query cmsQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/cmss/" } }
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
          pageTitle="Services | CMSs"
          pageHeader="Services"
          pageSubHeader="Content Management Systems"
          intro="Gotta manage that content."
          services={data.allMarkdownRemark.edges}
        />
      )}
    />
  );
};
