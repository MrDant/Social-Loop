export function e404() {
  throw createError({ message: "Not found", statusCode: 404 });
}
