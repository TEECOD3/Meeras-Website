export const getposts = async () => {
  try {
    const response = await fetch(
      "https://api.meerastravels.com/api/posts?timestamp=${Date.now()}"
    );
    if (!response.ok) {
      throw new Error("Error fetching posts");
    }
    const posts = await response.json();

    return posts;
  } catch (error) {
    console.error(error);
    // Handle the error gracefully, display an error message, or perform any other necessary actions.
  }
};

export const getimages = async () => {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?category=${computer}&limit=${limit}"
    );
    if (!response.ok) {
      throw new Error("Error fetching posts");
    }
    const images = await response.json();

    return images;
  } catch (error) {
    console.error(error);
    // Handle the error gracefully, display an error message, or perform any other necessary actions.
  }
};

//api.meerastravels.com/api/post/fugiat-est-consequatur-non-libero

export const getpost = async (id: string) => {
  try {
    const response = await fetch(
      "https://api.meerastravels.com/api/post/" + id
    );
    if (!response.ok) {
      throw new Error("Error fetching posts");
    }
    const post = await response.json();

    return post;
  } catch (error) {
    console.error(error);
    // Handle the error gracefully, display an error message, or perform any other necessary actions.
  }
};
