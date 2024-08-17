const deleteBtn = document.getElementById("deleteBtn");

const random = (max) => Math.floor(Math.random() * max);

const teaseMessages = [
  "Too slow! 😜",
  "Catch me if you can! 🏃‍♂️",
  "Not this time! 😏",
  "You'll have to be quicker! 🚀",
  "Nice try! 😆",
  "Missed me! 😛",
  "Almost had it! 😂",
  "Better luck next time! 😉",
  "So close, yet so far! 🤭",
  "You can't catch me! 😄",
  "Keep trying! 😁",
  "Oops, too late! 😅",
  "I'm outta here! ✌️",
  "Gotta be faster than that! 😜",
  "Nope, not today! 😈",
  "I'm too quick for you! 😎",
  "Try again! 😆",
  "Nice try, but I'm gone! 😂",
  "Maybe next time! 😝",
  "You'll get me eventually! 🤞",
];

deleteBtn.addEventListener("click", () => {
  const bodyWidth = document.body.clientWidth;
  const bodyHeight = document.body.clientHeight;
  const btnWidth = deleteBtn.offsetWidth;
  const btnHeight = deleteBtn.offsetHeight;

  const maxWidth = bodyWidth - btnWidth;
  const maxHeight = bodyHeight - btnHeight;

  deleteBtn.style.position = "absolute";
  deleteBtn.style.left = `${random(maxWidth)}px`;
  deleteBtn.style.top = `${random(maxHeight)}px`;

  const randomMessage = teaseMessages[random(teaseMessages.length)];
  deleteBtn.innerText = randomMessage;
});
