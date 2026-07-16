import { useEffect } from "react";

export function usePageMetadata(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const previousDescription = descriptionTag?.content;
    const previousOgTitle = ogTitle?.content;
    const previousOgDescription = ogDescription?.content;

    document.title = title;
    if (descriptionTag) descriptionTag.content = description;
    if (ogTitle) ogTitle.content = title;
    if (ogDescription) ogDescription.content = description;

    return () => {
      document.title = previousTitle;
      if (descriptionTag && previousDescription) descriptionTag.content = previousDescription;
      if (ogTitle && previousOgTitle) ogTitle.content = previousOgTitle;
      if (ogDescription && previousOgDescription) ogDescription.content = previousOgDescription;
    };
  }, [description, title]);
}
