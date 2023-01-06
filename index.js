$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});


// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var modalImg = document.getElementById("img01");
// // var captionText = document.getElementById("caption");
// function modalImage(src) {
//   modal.style.display = "block";
//   modalImg.src = src;
//   // captionText.innerHTML = captionText.innerHTML;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// }