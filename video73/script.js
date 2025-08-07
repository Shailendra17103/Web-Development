function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewsStr;
    if (views >= 1000000) {
        viewsStr = (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
        viewsStr = (views / 1000).toFixed(1) + "K";
    } else {
        viewsStr = views;
    }

    let html = `<div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cName} . ${viewsStr} views . ${monthsOld} months ago</p>
        </div>
    </div>`;

    document.querySelector(".container").innerHTML += html;
}
createCard(
  "Your First HTML Website | Sigma Web Development Course - Tutorial #2",
  "CodeWithHarry",
  1900000,
  12,
  "28:30",
  "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCA3_MiIeOkWOlW_VvWSqOu4QXog"
);
