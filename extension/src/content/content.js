// 유튜브 영상 가져오기
function getVideo() {
  return document.querySelector('video');
}

// getvideo() null일때 오류처리
const video = getVideo();
if (!video) return;
video.play();


function waitForVideo(callback) {
  const interval = setInterval(() => {
    const video = document.querySelector('video');

    if (video) {
      clearInterval(interval);
      callback(video);
    }
  }, 300); // 0.3초마다 확인
}


waitForVideo((video) => {
  console.log('비디오 찾음:', video);
  video.play();
});
