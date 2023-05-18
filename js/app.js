$("#save").on("click",function(){
    const memo=$("#memo").val();
    localStorage.setItem("memo",memo);
    alert("保存しました");
});
$("#clear").on("click",function(){
    localStorage.removeItem("memo");
    alert("削除しました");
    $("#memo").val("");
});
if(localStorage.getItem("memo",memo)){
    const value=localStorage.getItem("memo");
    $("#memo").val(value);
}

// let i=0;
let point=0;

function shuffleArray(array) {
    for (let i=array.length-1; i>0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const questions = [
    {
        question: "ワンピースの主人公は誰でしょうか？",
        choices: ["ルフィ", "悟空", "桜木花道","竈門炭治郎"],
        value:"0",
        kotae: 0,
    },
    {
        question: "麦わらの一味の最初の仲間は誰でしょうか？",
        choices: ["ウソップ", "ゾロ", "ナミ","チョッパー"],
        value:"1",
        kotae: 1,
    },
    {
        question: "麦わらの一味の2人目の仲間は誰でしょうか？",
        choices: ["ウソップ", "サンジ", "ナミ","チョッパー"],
        value:"2",
        kotae: 2,
    },
    {
        question: "麦わらの一味の3人目の仲間は誰でしょうか？",
        choices: ["サンジ", "ロビン","チョッパー","ウソップ"],
        value:"3",
        kotae: 3,
    },
    {
        question: "ワンピースのマンガ連載開始はいつからでしょうか？",
        choices: ["1995年", "1996年","1997年","1998年"],
        value:"2",
        kotae: 2,
    },
    {
        question: "ワンピースのアニメ放送開始はいつからでしょうか？",
        choices: ["1998年", "1999年","2000年","2001年"],
        value:"1",
        kotae: 1,
    },
    {
        question: "以下のなかで最も放送話数が多いアニメはどれでしょうか？",
        choices: ["クレしん", "名探偵コナン","はなかっぱ","ONE PIECE"],
        value:"0",
        kotae: 0,
    },
    {
        question: "ONE PIECE連載1000話記念のキャラクター世界人気投票1位は誰でしょうか？",
        choices: ["サボ", "ポートガス・D・エース","トラファルガー・ロー","ルフィ"],
        value:"3",
        kotae: 3,
    },
    {
        question: "ONE ONE PIECEの作者は？",
        choices: ["枕草子", "村上春樹","尾田栄一郎","与謝野晶子"],
        value:"2",
        kotae: 2,
    },
    {
        question: "懸賞金が最も高いのは？",
        choices: ["バギー", "ルフィ","トラファルガー・ロー","ユースタス・キッド"],
        value:"0",
        kotae: 0,
    },
    {
        question: "アニメにおいて、最も最近仲間になったメンバーは？",
        choices: ["ブルック", "フランキー","ジンベエ","ティーチ"],
        value:"2",
        kotae: 2,
    },
];

let shuffledQuestions=shuffleArray(questions);
let currentQuestion=0;

function quests(a){ 
    $("#qno").html(a+1);
    $("#question").html(questions[a].question);
    $("#choices0").text(questions[a].choices[0]);
    $("#choices1").text(questions[a].choices[1]);
    $("#choices2").text(questions[a].choices[2]);
    $("#choices3").text(questions[a].choices[3]);
}


$("#start").on("click",function(){
    $("#start").fadeOut(1500);
    $("#question").fadeIn(1500);
    quests(currentQuestion);
        $("[name=choices]").on("click",function(){
            if($(this).data("value")==questions[currentQuestion].kotae){
                alert("正解");
                point++;
                // if(currentQuestion==0||currentQuestion==0);
                if(point==1){
                    $("#join"+[point-1]).fadeIn(1000);
                };
                if(point==2){
                    $("#join"+[point-1]).fadeIn(1000);
                };
                if(point==3){
                    $("#join"+[point-1]).fadeIn(1000);
                };
                if(point==4){
                    $("#join"+[point-1]).fadeIn(1000);
                }
            }else{
                alert("間違い");
            }
        currentQuestion++;
        if(point==4){
            alert(`おめでとう！${point}個正解で、じゃんけんできるよ！`);
            $("#qnop").fadeOut(1500);
            $("#question").fadeOut(1500);
            $("#quiz").fadeOut(1500);
            $("#j_start").fadeIn(2000);
        }else if(currentQuestion<shuffledQuestions.length) {
            quests(currentQuestion);
        }else{
            alert(`${currentQuestion}問中${point}個しか正解していないですよ…。さては…ワンピースほとんど見ていないですね？`);
            $("#qnop").fadeOut(1500);
            $("#question").fadeOut(1500);
            $("#quiz").fadeOut(1500);
            $("#reset").fadeIn(2000);
        };
    });
});

// $("#start").on("click",function(){
// quests(i);
//     $("[name=choices]").on("click",function(){
//         if($(this).data("value")==questions[i].kotae){
//             alert("正解");
//             point++;
//             $("#join"+[i]).fadeIn(1000);
//         }else{
//             alert("間違い");
//         }
//     i++;
//     if(i<questions.length){
//         quests(i);
//     }else{
//         alert(`終了です！正解は${point}個です。正解率は${point}/${i}です`);
//         $("#start").fadeOut(1500);
//         $("#qnop").fadeOut(2000);
//         $("#question").fadeOut(2000);
//         $("#quiz").fadeOut(2000);
//         $("#j_start").fadeIn(2000);
//     }
// });
// });

//ベースとなる値を置く（ランダムによるジャンケンの値）
const cpu_hands0 =Math.ceil(Math.random()*3);
const cpu_hands1 =Math.ceil(Math.random()*3);
const cpu_hands2 =Math.ceil(Math.random()*3);
const cpu_hands3 =Math.ceil(Math.random()*3);
// const cpu_hands4 =Math.ceil(Math.random()*3);
// const cpu_hands5 =Math.ceil(Math.random()*3);

//ベースとなる値を置く（表示場所）
let view0="";
let view1="";
let view2="";
let view3="";
// let view4="";
// let view5="";

//ベースとなる値を置く（成功の条件たるグー数のカウント）
let gunum=0


$("#j_start").on("click",function(){
    if(cpu_hands0==1){
        view0='<img src="img/gu.png" alt="">';
        $("#cpu_hands0").html(view0);
        gunum+=1;
    }else if(cpu_hands0==2){
        view0='<img src="img/cho.png" alt="">';
        $("#cpu_hands0").html(view0);
    }else if(cpu_hands0==3){
        view0='<img src="img/par.png" alt="">';
        $("#cpu_hands0").html(view0);
    }
    if(cpu_hands1==1){
        view1='<img src="img/gu.png" alt="">';
        $("#cpu_hands1").html(view1);
        gunum+=1;
    }else if(cpu_hands1==2){
        view1='<img src="img/cho.png" alt="">';
        $("#cpu_hands1").html(view1);
    }else if(cpu_hands1==3){
        view1='<img src="img/par.png" alt="">';
        $("#cpu_hands1").html(view1);
    }
    if(cpu_hands2==1){
        view2='<img src="img/gu.png" alt="">';
        $("#cpu_hands2").html(view2);
        gunum+=1;
    }else if(cpu_hands2==2){
        view2='<img src="img/cho.png" alt="">';
        $("#cpu_hands2").html(view2);
    }else if(cpu_hands2==3){
        view2='<img src="img/par.png" alt="">';
        $("#cpu_hands2").html(view2);
    }
    if(cpu_hands3==1){
        view3='<img src="img/gu.png" alt="">';
        $("#cpu_hands3").html(view3);
        gunum+=1;
    }else if(cpu_hands3==2){
        view3='<img src="img/cho.png" alt="">';
        $("#cpu_hands3").html(view3);
    }else if(cpu_hands3==3){
        view3='<img src="img/par.png" alt="">';
        $("#cpu_hands3").html(view3);
    }
    // if(cpu_hands4==1){
    //     view4='<img src="img/gu.png" alt="">';
    //     $("#cpu_hands4").html(view4);
    //     gunum+=1;
    // }else if(cpu_hands4==2){
    //     view4='<img src="img/cho.png" alt="">';
    //     $("#cpu_hands4").html(view4);
    // }else if(cpu_hands4==3){
    //     view4='<img src="img/par.png" alt="">';
    //     $("#cpu_hands4").html(view4);
    // }
    // if(cpu_hands5==1){
    //     view5='<img src="img/gu.png" alt="">';
    //     $("#cpu_hands5").html(view5);
    //     gunum+=1;
    // }else if(cpu_hands5==2){
    //     view5='<img src="img/cho.png" alt="">';
    //     $("#cpu_hands5").html(view5);
    // }else if(cpu_hands5==3){
    //     view5='<img src="img/par.png" alt="">';
    //     $("#cpu_hands5").html(view5);
    // }
    if(cpu_hands0===cpu_hands1===cpu_hands2===cpu_hands3===1){;
        $("#game").fadeIn(800);
        $("#judge").html("成功",);
        $("#judge").css("fontSize","48px");
        $("#judge").css("color","orangered");
        $("#gunum").html(gunum);
        $("#j_start").fadeOut(1000);
        $("#reset").fadeIn(2000);
    }else{
        $("#game").fadeIn(800);
        $("#judge").html("失敗");
        $("#judge").css("fontSize","48px");
        $("#judge").css("color","blue");
        $("#gunum").html(gunum);
        $("#j_start").fadeOut(1000);
        $("#reset").fadeIn(2000);
    }
});

$('#reset').click(function() {
    location.reload();
});


//     if(cpu_hands0==1){
//         view0='<img src="img/gu.png" alt="">';
//         $("#cpu_hands0").html(view0);
//         gunum+=1;
//     }else if(cpu_hands0==2){
//         view0='<img src="img/cho.png" alt="">';
//         $("#cpu_hands0").html(view0);
//     }else if(cpu_hands0==3){
//         view0='<img src="img/par.png" alt="">';
//         $("#cpu_hands0").html(view0);
//     }
// });