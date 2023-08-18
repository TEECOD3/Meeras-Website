import { StaticImageData } from "next/image";

type posts = {
  data: [
    {
      id: number;
      title: string;
      slug: string;
      like: number;
      read: number;
      comment: number;
      publihed_at: string;
      author: string;
    }
  ];
};

type BlogDash = {
  blogName: string;
  author: string;
  hashtags: string[];
  date: string;
  numberOfReads: number;
  numberOfLikes: number;
  numberOfMessages: number;
};

type HideNavBarProp = boolean;

type staffdata = {
  id: number;
  image: string;
  Name: string;
  role: string;
};

type Post = {
  data: {
    id: number;
    title: string;
    slug: string;
    content: string;
    publihed_at: string;
    author: null | string;
    comments: [
      {
        id: number;
        name: string;
        email: string;
        message: string;
        date_commented: string;
        is_approved: number;
      }
    ];
  };
};

type images = [
  {
    id: number;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
  }
];
