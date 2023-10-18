// main.js

// Use import.meta.resolve to resolve the URL of 'module.js'
const moduleSpecifier = "./module.js";
const moduleURL = new URL(
  import.meta.resolve(moduleSpecifier, import.meta.url)
);

// Dynamically import the 'module.js' module
import(moduleURL)
  .then((module) => {
    // Use the imported function
    const greeting = module.greet("Alice");
    console.log(greeting); // Output: Hello, Alice!
  })
  .catch((error) => {
    console.error("Error importing module:", error);
  });
