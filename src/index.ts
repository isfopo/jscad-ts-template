// An import statement allows your code to use jscad methods:
import { Geom3 } from "@jscad/modeling/src/geometries/types";
import { cube } from "@jscad/modeling/src/primitives";

// A function declaration that returns geometry
const main = (): Geom3 => {
  return cube();
};

// A declaration of what elements in the module (this file) are externally available.
module.exports = { main };
