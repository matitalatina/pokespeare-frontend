type Theme = {
  palette: {
    foreground: string[],
    background: string[],
    grayscale: string[],
  },
  fonts: {
    primary: string,
    pre: string,
    quote: string,
    sizes: {
      big: string,
      normal: string,
    }
  },
  sizes: {
    maxWidth: string,
    spacer: number,
    borderRadius: string,
  },
  speed: {
    short: string,
  },
};

const theme: Theme = {
  palette: {
    foreground: ['#FEC109'],
    background: ['#0C1E4E'],
    grayscale: [
      '#212121',
      '#414141',
      '#616161',
      '#9e9e9e',
      '#bdbdbd',
      '#e0e0e0',
      '#eeeeee',
      '#ffffff',
    ],
  },
  fonts: {
    primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
    pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
    quote: 'Georgia, serif',
    sizes: {
      big: '2rem',
      normal: '14px',
    },
  },
  sizes: {
    maxWidth: '1100px',
    spacer: 8,
    borderRadius: '15px',
  },
  speed: {
    short: '0.3s',
  },
}


export default theme