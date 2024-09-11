fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    let detailedSummeryItems = null;
    data.map(({ category, score, icon }, index) => {
      detailedSummeryItems = detailedSummeryItems
        ? detailedSummeryItems +
          `<div class="detail-summery-item${index ? index : ""}">
              <span class="item-left">
                <img src="${icon}" alt="${category}" />
                <span class="item-${category.toLowerCase()}">${category}</span></span
              ><span class="item-right"
                >${score} <span class="outof">/ 100</span></span
              >
            </div>`
        : `<div class="detail-summery-item${index ? index : ""}">
              <span class="item-left">
                <img src="${icon}" alt="${category}" />
                <span class="item-${category.toLowerCase()}">${category}</span></span
              ><span class="item-right"
                >${score} <span class="outof">/ 100</span></span
              >
            </div>`;
    });
    document.getElementById("detail-summery-items").innerHTML =
      detailedSummeryItems;
  })
  .catch((error) => console.error("Error fetching JSON:", error));
