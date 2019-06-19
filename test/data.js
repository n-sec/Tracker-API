const data = "864893031530374;";

const res = data.split(';');

res.forEach(element => {
  switch (true) {
    case checkAuthString(element):
      console.log("checkAuthString");
      break;
    case checkHeartbeatString(element):
      console.log("checkHeartbeatString");
      break;
    case checkTrackerString(element): 
      console.log("checkTrackerString");
      break;
  }
});

function checkAuthString(data) {
  return /^##,imei:\d{15},A$/.test(data);
}

function checkHeartbeatString(data) {
  return /^\d{15}$/.test(data);
}

function checkTrackerString(data) {
  return /^imei:\d{15}.+$/.test(data);
}

/*
##,imei:864893031530374,A;
864893031530374;
imei:864893031530374,tracker,190602052746,,F,212746.00,A,0255.02212,S,04145.24224,W,14.852,4.53;
imei:864893031530374,tracker,190602215947,,L,,,4f3e,,6862,,,;

imei:864893031530374,tracker,190605042115,,F,202115.00,A,0254.83289,S,04145.60974,W,0.000,0;
*/