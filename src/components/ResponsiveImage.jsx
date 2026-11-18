export default function ResponsiveImage({ image, priority = false, eager = false }) {
  const priorityProps = priority ? { fetchpriority: "high" } : {};

  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.sizes}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={priority || eager ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      {...priorityProps}
    />
  );
}
