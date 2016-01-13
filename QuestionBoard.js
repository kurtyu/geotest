
// 順序必須正確
// namespace:
this.geogame = this.geogame||{};

(function() 
{
    // 建構式 
    var QuestionBoard = function () 
    {
        this.initialize();
    }

    var p = QuestionBoard.prototype = new createjs.Container(); 

    // // 成員屬性（variable members）
    // 21個字
    p.mQuestions = [["","Q.桶柑是什麼目？",
                            "無患子目","錦葵目","白花菜目", 1, false],
                    ["","Q.以下何者不是桶柑的主要產地？",
                            "石碇區","卑南鄉","台中市", 3, false],
                    ["","Q.桶柑的產季在？",
                            "12-3月","12-2月", "1-5月", 2, false],
                    ["","Q.桶柑主要有四個品系，以下何者不是？",
                            "椪柑桶柑","普通桶柑", "六月桶柑", 1, false],
                    ["","Q.請問，桶柑樹今年盛產，明年就會少產，對或錯？",
                            "對","錯", "不一定", 1, false],
                    ["image1","Q.照片題：請問，圖中的樹木嫁接了幾種果樹？",
                            "沒嫁接","2種", "3種", 3, false],
                    ["","Q.桶柑易受的病蟲害，以下何者為非？",
                            "黑星病","瘡痂病", "灰疽熱", 3, false],
                    ["","Q.本次活動為芎林桶柑，芎林鄉的飛鳳山可以遠眺\n請問天晴時在其山上可以看到的景點為 ？",
                            "101大樓 ","逢甲商圈 ", "走馬瀨農場", 1, false],
                    ["","Q.請問，吉園圃標章為 ？",
                            "GMP","台灣安全蔬果", "CNS", 2, false],
                    ["","Q.請問吉園圃標章中三個紅色圓圈的意義何者為非？",
                            "水果堆疊豐收","合理病蟲防治、使用推薦藥劑及遵守安全採收期", "產品經輔導、檢驗與管制", 1, false],
                    ["","Q.請問今年公益活動的主軸何者為非？",
                            "學習","土地", "過年", 3, false],
                    ["","Q.今年活動日期為？",
                            "1/21","1/29", "1/25", 1, false],
                    ["","Q.何者不是本次活動的參與慈善團體 ？",
                            "竹東家扶","築心之家", "紅十字會 ", 3, false],  
                    ["","Q.活動中加入了一個小服務可以讓訂購者知道買到了\n哪位農夫的桶柑，請問該服務是？",
                            "無人飛機","半色調QR碼", "360度環繞全景", 2, false],
                    ["","Q.本次活動的業師教授強調的主題為？",
                            "草莓","桶柑 ", "溫泉", 2, false],
                    ["","Q.請問朱自清的爸爸背影掉的是？",
                            "橘子","柳丁", "榴槤", 1, false],   
                    ["","Q.請問陳皮是風乾的是？",
                            "芭樂","葡萄", "橘子", 3, false], 
                    ["","Q.請問下列哪一個是台灣的遊戲廠商？",
                            "遊戲蓮霧","遊戲橘子", "遊戲蘋果", 2, false], 
                    ["","Q.請問開發這個轉轉橘子問答遊戲的廠商是？",
                            "農委會","遊戲橘子", "究心公益科技", 3, false],                            
                    ["","Q.下列哪一個不是橘子的品種？",
                            "桶柑","雙聖", "茂谷", 2, false],                                                                                                         
                            ];

    
    p.mQuestionContainer = null;
    // 背後面板
    p.mBoard = null;
    // 問題文字
    p.mQuestionText = null;
    // 問題索引
    p.mQuestionIndex = 0;
    // 問題按鈕
    p.mQuestionButton = null;
    // 答案按鈕
    p.mAnswerButtons = [];
    // 正解
    p.mCorrectFlag = null;
    // 不正解
    p.mWrongFlag = null;
    // 結果
    p.mResultFlag = null;

    //
    p.mButtonsLock = false;

    // 暫時 問題圖片
    p.mQuestionImage;

    // 建構式（constructor）
    // 保留原型的initialize
    p.Container_initialize = QuestionBoard.prototype.initialize; //unique to avoid overiding base class

    p.initialize = function () 
    {
        this.Container_initialize();

        this.mQuestionContainer = new createjs.Container();
        this.mQuestionContainer.x = screenWidth/2;
        this.mQuestionContainer.y = screenHeight/2;
        this.mQuestionContainer.regX = screenWidth/2;
        this.mQuestionContainer.regY = screenHeight/2;

        this.mBoard = new createjs.Shape();
        this.mBoard.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
        this.mBoard.graphics.beginFill("white").drawRect(100, 80, screenWidth - 50, 300);
        this.mQuestionContainer.addChild(this.mBoard);

        this.mQuestionText = new createjs.Text("", "18px Arial", "#ff7700");
        this.mQuestionText.x = 120;
        this.mQuestionText.y = 125;


        // var txt = new createjs.Text("", "18px Arial", "#FFF");
        
        // txt.text = "This text is rendered in canvas using the Text Object:\n\n";
        // txt.text += "The API is loosely based on Flash's display list. The key classes are:\n\n";
        // txt.text += "DisplayObject\nAbstract base class for all display elements in Easel. Exposes all of the display properties (ex. x, y, rotation, scaleX, scaleY, alpha, shadow, etc) that are common to all display objects.\n\n"
        // txt.text += "Stage\nThe root level display container for display elements. Each time tick() is called on Stage, it will update and render the display list to its associated canvas.\n\n";
        // txt.text += "Container\nA nestable display container, which lets you aggregate display objects and manipulate them as a group.\n\n";
        // txt.text += "Text\nRenders text in the context of the display list."
        
        // txt.lineWidth = 660;
        // //txt.maxWidth = 500;
        // txt.textBaseline = "top";
        // txt.textAlign = "left";
        // txt.y = 30;
        // txt.x = 30;
        // stage.addChild(txt);
        
        // // use getBounds to dynamically draw a background for our text:
        // var bounds = txt.getBounds();
        // var pad = 10;
        // var bg = new createjs.Shape();
        // bg.graphics.beginFill("#114").drawRect(txt.x-pad+bounds.x, txt.y-pad+bounds.y, bounds.width+pad*2, bounds.height+pad*2);
        // this.mQuestionContainer.addChildAt(bg,0);


        this.addChild(this.mQuestionContainer);

        this.mQuestionContainer.visible = false;
    }

    // p.getName = function()
    // {
    //     return this.name;
    // }

    // p.getImage = function()
    // {
    //     return this.image;
    // }

    p.shuffle = function() 
    {
        var currentIndex = this.mQuestions.length;
        var temporaryValue;
        var randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) 
        {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = this.mQuestions[currentIndex];
            this.mQuestions[currentIndex] = this.mQuestions[randomIndex];
            this.mQuestions[randomIndex] = temporaryValue;
        }
    }

    p.addCorrectFlag = function(result)
    {
        this.mCorrectFlag = new createjs.Bitmap(result);
        this.mCorrectFlag.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
        this.mCorrectFlag.x = screenWidth/2 + 75;
        this.mCorrectFlag.regX = 352/2;
        this.mCorrectFlag.regY = 178/2;        
        this.addChild(this.mCorrectFlag);
        this.mCorrectFlag.visible = false;
    }

    p.addWrongFlag = function(result)
    {
        this.mWrongFlag = new createjs.Bitmap(result);
        this.mWrongFlag.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
        this.mWrongFlag.x = screenWidth/2 + 75;
        this.mWrongFlag.regX = 412/2;
        this.mWrongFlag.regY = 144/2;         
        this.addChild(this.mWrongFlag);
        this.mWrongFlag.visible = false;
    }

    p.addQuestionImage = function(result)
    {
        this.mQuestionImage = new createjs.Bitmap(result);
        this.mQuestionContainer.addChild(this.mQuestionImage); 
        this.mQuestionImage.regX = 245/2;
        this.mQuestionImage.regY = 180/2;
        this.mQuestionImage.y = 240;
        this.mQuestionImage.x = screenWidth/2 + 100;
        this.mQuestionImage.visible = false;
    }

    p.addQuestionText = function(result)
    {
        this.mQuestionContainer.addChild(this.mQuestionText); 
    }

    // p.addQuestionIcon = function(result)
    // {
    //     var questionIcon = new createjs.Bitmap(result);
    //     questionIcon.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
    //     // this.addChild(questionIcon); 
    //     questionIcon.regX = 60+35;
    //     questionIcon.regY = 60;
    //     // questionIcon.y = -20;
    //     questionIcon.x = screenWidth/2;
    // }

    p.addQuestionButton = function(result)
    {
        this.mQuestionButton = new createjs.Bitmap(result);
        this.mQuestionButton.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
        this.addChild(this.mQuestionButton);       
        this.mQuestionButton.regX = 120/2;
        this.mQuestionButton.regY = 120/2;                
        
        this.mQuestionButton.x = screenWidth/2 + 60;

        this.mQuestionButton.y = screenHeight/2;   
        this.mQuestionButton.visible = false;
        var customHitArea = new createjs.Shape();
        customHitArea.graphics.beginFill("#F00").drawEllipse(0,0,result.width,result.height);
        this.mQuestionButton.hitArea = customHitArea;  
        this.mQuestionButton.addEventListener("click", function(evt) 
        {
            playClickSound();
            mQuestionBoard.mButtonsLock = true;
            disappearObject(evt.target, showQuestion);
        }); 
    }

    p.dropQuestion = function()
    {
        console.log("丟入問題!!!");
        dropObject(this.mQuestionButton, 0, null);
    }

    p.addAnswerButton = function(result, index, type)
    {
        var answerButton = new createjs.Bitmap(result);
        answerButton.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
        this.addChild(answerButton);       
        switch(index)
        {
            case 0:
                answerButton.x = screenWidth/2 + 75 - 140; 
                break;
            case 1:
                answerButton.x = screenWidth/2 + 75; 
                break;            
            case 2:
                answerButton.x = screenWidth/2 + 75 + 140; 
                break;            
        }
        answerButton.y = 420; 
        answerButton.regX = 130/2;
        answerButton.regY = 130/2;    
        if(type == 0)
        {
            var buttonHitArea = new createjs.Shape();
            buttonHitArea.graphics.beginFill("#F00").drawRect(0,0,result.width,result.height);
            answerButton.hitArea = buttonHitArea;  
            answerButton.addEventListener("click", function(evt) 
            {
                playClickSound();
                // console.log("回答:"+mQuestionBoard.mButtonsLock);
                if(mQuestionBoard.mButtonsLock == true)
                {
                    return;
                }

                mQuestionBoard.mButtonsLock = true;

                var showSelectButton = null;

                var answerA = null;
                var answerB = null;
                var answerC = null;

                var question = mQuestionBoard.mQuestions[mQuestionBoard.mQuestionIndex];
                var answer = question[5];

                console.log(mQuestionBoard.mQuestionIndex+ " -> 答案:"+answer);

                mQuestionBoard.mAnswerButtons[0].visible = false;
                mQuestionBoard.mAnswerButtons[1].visible = false;
                mQuestionBoard.mAnswerButtons[2].visible = false;

                if(answer == 1)
                {
                    // 正確答案
                    answerA = mQuestionBoard.mAnswerButtons[3];
                    mQuestionBoard.mAnswerButtons[4].visible = false;
                    mQuestionBoard.mAnswerButtons[5].visible = false;
                    // 錯誤答案
                    mQuestionBoard.mAnswerButtons[6].visible = false;  
                    answerB = mQuestionBoard.mAnswerButtons[7];
                    answerC = mQuestionBoard.mAnswerButtons[8];
                }
                else if(answer == 2)
                {
                     // 正確答案
                    mQuestionBoard.mAnswerButtons[3].visible = false;
                    answerB = mQuestionBoard.mAnswerButtons[4];
                    mQuestionBoard.mAnswerButtons[5].visible = false;                    
                    // 錯誤答案
                    answerA = mQuestionBoard.mAnswerButtons[6];
                    mQuestionBoard.mAnswerButtons[7].visible = false;
                    answerC = mQuestionBoard.mAnswerButtons[8];
                }
                else if(answer == 3)
                {
                     // 正確答案
                    mQuestionBoard.mAnswerButtons[3].visible = false;
                    mQuestionBoard.mAnswerButtons[4].visible = false;                      
                    answerC = mQuestionBoard.mAnswerButtons[5];
                    // 錯誤答案
                    answerA = mQuestionBoard.mAnswerButtons[6];
                    answerB = mQuestionBoard.mAnswerButtons[7];
                    mQuestionBoard.mAnswerButtons[8].visible = false;  
                }    

                answerA.scaleX = 1.0;
                answerA.scaleY = 1.0;
                answerA.visible = true;  
                answerB.scaleX = 1.0;
                answerB.scaleY = 1.0;                
                answerB.visible = true;
                answerC.scaleX = 1.0;
                answerC.scaleY = 1.0;
                answerC.visible = true;  

                console.log("選擇:"+index);

                switch(index)
                {
                    case 0:
                        showSelectButton = answerA;
                        break;
                    case 1:
                        showSelectButton = answerB;
                        break;
                    case 2:
                        showSelectButton = answerC;
                        break;
                }

                rubberband(showSelectButton, answerQuestion(index)); 
            });
        } 

        this.mAnswerButtons[index+3*type] = answerButton;
        answerButton.visible = false;
    }

    p.showQuestion = function(questionId)
    {
        console.log("questionId:"+questionId);
        this.mQuestionText.text = this.mQuestions[questionId][1]+"\n\n\n";
        this.mQuestionText.text += "(A)"+this.mQuestions[questionId][2]+"\n\n";
        this.mQuestionText.text += "(B)"+this.mQuestions[questionId][3]+"\n\n";
        this.mQuestionText.text += "(C)"+this.mQuestions[questionId][4]+"\n\n";

        // 圖片支援
        if(this.mQuestions[questionId][0] != "")
        {
            appearObject(this.mQuestionImage);
        }

        popupObject(this.mQuestionContainer, showAnswerButtons);
    }

    p.showAnswerButtons = function()
    {
        dropObject(this.mAnswerButtons[0], 0);
        dropObject(this.mAnswerButtons[1], 200);
        dropObject(this.mAnswerButtons[2], 400, unlockAnswerButtons);
    }

    p.hideQuestion = function()
    {
        hideObject(this.mQuestionContainer);
        for(var i =0; i<9; i++)
        {
            this.mAnswerButtons[i].visible = false;
        }
        // hideObject(this.mQuestionBoard);
        hideObject(this.mResultFlag);
        if(this.mQuestionImage.visible == true)
        {
            hideObject(this.mQuestionImage);
        }
    }

    geogame.QuestionBoard = QuestionBoard;
}());

function unlockAnswerButtons()
{
    mQuestionBoard.mButtonsLock = false;
}

function showQuestion()
{
    mQuestionBoard.showQuestion(mQuestionBoard.mQuestionIndex);
}

function showAnswerButtons()
{
    mQuestionBoard.showAnswerButtons();
}

function answerQuestion(index)
{
    console.log("回答問題:"+index);
    // 對答案
    var question = mQuestionBoard.mQuestions[mQuestionBoard.mQuestionIndex];

    // 檢查回答
    if(question[5] == (index+1))
    {
        mQuestionBoard.mResultFlag = mQuestionBoard.mCorrectFlag;
        // 正確
        dropDownObject(mQuestionBoard.mCorrectFlag, 1000, nextGameStep, 2);
        question[6]=true;
    }
    else
    {
        mQuestionBoard.mResultFlag = mQuestionBoard.mWrongFlag;
        // 錯誤
        dropDownObject(mQuestionBoard.mWrongFlag, 1000, nextGameStep, -2);
        question[6]=false;
    }
    
}





