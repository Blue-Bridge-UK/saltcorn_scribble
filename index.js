const {
    input,
    div,
    text,
    script,
    domReady,
    textarea,
    style,
  } = require("@saltcorn/markup/tags");

const headers = [
    {
      script: "https://cdn.jsdelivr.net/npm/signature_pad@4.0.0/dist/signature_pad.umd.min.js",
    }
  ];

const scribble = {
    sql_name: "text",
    isEdit: true,
    fieldViews: {
        show: {},
        edit: {
          isEdit: true,
          run: (fieldName, fieldValue, attributes, class) =>
          `<div class="scribbleWrapper${class}">
            <canvas class="form-control ${class}" name="${fieldName}" id="input${fieldName} width=600 height=300>
            </canvas>
          </div>
          <script>
            var scribbleArea${fieldName} = document.getElementById('input${fieldName}');
            var scribblePad = new SignaturePad(scribbleArea${fieldName},{
              backgroundColor: 'rgb(255, 255, 21)'
            });
          </script>`,
        },
    },
    read: (value) => {
      return value;
    }

}

module.exports = {
    sc_plugin_api_version: 1,
    plugin_name: "scribble",
    fieldviews: { scribble },
    headers
  };