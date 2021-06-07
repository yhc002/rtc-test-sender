const video=document.getElementById("local-video");
const getVideo = document.getElementById("get-video");
document.getElementById("send-video");


async function init(e) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});
      video.srcObject=stream;
      e.target.disabled = true;
    } catch (e) {
      console.log(e);
    }
}

getVideo.addEventListener('click', e => init(e));