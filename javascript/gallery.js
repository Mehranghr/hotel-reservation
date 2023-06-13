const images = document.querySelectorAll("img:not(#large-img)");
        images.forEach(function (value) {
        value.addEventListener("click", function (e) {
          const newSrc = this.src;
          clearClass(images);
          this.className = "active";
          const large = document.getElementById("large-img");
          large.src = newSrc;
        });
      });
      function clearClass(items) {
        items.forEach(function (value, index) {
          value.classList.remove("active");
        });
      }