type CoverArtProps = {
  pattern: string;
  colors: [string, string];
  image?: string;
  className?: string;
};

export default function CoverArt({
  pattern,
  colors,
  image,
  className = "",
}: CoverArtProps) {
  return (
    <div
      className={`cover-art cover-art-${pattern} ${className}`.trim()}
      style={
        {
          "--c1": colors[0],
          "--c2": colors[1],
          position: "relative",
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      {image && (
        <div
          className="img-slot"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${image})`,
          }}
        />
      )}
    </div>
  );
}
