/**
 * Hello! NPM Trusted Publish
 * A simple greeting module
 */

function greet(name = "World") {
  return `Hello! NPM Trusted Publish - Hello, ${name}!!!`;
}

module.exports = {
  greet,
  version: "1.0.0",
};
