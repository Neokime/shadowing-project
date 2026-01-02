// 유튜브 영상 가져오기
function getVideo() {
  return document.querySelector('video');
}

// video가 이미 있으면 감지만
const video = getVideo();
if (video) {
  console.log('비디오 이미 존재');
}

// video가 없으면 기다렸다가 감지만
function waitForVideo(callback) {
  const interval = setInterval(() => {
    const video = document.querySelector('video');
    if (video) {
      clearInterval(interval);
      callback(video);
    }
  }, 300);
}

waitForVideo((video) => {
  console.log('비디오 찾음:', video);
});
