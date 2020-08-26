import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';
import '../css/product.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";





export const query = graphql `
    query productQuery($slug: String!) {
        item: contentfulProduct(productSlug: {eq: $slug}) {
        id
        productSlug
        productName
        shortDescription
        description {
            json
        }
        mainImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
        }
        otherImages {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
        }
        price
        }
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
  `

const StyledImage = styled(Img)`
  width: 100%;
  height: 50%;
  object-fit: fill;
  object-position: center;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;



const Product = ({ data: { item } }) => {

  useEffect(() => {
    const i = setTimeout(() => {
      console.log('timer')
    }, 2000)
    return () => {
      clearTimeout(i);
    }
  }, []);

  const options = {
    // options for rich text formating
  };

  const responsive = {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1024: {
      items: 1
    },
    1440: {
      items: 1
    }
  };
  

  return (
    <Layout>
      <div className="product-card">
        <div className="product-images">
        <StyledImage fluid={item.mainImage.fluid} />
          {/* <AliceCarousel autoPlay autoPlayInterval={5000} responsive={responsive}>
          <StyledImage fluid={item.mainImage.fluid} />
          {item.otherImages.map((otherImages, i) => (
              <StyledImage className="sliderimg" key={[] + i} fluid={item.otherImages[i].fluid} alt={item.productName}/>
            ))}
          </AliceCarousel> */}
        </div>

        <div className="product-info">
          <h2>{item.productName}</h2>
            <p className="price"> {item.price} JD</p>
          <div className="buy">
            <button
              className={`snipcart-add-item`}
              data-item-id={item.id}
              data-item-name={item.productName}
              data-item-image={item.mainImage.fluid.src}
              data-item-price={item.price}
              data-item-url={`https://slicksals.com/products/${item.productSlug}`}
              // data-item-custom1-name={item.productName}
              // data-item-custom1-options={item.options}
              // data-item-custom2-name="Comments"
              // data-item-custom2-type="textarea"
            >
              Add to Cart
            </button>
          </div>
          <main>{documentToReactComponents(item.description.json, options)}</main>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
