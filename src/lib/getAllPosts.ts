export const getAllPosts = async () => {
  const response = await fetch("https://api.meerastravels.com/api/posts", {
    next: { revalidate: 60 },
  });
  if (!response.ok) {
    return undefined;
  }
  return response.json();
};

export const getimages = async () => {
  const response = await fetch(
    "https://picsum.photos/v2/list?category=${computer}&limit=${limit}"
  );
  if (!response.ok) {
    return undefined;
  }
  return await response.json();
};
