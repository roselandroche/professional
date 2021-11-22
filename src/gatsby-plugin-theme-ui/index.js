export default {
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#663399",
    secondary: "#ff6347",
  },
  fonts: {
    body: "Raleway, system-ui, sans-serif",
    heading: "limelight, Raleway, system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    body: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
  },
  styles: {
    h1: {
      variant: "text.heading",
      my: 4,
      fontSize: 5,

      "@media(min-width: 768px)": {
        fontSize: 7,
      },

      "@media(min-width: 1440px)": {
        fontSize: 8,
      },
    },
    h2: {
      variant: "text.heading",
      my: 3,
      fontSize: 5,

      "@media(min-width: 768px)": {
        fontSize: 6,
      },

      "@media(min-width: 1440px)": {
        fontSize: 7,
      },
    },
    h3: {
      variant: "text.heading",
      my: 2,
      fontSize: 4,

      "@media(min-width: 768px)": {
        fontSize: 5,
      },

      "@media(min-width: 1440px)": {
        fontSize: 6,
      },
    },
    h4: {
      variant: "text.heading",
      my: 1,
      fontSize: 3,

      "@media(min-width: 768px)": {
        fontSize: 4,
      },

      "@media(min-width: 1440px)": {
        fontSize: 5,
      },
    },
    h5: {
      variant: "text.heading",
      my: 1,
      fontSize: 3,

      "@media(min-width: 1440px)": {
        fontSize: 4,
      },
    },
    p: {
      variant: "text.body",
      fontSize: 2,
    },
    a: {
      color: "inherit",
      textDecoration: "none",

      ":hover, :focus": {
        textDecoration: "underline",
      },
    },
  },
}
