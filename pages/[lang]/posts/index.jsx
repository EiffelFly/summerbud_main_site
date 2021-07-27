import Header from "../../../components/Header";
import SectionContainer from "../../../components/SectionContainer";
import { getSortedPostsData } from "../../../lib/files";
import Footer from "../../../components/Footer";
import PostPreviewList from "../../../components/PostPreviewList";

const Posts = ({ allPostsData, locale }) => {
  const postsData = allPostsData.filter((post) => post.lang === locale);
  return (
    <div className="bg-sd-brwhite dark:bg-sd-brblack w-screen min-h-screen">
      <SectionContainer gap="gap-y-16">
        <Header />
        <PostPreviewList posts={postsData} locale={locale} />
        <Footer />
      </SectionContainer>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      locale: params.lang
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { lang: "en" }},
      { params: { lang: "zh-tw" }},
    ],
    fallback: false,
  };
};

export default Posts;