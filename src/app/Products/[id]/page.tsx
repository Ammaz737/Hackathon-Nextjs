// app/products/page.tsx
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  { id: 1, name: "Modern Modular Sofa", price: 25000, image: "/image/1.png", description: "A modern modular sofa perfect for your living room." },
  { id: 2, name: "Dining Table with Chairs", price: 25000, image: "/image/2.png", description: "Elegant dining table with a set of comfortable chairs." },
  { id: 3, name: "Outdoor Bar Table", price: 20000, image: "/image/3.png", description: "Outdoor bar table for stylish patio setups." },
  // Add more products here...
];

const ProductsPage: React.FC = () => {
  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold text-center mb-10">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 relative">
            {/* Product Image */}
            <div className="relative h-[200px] flex items-center justify-center bg-gray-100">
              <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
            </div>
            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-yellow-600 font-semibold mt-2">Rs. {product.price.toLocaleString()}</p>
              <p className="text-gray-700 mt-4">{product.description}</p>
              <Link href={`/products/${product.id}`} className="text-gray-700 hover:text-black">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
