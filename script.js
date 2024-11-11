

let video = document.getElementById("masterVideo");
//video.muted = true;

const syncData =  () => {

  console.log('syncCalled');
  const successCallback = function (successObject) {
    console.log("Basetime is : " + successObject.basetime);
  };

  const failureCallback = function (failureObject) {
    console.log("failure callback");
    console.error(
      "[" + failureObject.errorCode + "] " + failureObject.errorText
    );
  };

  // Sets the master signage device.
  var custom = new Custom();
  custom.VideoSync.setMaster(successCallback, failureCallback, {
    ip: "10.0.34.94",
    port: 8081,
    //Optional property when there are multiple video tags.
    videoElement: document.getElementById("masterVideo"),
  });

  
};


video.onloadeddata = function () {

  console.log("chamou onload");
  syncData();
  video.play();
}


