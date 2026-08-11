/**
 * Shared dark background layers used across all pages.
 * Includes the horizon glow and dotted grid pattern.
 */
export default function Background() {
  return (
    <>
      {/* Dark Horizon Glow */}
      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #00000000 40%, #0d1a36 100%)",
        }}
      />

      {/* Dark White Dotted Grid Background */}
      <div
        className="fixed inset-0 z-5 pointer-events-none"
        style={{
          background: "#000000",
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0",
        }}
      />
    </>
  );
}