function openModal(mTitle, mContent) {
  var modalContent = document.getElementById('modalContent');
  var modalTitle = document.getElementById('modalTitle');
  modalContent.textContent = mContent;
  modalTitle.textContent = mTitle;
  
  var myModal = new bootstrap.Modal(document.getElementById('infoModal'));
  myModal.show();
}

$(document).ready(function () {
    $(".collapse").on("shown.bs.collapse", function () {
        localStorage.setItem("coll_" + this.id, true);
    });

    $(".collapse").on("hidden.bs.collapse", function () {
        localStorage.removeItem("coll_" + this.id);
    });

    $(".collapse").each(function () {
            if (localStorage.getItem("coll_" + this.id) === "true") {
                $(this).collapse("show");
            }
            else {
                $(this).collapse("hide");
            }
    });
});