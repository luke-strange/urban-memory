import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import metas from "lume/plugins/metas.ts";
import base_path from "lume/plugins/base_path.ts";

const site = lume(
    {
    src: "./src",
    location: new URL("https://luke-strange.github.io/urban-memory/"),
    server: {
        open: false,
    },
    components: {
        cssFile: "/assets/css/components.css",
    },
});

site.use(metas());
site.use(postcss());
site.use(base_path());

  

export default site;
