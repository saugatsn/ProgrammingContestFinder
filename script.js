let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response
  .then((jsonValue) => {
    return jsonValue.json();
  })
  .then((contests) => {
    console.log(contests);
    let ihtml = "";
    for (let key in contests) {
      console.log(contests[key]);
      // Generate a unique image URL using contest information
      let imageUrl = `https://source.unsplash.com/random/800x600/?${contests[key].name}`;

      ihtml += `
        <div class="card" style="width: 22rem">
          <img src="${imageUrl}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${contests[key].name}</h5>
            <p class="card-text">
              Start Time: <br> ${contests[key].start_time}
            </p>
            <p class="card-text">
              End Time: <br> ${contests[key].end_time}
            </p>
            <a href=${contests[key].url} class="btn btn-primary">Learn more</a>
          </div>
        </div>
      `;
      console.log(ihtml);
      cardContainer.innerHTML = ihtml;
    }
  });
