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
    fetch("/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameValue,
        bioValue,
        imgData,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  });
}

main();
