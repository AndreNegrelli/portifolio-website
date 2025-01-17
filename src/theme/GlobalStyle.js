export default function GlobalStyle() {
  return (
    <style global jsx>{`
      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

      html,
      body {
        font-family: "Inter", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
    `}</style>
  );
}