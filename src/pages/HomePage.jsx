import { useProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const ProductList = () => {
  const { products, loading, setPage, hasMore } = useProductContext();

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center my-4 col-span-full">
          {/* <button
            onClick={handleLoadMore}
            disabled={loading}
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? "Loading..." : "Load More"}
          </button> */}
          {loading ? (
            <Loader />
          ) : (
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
