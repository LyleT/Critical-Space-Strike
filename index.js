const playerImg = document.querySelector(".player img");
let tardis = playerImg.getBoundingClientRect();

const player = document.querySelector(".player");
let tardisContainer = player.getBoundingClientRect();

const pos = { x: 0, y: 0 };

document.addEventListener("keydown", (ev) => {
  const dir = (ev.key.match(/(?<=^Arrow)\w+/) || [])[0];
  if (!dir) return;

  ev.preventDefault();

  ({
    Left: () => {
      let tardisContainer = player.getBoundingClientRect();
      let tardis = playerImg.getBoundingClientRect();
      let diff = tardis.left - tardisContainer.left;
      if (diff > 5) {
        pos.x -= 5;
        playerImg.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        console.log(tardisContainer.left, pos.x, tardis.left);
      }
    },
    Right: () => {
      let tardisContainer = player.getBoundingClientRect();
      let tardis = playerImg.getBoundingClientRect();
      let diff = tardisContainer.right - tardis.right;
      if (diff > 5) {
        pos.x += 5;
        playerImg.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        console.log(tardisContainer.right, pos.x, tardis.right);
      }
    },
    Up: () => {
      let tardisContainer = player.getBoundingClientRect();
      let tardis = playerImg.getBoundingClientRect();
      let diff = tardis.top - tardisContainer.top;
      if (diff > 5) {
        pos.y -= 5;
        playerImg.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
    },
    Down: () => {
      let tardisContainer = player.getBoundingClientRect();
      let tardis = playerImg.getBoundingClientRect();
      let diff = tardis.bottom - tardisContainer.bottom;
      if (diff < 5) {
        pos.y += 5;
        playerImg.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        console.log(tardisContainer.bottom, pos.x, tardis.bottom);
      }
    },
  }[dir]());

  playerImg.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
});

const leftMove = () => {
  let tardisContainer = player.getBoundingClientRect();
  let tardis = playerImg.getBoundingClientRect();
  let diff = tardis.left - tardisContainer.left;
  if (diff > 5) {
    pos.x -= 5;
    playerImg.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    console.log(tardisContainer.left, pos.x, tardis.left);
  }
};

const rightMove = () => {
  let tardisContainer = player.getBoundingClientRect();
  let tardis = playerImg.getBoundingClientRect();
  let diff = tardisContainer.right - tardis.right;
  if (diff > 5) {
    pos.x += 5;
    playerImg.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    console.log(tardisContainer.right, pos.x, tardis.right);
  }
};

const upMove = () => {
  let tardisContainer = player.getBoundingClientRect();
  let tardis = playerImg.getBoundingClientRect();
  let diff = tardis.top - tardisContainer.top;
  if (diff > 5) {
    pos.y -= 5;
    playerImg.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
  }
};

const downMove = () => {
  let tardisContainer = player.getBoundingClientRect();
  let tardis = playerImg.getBoundingClientRect();
  let diff = tardis.bottom - tardisContainer.bottom;
  if (diff < 5) {
    pos.y += 5;
    playerImg.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
  }
};
