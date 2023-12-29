function main() {
  let myDropzone = new Dropzone("#dropzone", {
    url: "/falsa",
    clickable: true,
    autoProcessQueue: false,
  });
  let imgData;
  myDropzone.on("thumbnail", function (file) {
    // usando este evento pueden acceder al dataURL directamente
    imgData = file.dataURL;
  });
  let formEl = document.querySelector(".form");
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    let nameValue = event.target.name.value;
    let bioValue = event.target.bio.value;
    let data = {
      nameValue,
      bioValue,
      imgData,
    };
  });
}

main();
