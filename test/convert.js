const lat =  '0254.83289S';
const lon = '04145.60974W';

console.log(convert(coords));

function convert(coords) {
  if (/^(\d{2,3})(\d{2}.\d+)(\w)$/.test(coords)) {
    const data = coords.split(/^(\d{2,3})(\d{2}.\d+)(\w)$/);
  
    const degree = Number(data[1]);
    const seconds = Number(data[2]);
    const result = degree + (seconds / 60);

    switch (data[3].toUpperCase()) {
      case 'N': return result;
      case 'S': return 0 - result;
      case 'E': return result;
      case 'W': return 0 - result;
      default: throw new Error("Invalid coordinate string");
    }
  } else {
    throw new Error("Invalid coordinate string");
  }  
}