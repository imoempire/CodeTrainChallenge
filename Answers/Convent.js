// – 1 USD = 0,73 GBP
// – 1 USD = 1,26 CAD
// – 1 USD = 6,46 CNY
// – 1 USD = 6,05 GH

const currency = (n, to) => {
   let USD = 1;
   let CAD = 1.26;
   let CNY = 6.46;
   let GH = 6.05;
   let GBP = 0.91;
   if (to === "CAD") {
     const result = n * (USD / CAD);
     return result.toFixed(2);
   } else if (to === "CNY") {
     const result = n * (USD / CNY);
     return result.toFixed(2);
   } else if (to === "GH") {
     const result = n * (USD / GH);
     return result.toFixed(2);
   } else if (to === "GBP") {
     const result = n * (USD / GBP);
     return result.toFixed(2);
   } else {
     return "error";
   }
 };
 console.log(currency(6.05, "GH"));
 