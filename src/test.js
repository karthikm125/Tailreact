const i = "2008-02-10";        
const date = new Date(i);       

const startOfYear = new Date(date.getFullYear(), 0, 1);

const dayOfYear = Math.ceil((date - startOfYear + 1) / (1000 * 60 * 60 * 24));

console.log(dayOfYear);        
