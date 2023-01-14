const app = require("../app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log("서버가동");
});

// !!주의!! 서버를 실행시킬 땐 listen이 있는 폴더를 실행시켜야한다!!!!