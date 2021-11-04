export default {
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#663399",
    secondary: "#ff6347",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
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
  },
  styles: {
    h1: {
      variant: "text.heading",
      mt: 4,
      mb: 4,
      fontSize: 8,
    },
    h2: {
      variant: "text.heading",
      mt: 3,
      mb: 3,
      fontSize: 7,
    },
    a: {
      color: "primary",

      ":hover, :focus": {
        color: "secondary",
      },
    },
  },
}
