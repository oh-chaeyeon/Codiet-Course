import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export default function Search() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  async function getProducts(query) {
    const res = await axios.get(`/products/?q=${query}`);
    const nextproducts = res.data.results;
    setProducts(nextproducts);
  }

  useEffect(() => {
    getProducts(q);
  }, [q]);

  return (
    <div>
      <h1>Search 페이지</h1>
      <SearchForm initialValue={q} />
      <h2>{q} 검색 결과</h2>
      <ProductList products={products} />
    </div>
  );
}
