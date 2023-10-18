import { domainToASCII, domainToUnicode } from "url";

// Example domain name with non-ASCII characters
const domainNameUnicode = "hétérographe.example";

// Convert the Unicode domain name to ASCII
const domainNameASCII = domainToASCII(domainNameUnicode);

console.log("Unicode Domain:", domainNameUnicode);
console.log("ASCII Domain:", domainNameASCII);

// Now, let's convert it back to Unicode
const domainNameConverted = domainToUnicode(domainNameASCII);

console.log("Converted Back to Unicode:", domainNameConverted);
