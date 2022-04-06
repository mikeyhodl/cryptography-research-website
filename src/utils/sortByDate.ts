import { Post } from '../types';

export const sortByDate = (a: Post, b: Post) => {
  if (a.frontmatter.date < b.frontmatter.date) {
    return 1;
  }
  if (a.frontmatter.date > b.frontmatter.date) {
    return -1;
  }
  // a must be equal to b
  return 0;
};