const apiKey = "e1cLMTAZleULtxQsWydKonu60zcCvv5uGvEXse19qYg1eP6TD0ncdmhP";
const perPage = 15;
const currPage = 1;

const generateHTML = (images) => {
 images.map(img => 
        `<li class="card">
        <img src="${img}" alt="img">
        <div class="details">
            <div class="photographer">
                <i class="uil uil-camera"></i>
                <span>Ana Marta Jorge</span>
            </div>
            <button><i class="uil uil-import"></i></button>
        </div>
    </li>` 
    ).join("");
}

const getImages = (apiURL) => {
    //Fetching images by API call with authorization header
    fetch(apiURL, {
        headers: {Authorization: apiKey}
    }).then(res => res.json()).then(data => {
        generateHTML(data.photos);
        // console.log(data.photos);
    });
};

getImages(`https://api.pexels.com/v1/curated?page=${currPage}&per_page=${perPage}`);

