export const getpost = async (Postid: string) => {
  const response = await fetch(
    "https://api.meerastravels.com/api/post/" + Postid,
    { next: { revalidate: 60 } }
  );
  if (!response.ok) {
    return undefined;
  }
  return response.json();
};
