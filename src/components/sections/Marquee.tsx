type MarqueeProps = {
  items: readonly string[];
};

export default function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
            <span className="dot" aria-hidden="true">
              ●
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
