import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Flex } from 'rebass'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Heart from '../heart.svg'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  
  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  @media (max-width: ${props => props.theme.breakpoints[3]}) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease 0s;
`

const Bottom = styled(Flex)`
  color: white;
  @media (max-width: ${props => props.theme.breakpoints[3]}) {
    font-size: ${props => props.theme.fontSizes[0]};
  }
  transform: translateY(45px);
  opacity: 0;
  transition: all 0.4s ease 0s;
`

const Item = styled.a`
  position: relative;
  overflow: hidden;
  > div img {
    transition: all 0.3s ease 0s !important;
  }
  &:hover {
    > div img {
      transform: scale(1.05);
    }
    
    ${Overlay} {
      opacity: 1;
    }
    
    ${Bottom} {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const Content = styled(Flex)`
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: ${props => props.theme.space[5]};
`

const Title = styled.div`
  color: white;
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes[2]};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: ${props => props.theme.breakpoints[3]}) {
    font-size: ${props => props.theme.fontSizes[1]};
  }
`

const HeartIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`

const Instagram = ({ data: { instagram } }) => (
  <Layout>
    <Grid>
      {instagram.edges.map(({node: post}) => {
        // Grab everything before the first hashtag (because I write my captions like that)
        const title = post.caption.split('#')[0]
        const date = new Date(post.timestamp * 1000).toLocaleDateString('de-DE')

        return (
          <Item href={`https://www.instagram.com/p/${post.id}/`} key={post.id}>
            <Overlay />
            <Img fluid={post.localFile.childImageSharp.fluid} />
            <Content flexDirection="column" flexWrap="nowrap" justifyContent="space-between">
              <Title>{title}</Title>
              <Bottom flexDirection="row" flexWrap="nowrap" justifyContent="space-between"><span><HeartIcon src={Heart} /> {post.likes}</span><span>{date}</span></Bottom>
            </Content>
          </Item>
        )
      })}
    </Grid>
  </Layout>
)

export default Instagram

export const query =  graphql`
  query Instagram {
    instagram: allInstaNode(sort: {fields: timestamp, order: DESC}, limit: 30) {
      edges {
        node {
          caption
          id
          timestamp
          likes
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`