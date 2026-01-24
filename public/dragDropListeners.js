const target = document.getElementById("variables");

const normalizePath = (path) => {
  const pathList = path.split(".");
  let normPath = [];
  for (let i = 0; i < pathList.length; i++) {
    if (!isNaN(parseFloat(pathList[i + 1]))) {
      normPath.push(pathList[i] + "[" + pathList[i + 1] + "]");
      i++;
    } else {
      normPath.push(pathList[i]);
    }
  }
  return normPath.join(".");
};

// Cancel dragover so that drop can fire
target.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});
target.addEventListener("drop", (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("application/json");
  console.log(data);
  const datao = JSON.parse(data);
  document
    .getElementById("rightSidebar")
    .appendChild(variableCard(datao.name, normalizePath(datao.path)));
  console.log(datao);
});

function dragstartHandler(ev) {
  // Add different types of drag data
  const name = ev.target.innerText;
  const uid = ev.target.getAttribute("uid");
  const path = ev.target.getAttribute("path");
  console.log({ name: name, uid: uid, path: path });
  ev.dataTransfer.setData(
    "application/json",
    JSON.stringify({ name: name, uid: uid, path: path }),
  );
  console.log(ev.target);
}

function addDragstartListeners() {
  let items = document.querySelectorAll(".key");
  items.forEach(function (item) {
    item.addEventListener("dragstart", dragstartHandler);
  });
}
