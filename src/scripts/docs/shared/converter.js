import turndown from "turndown";

const conv = turndown({ headingStyle: "atx", hr: "---", codeBlockStyle: "fenced", linkStyle: "referenced" });
conv.addRule("title", {
  filter: ["title"],
  replacement: function(content) {
    return `\n---\ntitle: ${content}\n---`;
  }
});

export default conv;
