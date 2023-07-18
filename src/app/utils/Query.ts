export const getposts = async () => {
  try {
    const response = await fetch("https://api.meerastravels.com/api/posts");
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
