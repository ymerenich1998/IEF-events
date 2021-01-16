window.onscroll = function() {
  let el = document.getElementById('checker');

  if (window.pageYOffset > 10) {
    el.style.paddingTop = "10px";
    el.style.boxShadow = "1px 1px 10px #333";
  } else {
    el.style.paddingTop = "40px";
    el.style.boxShadow = "none";
  }
};
