import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-10 py-16">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Best Furniture Collection For Your Interior.
          </h1>
          <button className="mt-6 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-500">
            Shop Now
          </button>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/image/chair.png" // Replace with your actual image path
            alt="Modern Chair"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* Brand Logos */}
      <div className="container mx-auto flex justify-center items-center mt-10 space-x-4 flex-wrap">
        <Image src="/image/1.png" alt="Logo 1" width={100} height={50} />
        <Image src="/image/2.png" alt="Logo 2" width={100} height={50} />
        <Image src="/image/3.png" alt="Logo 3" width={100} height={50} />
        <Image src="/image/4.png" alt="Logo 4" width={100} height={50} />
        <Image src="/image/5.png" alt="Logo 5" width={100} height={50} />
        <Image src="/image/6.png" alt="Logo 6" width={100} height={50} />
        <Image src="/image/7.png" alt="Logo 7" width={100} height={50} />
      </div>
    </section>
  );
};

export default Hero;
export const Hero2: React.FC = () => {
    const products = [
      { id: 1, label: "New", labelColor: "bg-green-500", title: "Library Stool Chair", price: "$20", image: "/Image/Fe.png" },
      { id: 2, label: "Sale", labelColor: "bg-red-500", title: "Library Stool Chair", price: "$20", originalPrice: "$30", image: "/Image/Fet.png" },
      { id: 3, label: "", labelColor: "", title: "Library Stool Chair", price: "$20", image: "/Image/Feth.png" },
      { id: 4, label: "", labelColor: "", title: "Library Stool Chair", price: "$20", image: "/Image/Feath.png" },
    ];
  
    return (
      <div className="px-8 py-6">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center shadow-sm">
              {/* Product Image */}
              <div className="relative w-full h-48 mb-4">
                <Image src={product.image} alt={product.title} fill className="object-cover rounded-lg" />
                {product.label && (
                  <span className={`absolute top-2 left-2 text-xs text-white px-2 py-1 rounded ${product.labelColor}`}>
                    {product.label}
                  </span>
                )}
              </div>
  
              {/* Product Title */}
              <h3 className="text-lg font-medium text-gray-700 mb-2">{product.title}</h3>
  
              {/* Price and Add to Cart */}
              <div className="flex items-center justify-between w-full text-sm mb-4">
                <div>
                  <span className="text-gray-900 font-bold">{product.price}</span>
                  {product.originalPrice && <span className="line-through ml-2 text-gray-500">{product.originalPrice}</span>}
                </div>
                <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg border border-gray-300 shadow-sm transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18l-1.35 13.45A2 2 0 0117.66 18H6.34a2 2 0 01-1.99-1.55L3 3zm3 9h12m-6-6h.01" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export const Hero3: React.FC = () => {
    const categories = [
      { id: 1, title: "Wing Chair", imageUrl: "/Image/Chair 1.png", productCount: 3844 },
      { id: 2, title: "Wooden Chair", imageUrl: "/Image/Chair2.png", productCount: 157 },
      { id: 3, title: "Desk Chair", imageUrl: "/Image/Chair3.png", productCount: 114 },
    ];
  
    return (
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-6 ml-4">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-3">
          {categories.map((category) => (
            <div key={category.id} className="relative rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-4 aspect-h-3">
                <img src={category.imageUrl} alt={category.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="text-sm">{category.productCount} Products</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export const Hero4: React.FC = () => {
    return (
      <section className="py-8 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Left Section */}
          <div className="relative col-span-1 md:col-span-2">
            <img src="/Image/Fet.png" alt="Orange Chair" className="w-full h-[300px] md:h-[500px] object-cover rounded-lg" />
            <div className="absolute left-[-200px] top-1/2 -translate-y-1/2 -rotate-90 text-lg font-semibold tracking-widest text-gray-800 whitespace-nowrap">
              EXPLORE NEW AND POPULAR STYLES
            </div>
          </div>
  
          {/* Right Section */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
              <img src="/Image/Feth.png" alt="Chair 1" className="w-full h-[240px] object-cover rounded-lg" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/Image/img.png" alt="Chair 2" className="w-full h-[240px] object-cover rounded-lg" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/Image/Feath.png" alt="Chair 3" className="w-full h-[240px] object-cover rounded-lg" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/Image/Feath.png" alt="Chair 4" className="w-full h-[240px] object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  