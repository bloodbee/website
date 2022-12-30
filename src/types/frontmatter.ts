interface Frontmatter {
  date: string;
  title: string;
  slug?: string;
  category: string;
  template: string;
  description?: string;
  tags?: Array<string>;
  socialImage?: {
    publicURL: string;
  };
  dateCreation?: string;
  website?: string;
  customer?: string;
}

export default Frontmatter;
