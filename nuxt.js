// This file provides automatic component loading when used in Nuxt
// https://github.com/nuxt/components#library-authors
import { join } from "path";

export default function() {
  this.nuxt.hook("components:dirs", dirs => {
    // Add ./components dir to the list
    dirs.push({
      path: join(__dirname, "src/components")
    });
  });
}
