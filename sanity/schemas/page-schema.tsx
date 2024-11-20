const page = {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "title",
        MaxLength: 96,
      },
    },
    {
      name: "content",
      title: " Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      type: "image",
      options: {
        accept: ["image/jpeg", "image/png"],
      },
    },
  ],
};

export default page;
