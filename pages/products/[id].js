import SizeReviewList from "@/components/SizeReviewList";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const [product, setProduct] = useState();
  const [sizeReviews, setSizeReviews] = useState([]);
  const router = useRouter();
  const { id } = router.query; // router.query라는 객체에서 id값을 가져옴. 여기서 id는 파일명 [id]이다.

  async function getProduct(targetID) {
    const res = await axios.get(`/products/${targetID}`);
    const nextProduct = res.data;
    setProduct(nextProduct);
  }

  async function getSizeReviews(targetID) {
    const res = await axios.get(`/size_reviews/?product_id=${targetID}`);
    const nextSizeReivews = res.data.results ?? [];
    setSizeReviews(nextSizeReivews);
  }

  useEffect(() => {
    if (!id) return;

    getProduct(id);
    getSizeReviews(id);
  }, [id]);

  if (!product) return null;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imgUrl} alt={product.name} />
      <SizeReviewList sizeReviews={sizeReviews} />
    </div>
  );
}
