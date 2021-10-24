/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { PageProps } from "gatsby";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout";
import GridItem from "@lekoarts/gatsby-theme-jodie/src/components/grid-item";
import {
  itemListWrapperStyles,
  itemStyles,
} from "@lekoarts/gatsby-theme-jodie/src/styles/item-list";
import locales from "@lekoarts/gatsby-theme-jodie/src/locales";
import { visuallyHidden } from "@lekoarts/gatsby-theme-jodie/src/styles/utils";
import modifyGrid from "@lekoarts/gatsby-theme-jodie/src/utils/modify-grid";

type DataProps = {
  // `projects` are blog posts - items within `content/blog/`
  projects: {
    nodes: {
      slug: string;
      title: string;
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
      __typename: "MdxProject";
    }[];
  };
  pages: {
    nodes: {
      slug: string;
      title: string;
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
      __typename: "MdxPage";
    }[];
  };
};

const Homepage: React.FC<PageProps<DataProps>> = ({ data: { projects } }) => {
  // Pass project pages as items to display
  // Could also add standard pages (i.e. [...pages.nodes, ...projects.nodes])
  const rawItems = [...projects.nodes];
  const items = modifyGrid(rawItems);
  const itemsCount = items.length;
  let divisor = 9;

  for (let i = 0; i < itemsCount; i++) {
    const quotient = itemsCount % divisor;
    const quotientAlt = (itemsCount - 1) % divisor;

    if (quotient === 0 || quotientAlt === 0) {
      break;
    }

    divisor -= 1;
  }

  return (
    <Layout>
      <h1 sx={visuallyHidden} data-testid="page-title">
        {locales.home}
      </h1>
      <div className={`item-list-wrapper`} sx={itemListWrapperStyles}>
        <div className={`item-list div${divisor}`}>
          {items.length > 0 ? (
            items.map((item, index) => (
              <GridItem
                to={item.slug}
                className="item"
                key={item.title}
                sx={itemStyles}
                data-testid={item.title}
              >
                <GatsbyImage
                  loading={index === 0 ? `eager` : `lazy`}
                  image={item.cover.childImageSharp.gatsbyImageData}
                  alt=""
                />
                <span>{item.title}</span>
              </GridItem>
            ))
          ) : (
            <div sx={{ padding: 3 }}>
              No projects and pages found at the locations defined for
              "projectsPath" and "pagesPath"
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
