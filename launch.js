class AdBlocker{
  debug;

  constructor(debug = false) {
    this.debug = debug;

    setInterval(() => {
      this.removeSideAds();
      this.removeVideoAd();
    }, 50);
  }

  removeSideAds() {
    const sideAds = [
      document.querySelector('ytd-action-companion-ad-renderer'),
      document.querySelector('div#root.style-scope.ytd-display-ad-renderer.yt-simple-endpoint'),
      document.querySelector('div#sparkles-container.style-scope.ytd-promoted-sparkles-web-renderer'),
      document.querySelector('div#main-container.style-scope.ytd-promoted-video-renderer'),
      document.querySelector('ytd-in-feed-ad-layout-renderer'),
      document.querySelector('.ytd-video-masthead-ad-v3-renderer'),
    ];

    sideAds.forEach(ad => {
      if (ad) {
        if (this.debug === true) {
          console.log('side ad removed!');
        }

        ad.remove();
      }
    });
  }

  removeVideoAd() {
    const skipAdButton = document.querySelector('.videoAdUiSkipButton,.ytp-ad-skip-button');
    const videoAd = [...document.querySelectorAll('.ad-showing')][0]

    if (videoAd)
    {
      const video = document.querySelector('video');
      video.playbackRate = 10;
      video.volume = 0;
      video.currentTime = video.duration;
      skipAdButton?.click();

      console.log('Ad detected, skipping')
    }
  }
}

const adBlocker = new AdBlocker(true);
