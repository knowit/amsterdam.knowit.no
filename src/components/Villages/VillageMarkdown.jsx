import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Content from '../Content';
import { oldColors as colors } from '../../util/colors';
import spacing from '../../util/spacing';
import markdownStyle from './markdownStyle';
import ContentSection from '../ContentSection';
import DefaultLayout from '../../layouts';

const StyledMarkdownContainer = styled.div`
  background-color: white;
  border: 1px solid ${colors.greyLight};
  padding: ${spacing.normal};
  margin-top: ${spacing.normal};
`;

const VillageMarkdown = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { html } = markdownRemark;
  return (
    <DefaultLayout>
      <Content backgroundColor={colors.greyLightest}>
        <ContentSection>
          <StyledMarkdownContainer
            css={markdownStyle}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </ContentSection>
      </Content>
    </DefaultLayout>
  );
};

VillageMarkdown.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
};

export default VillageMarkdown;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
