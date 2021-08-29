import SectionContainer from "../../../../components/SectionContainer";
import { getMDXComponent } from "mdx-bundler/client";

import PageSeo from "../../../../components/PageSeo";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import {
  getAllProjectPath,
  getProjectContent,
  getProjectDevlogMeta,
} from "../../../../lib/files";
import CustomLink from "../../../../components/CustomLink";
import { useMemo } from "react";
import GeneralList from "../../../../components/GeneralList";
import GeneralLIstIntro from "../../../../components/GeneralLIstIntro";
import useTranslation from "../../../../hooks/useTranslation";

const MDXPage = ({ code, metadata, devlogs }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  const { t, locale } = useTranslation();
  return (
    <div className="bg-sd-brwhite dark:bg-sd-brblack w-screen min-h-screen">
      <SectionContainer gap="gap-y-16">
        <PageSeo metadata={metadata} locale={locale} />
        <Header hasTranslation={true} />
        <article className="md:mx-auto prose prose-lg py-12 dark:prose-dark">
          <Component components={{ CustomLink: CustomLink }} />
          <GeneralLIstIntro>
            {t("components.devlogs")}
          </GeneralLIstIntro>
          <GeneralList elements={devlogs} />
        </article>
        <Footer />
      </SectionContainer>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { code, metadata } = await getProjectContent({
    isIndex: true,
    project: params.project,
    lang: params.lang,
  });
  const devlogs = await getProjectDevlogMeta({ projectName: params.project })
  return {
    props: {
      code,
      metadata,
      devlogs
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllProjectPath({isIndex: true});
  return {
    paths: paths,
    fallback: false,
  };
};

export default MDXPage;
