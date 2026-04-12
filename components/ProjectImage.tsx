import Image, { type ImageProps } from "next/image";

type ProjectImageProps = Omit<ImageProps, "src" | "unoptimized"> & {
  src: string;
};

/**
 * Portfolio project media: local SVGs skip the image optimizer (avoids broken previews),
 * and paths with spaces are encoded for the browser.
 */
export default function ProjectImage({ src, ...rest }: ProjectImageProps) {
  const href =
    src.includes(" ") && !/%[0-9A-Fa-f]{2}/.test(src) ? encodeURI(src) : src;
  const unoptimized = /\.svg(\?|#|$)/i.test(src);

  return <Image src={href} unoptimized={unoptimized} {...rest} />;
}
