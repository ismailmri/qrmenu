import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import './index.css'
import UnityModel from '../modules/unityModel';

export const query = graphql `
  {
  allContentfulProduct {
    nodes {
      id
      productName
      productSlug
      shortDescription
      price
      mainImage {
        fluid(quality: 90, maxWidth: 300) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      otherImages {
        fluid(quality: 90, maxWidth: 300) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
}`;

const StyledImage = styled(Img)`
  width: 100%;
  height: 60%;
  max-height: 200px;
`;



const IndexPage = ({ data }) => {
  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <UnityModel />
      <h1 className="menu-title">Menu</h1>
      <div className="products">
        {products.map(product => (
          <Link key={product.productSlug} to={`/products/${product.productSlug}`} style={{textDecoration: "none", color: "black"}}>
                <div className="card">
                  <StyledImage fluid={product.mainImage.fluid} />
                  <h4>{product.productName}</h4>
                  <p className="short-description"> {product.shortDescription} </p>
                  <p className="price"> {product.price} JD</p>
                    <button
                      className={`snipcart-add-item`}
                      data-item-id={product.id}
                      data-item-name={product.productName}
                      data-item-image={product.mainImage.fluid.src}
                      data-item-price={product.price}
                      data-item-url={`https://slicksals.com/products/${product.productSlug}`}
                      // data-item-custom1-name={product.productName ? product.productName : null}
                      // data-item-custom1-options={product.options ? product.options : null}
                      // data-item-custom2-name="Comments"
                      // data-item-custom2-type="textarea"
                    > 
                    </button>
                </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage
