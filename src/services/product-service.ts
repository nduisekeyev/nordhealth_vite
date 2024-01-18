const BASE_API_URL = "https://fakestoreapi.com";

class ProductService {
  async fetchProducts() {
    try {
      const response = await fetch(`${BASE_API_URL}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.json();
    } catch (error) {
      console.error("Error during fetching products:", error);
      throw error;
    }
  }
}

export default new ProductService();
