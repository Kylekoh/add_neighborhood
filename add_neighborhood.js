const puppeteer = require("puppeteer");

const add_ids = ["mcm9899","h6486","jh6330","jane95","dksdnr23","mirror2003","whaj27","gta54321","real000","hjh244","newmoon6756","kj1004man","alloong0","choi4814","babyyaho2","hifi3","fast1916","rim917","zard5415","kimgy22","xuanding1","woshianan","teichoi2848","supiaheera","nana220207","exitaod","eneeyap","tyh2005","partdoa","apfjd57","vvvv2015","rpfyddl","hwyseok","haneullove92","darkness4ev","bkj67486","thfk3652","yoojh471","polishes","hose211","god9458x","yulla5","deer3321","islovesm","yoonjo0620","withme55","hiplata","nov11ckh","6kims","negong5","camdentown","withme0010","doo4581","jenny97211","in061104","eomgiya","pahpet","yun1106221","woohyucke","kohaho","investment29","hp1214","magice77","erun4454","charm","skt9341","paiocs","cupiddesu","book-janggu","oz2020","kooby0511","rjh1971","sansob","dorlek052","ruinban","yeeun0310","sscmjy"];

const cookies = [
  {
    name: "NID_AUT",
    value: "Hzh3cpd+4wzaCjBE1rujClXT7MIyBA3AGClh3N9HdtxIuqV9KAm/0F80kxu/pzAd",
    url: "https://m.blog.naver.com/",
  },
  {
    name: "NID_SES",
    value:
      "AAABlePQu0uhCLqBb8s0wVOjTsrA+27Dx4Op/Nh9SR9sGDA7pTnq8PafqzK78+7zuT+G8/20Hrf9FSA/BGj+TUiDGMLqsRRPr9o3WZhF4l/Lky7A+Qd2FIzmig0rFXwjcGUNPcE3oXUi7/2pnbpQ8wCMyuVtgQSz4uulhX+iX+8IUfVZLMAYUb27oshbrxfKQHHu0Mt8LKZwvWNS85YQ/MGpoAVDfd2n4LSvobNclumSzAkKwPT6t87kS+KYzNE4zzoIUIpkPXCTBGRGpWLNV6Meo51E/iU6TTyDe75Z3+6Lm7d1p96+Pm1Coe043hW2RSX8PeiiNgW+dPtXC32iKVTRaoFN9Eap+GEKagS3LtoH159SsyVVq/Nzq9P6XIvUaCLCbaFK+PKP41HzwKX5pC+0cqMOmhNc49kH16RrrJUnwKvHflGn+wPuxCy8I7gR2MDroUu0ghweqbulmb133xbMbfp9u4z6tsnMwdimlckWXSx1ygZ4TteAHvEud900yOyA+tDwj0Aj0Nknf+r76WtYvtQb0V2uZ/pWeTpcZ3vetdoi",
    url: "https://m.blog.naver.com/",
  },
];

(async function () {
  for (const id of add_ids) {
    console.log(id)
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    // cookie값 설정으로 로그인 상태 설정
    await page.setCookie(...cookies);
    // 지정 카페로 이동
    try {
        const url = `https://m.blog.naver.com/BuddyAddForm.naver?blogId=${id}&returnUrl=https%253A%252F%252Fm.blog.naver.com%252nick_idu0527%253FproxyReferer%253D`
        await page.goto(
          url,
          { waitUntil: "load", timeout: 0 }
        );
    } catch(err) {
        console.log(err)
        continue
    }
    // 쉬어가기
    await page.evaluate(async() => {
        await new Promise(function(resolve) { 
               setTimeout(resolve, 1000)
        });
    });
    //서로이웃 버튼 클릭
    try{
        await page.$eval("#bothBuddyRadio", (elem) => elem.click());
    } catch(err) {
        console.log('문제된 id : ', id)
        console.log(err)
        continue
    }

    // 쉬어가기
    await page.evaluate(async() => {
        await new Promise(function(resolve) { 
               setTimeout(resolve, 1000)
        });
    });

    //이웃 추가목록에서 option의 수를 가져오고
    //이 중 가장 마지막에 있는 option를 선택하도록

    try{
        const optionElement = await page.$eval("#buddyGroupSelect", (elem) => elem.children);
        const optionNum = Object.keys(optionElement).length;
        await page.select("#buddyGroupSelect", String(optionNum))
    } catch(err) {
        continue
    }
    

    // 쉬어가기
    await page.evaluate(async() => {
        await new Promise(function(resolve) { 
               setTimeout(resolve, 1000)
        });
    });

    // 텍스트 에어리어에 내용 입력
    await page.$eval('.textarea_t1', el => el.value = `안녕하세요?

제 블로그에서는 구매대행과 관련된
지식과 데이터 분석 내용들을 공유하고 있습니다
    
경제적 자유를 꿈꾸는 분들과
같이 성장해나가고 싶네요
    
자주뵀으면 좋겠습니다^^`);

    await page.evaluate(async() => {
        await new Promise(function(resolve) { 
               setTimeout(resolve, 1000)
        });
    });

    // 확인 버튼 누르기. 서로 이웃 추가 신청 완료
    await page.$eval(".btn_ok", (elem) => elem.click());

    await page.evaluate(async() => {
        await new Promise(function(resolve) { 
               setTimeout(resolve, 1000)
        });
    });

    await browser.close();
  }
})();
