"use client";

import couplePhoto from "@/app/assets/reception-blurred.jpeg";

const InvitationLetter = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
      style={
        {
          "--section-accent": "hsl(var(--palette-amber))",
        } as React.CSSProperties
      }
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${couplePhoto.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Subtle dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.45) 50%, hsl(var(--background) / 0.65) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md">
        <div
          className="morph rounded-lg text-center px-8 py-10 md:px-12 md:py-14"
          style={{
            boxShadow:
              "0 24px 80px hsl(var(--foreground) / 0.22), 0 4px 16px hsl(var(--foreground) / 0.1)",
          }}
        >
          {/* Top ornament */}
          <div className="flex justify-center mb-6">
            <div className="decorative-line w-32">
              <span style={{ color: "hsl(var(--palette-amber))" }}>✦</span>
            </div>
          </div>

          <p
            className="font-body tracking-[0.3em] uppercase text-xs mb-3"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            You are joyfully invited
          </p>
          <p
            className="font-body text-sm mb-5"
            style={{ color: "hsl(var(--palette-amber))" }}
          >
            to the wedding of
          </p>

          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Heinrich
            <br />
            <span
              className="text-2xl sm:text-3xl"
              style={{ color: "hsl(var(--palette-amber))" }}
            >
              &amp;
            </span>
            <br />
            Tamryn
          </h1>

          <div className="flex justify-center my-6">
            <div className="decorative-line w-40">
              <span
                style={{
                  color: "hsl(var(--palette-amber))",
                  fontSize: "1.1rem",
                }}
              >
                ♥
              </span>
            </div>
          </div>

          <p
            className="font-body text-lg md:text-xl mb-1"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            12 September, 2026
          </p>
          <p
            className="font-body text-sm tracking-widest"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            DuVon Wine and Wedding Estate, Robertson
          </p>

          {/* Bottom ornament */}
          <div className="flex justify-center mt-6">
            <div className="decorative-line w-32">
              <span style={{ color: "hsl(var(--palette-amber))" }}>✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationLetter;
