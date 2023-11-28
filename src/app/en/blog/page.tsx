import { getBlog } from "@/utils/fetches";
import { montserrat } from "../../fonts";
import BlogPage from "@/components/pages/blog-page/blog-page";

export default async function Page({ searchParams }: any) {
  const data = await getBlog(
    searchParams?.variant ? searchParams?.variant.toLowerCase() : "all",
    searchParams?.page ? searchParams?.page : ""
  );

  return (
    <div className={`${montserrat.variable}`}>
      <BlogPage data={data} />
    </div>
  );
}
