// app/data-access/cart.ts

export const getCachedCart = unstable_cache(
  async () => {
    return await getCart();
  },
  ["getCart"],
  { tags: ["cart"] },
);

export function getCart(): Promise<Cart> {
  return Promise.resolve(db.get("cart"));
}
