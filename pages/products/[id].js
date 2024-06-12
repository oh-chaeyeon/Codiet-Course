import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query; // router.query라는 객체에서 id값을 가져옴. 여기서 id는 파일명 [id]이다.

  return <div>Product {id} 페이지</div>;
}
