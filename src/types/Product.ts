export default interface ProductType {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    Price: number;
    Excerpt: string;
    Slug: string;
    Image: {
      data: [
        {
          attributes: {
            url: string;
          };
        }
      ];
    };
  };
}
