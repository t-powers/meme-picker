import { catsData } from "/data.js";

const emotionRadios = document.getElementById("emotion-radios");

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      emotionsArray.push(emotion);
    }
  }
  return emotionsArray;
}

function renderEmotionsRadios(cats) {
  let holdArray = ``;
  const emotions = getEmotionsArray(cats);
  for (let emotion of emotions) {
    holdArray += `<p>${emotion}</p>`;
  }
  emotionRadios.innerHTML = holdArray;
}

renderEmotionsRadios(catsData);
