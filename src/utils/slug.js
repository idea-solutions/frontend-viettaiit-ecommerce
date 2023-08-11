import slug from "slug";
export const deslugify = (slugg) => {
  return slugg
    .split("-")
    .map((str) => str[0].toUpperCase() + str.slice(1))
    .join(" ");
};
export const slugify = (text) => {
  return slug(text, { replacement: "-", lower: true });
};
