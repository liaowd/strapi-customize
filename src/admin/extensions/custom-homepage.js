console.log('okok it\'s working')

whenMutation(() => {
  // remove some dom at admin welcome page that does not needed.
  if(location.pathname==='/admin'){
    let eles = document.querySelectorAll('a[href="https://strapi.io/blog"], .sc-blHHSb.fTSiDe.sc-ieEEOL.llYbcI')
    eles.forEach(el=>el.remove())
  }
})

function whenMutation(cb) {
  const targetNode = document.getElementById("strapi");
  if (!targetNode) return
  const config = { attributes: false, childList: true, subtree: true };
  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        cb()
        console.log("A child node has been added or removed.");
      } else if (mutation.type === "attributes") {
        console.log(`The ${mutation.attributeName} attribute was modified.`);
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  
  // observer.disconnect();
}