import CustomLink from "../CustomLink";
import useTranslation from "../../hooks/useTranslation";

const LessonLearnedButton = () => {

  const { t, locale } = useTranslation();

  return (
    <CustomLink href={`/lesson-learned`}>
      <div className="py-1 font-sans cursor-pointer font-semibold text-xl text-sd-black dark:text-sd-white link-underline align-baseline">
        {t("components.lessonLearnedButton")}
      </div>
    </CustomLink>
  );
};

export default LessonLearnedButton;
