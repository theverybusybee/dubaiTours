import { getBlogDetails } from "@/utils/fetches";
import { montserrat } from "@/app/fonts";
import BlogDetails from "@/components/pages/blog-details/blog-details";

export default async function Page(props: any) {
  const data = await getBlogDetails(props.params.id);

  console.log(data);

  return (
    <div className={`${montserrat.variable}`}>
      <BlogDetails data={data} />
    </div>
  );
}
