export function stringToSlug(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function slugToTitle(slug) {
  if (typeof slug !== "string") {
    return slug;
  }

  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
