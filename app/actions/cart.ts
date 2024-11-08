// app/data-access/cart.ts
export async function addToCart(productId: number) {
  const product = PRODUCTS.find((product) => product.id === productId);
  if (product) {
    const cart = await getCart();
    cart.items.push(product);
    await db.set("cart", cart);
  }

  return Promise.resolve();
}
