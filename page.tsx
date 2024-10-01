import { getAllProducts } from "@/actions/products";
import Product from "@/components/Product";
import React from "react";

export default async function page() {
  const products = await getAllProducts();
  return (
    <div className="bg-blue-50 py-8 px-8 min-h-screen">
      <div>
        <div className="py-3 flex items-center justify-between max-w-4xl mx-auto"></div>
        {products && products.length > 0 ? (
          <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {products.map((item) => {
              return <Product product={item} key={item.id} />;
            })}
          </div>
        ) : (
          <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <p>No Products Found</p>
          </div>
        )}
      </div>
    </div>
  );
}
