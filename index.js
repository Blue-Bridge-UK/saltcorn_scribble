

const headers = [
    {
      script:
        "https://cdn.jsdelivr.net/npm/signature_pad@4.0.0/dist/signature_pad.umd.min.js"
    }
  ];

module.exports = {
    sc_plugin_api_version: 1,
    fieldviews: { scribble },
    plugin_name: "scribble",
    headers,
  };