function viewCode(nDemo){
const codeCont = document.getElementById("code");
const req = new Request(`js/module/extDateClassDemo${nDemo}.js`);
  fetch(req)
    .then((response) => response.text())
    .then((code) => {
      code = code.replace("<b>","");
      code = code.replace("</b>","");
      codeCont.innerHTML = code;
    });
};

export {viewCode}