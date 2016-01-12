
// 開始讀取圖片資源
function startLoading(){

    // 載入中畫面
    // var loadingBitmap = new createjs.Bitmap(loadingImg);
    // loadingBitmap.name = "loadingBitmap";
    // stage.addChild(loadingBitmap);  

    // PreloadJS.js
    // =================================================================
    var manifest = [
        // {src:"ui/capture_button_normal.png", id:"capture_button_normal"},    
        // {src:"ui/capture_button_light.png", id:"capture_button_light"},            
        {src:"ui/role.png", id:"role"},
        {src:"ui/background.png", id:"background"},
        {src:"ui/answer_button_a.png", id:"answer_button_a"},
        {src:"ui/answer_button_b.png", id:"answer_button_b"},         
        {src:"ui/answer_button_c.png", id:"answer_button_c"},  
        {src:"ui/answer_button_a_green.png", id:"answer_button_a_green"},
        {src:"ui/answer_button_b_green.png", id:"answer_button_b_green"},         
        {src:"ui/answer_button_c_green.png", id:"answer_button_c_green"}, 
        {src:"ui/answer_button_a_red.png", id:"answer_button_a_red"},
        {src:"ui/answer_button_b_red.png", id:"answer_button_b_red"},         
        {src:"ui/answer_button_c_red.png", id:"answer_button_c_red"},         
        {src:"ui/question.png", id:"question"},
        {src:"ui/correct_flat.png", id:"correct_flat"},
        {src:"ui/wrong_flat.png", id:"wrong_flat"},
        {src:"ui/life.png", id:"life"},
        {src:"ui/life_empty.png", id:"life_empty"},
        {src:"ui/start_button.png", id:"start_button"},
        {src:"ui/title.png", id:"title"},
        {src:"ui/subtitle.png", id:"subtitle"},
        {src:"ui/geothings.png", id:"geothings"},

        {src:"ui/questions20.png", id:"questions20"},
        {src:"ui/time100.png", id:"time100"},

        {src:"ui/gamerule_title.png", id:"gamerule_title"},
        
        {src:"ui/start_game_button.png", id:"start_game_button"},

        {src:"ui/speedup.png", id:"speedup"},
        {src:"ui/orange.png", id:"orange"},
        {src:"ui/help.png", id:"help"},
        {src:"ui/timelimit.png", id:"timelimit"},

        {src:"ui/good.png", id:"good"},
        {src:"ui/again_button.png", id:"again_button"},

        {src:"ui/rank_button.png", id:"rank_button"},
        {src:"ui/close_button.png", id:"close_button"},
        {src:"ui/close_circle_button.png", id:"close_circle_button"},
        

        {src:"ui/me.png", id:"me"},

        {src:"ui/question_img.png", id:"question_img"},

        {src:"puzzle1/puzzle_1_1.png", id:"puzzle_1_1"},
        {src:"puzzle1/puzzle_1_2.png", id:"puzzle_1_2"},
        {src:"puzzle1/puzzle_1_3.png", id:"puzzle_1_3"},
        {src:"puzzle1/puzzle_1_4.png", id:"puzzle_1_4"},
        {src:"puzzle1/puzzle_1_5.png", id:"puzzle_1_5"},
        {src:"puzzle1/puzzle_1_6.png", id:"puzzle_1_6"},
        {src:"puzzle1/puzzle_1_7.png", id:"puzzle_1_7"},
        {src:"puzzle1/puzzle_1_8.png", id:"puzzle_1_8"},
        {src:"puzzle1/puzzle_1_9.png", id:"puzzle_1_9"},
        {src:"puzzle1/puzzle_1_10.png", id:"puzzle_1_10"},
        {src:"puzzle1/puzzle_1_11.png", id:"puzzle_1_11"},
        {src:"puzzle1/puzzle_1_12.png", id:"puzzle_1_12"},
        {src:"puzzle1/puzzle_1_13.png", id:"puzzle_1_13"},
        {src:"puzzle1/puzzle_1_14.png", id:"puzzle_1_14"},
        {src:"puzzle1/puzzle_1_15.png", id:"puzzle_1_15"},
        {src:"puzzle1/puzzle_1_16.png", id:"puzzle_1_16"},
        {src:"puzzle1/puzzle_1_1_black.png", id:"puzzle_1_1_black"},
        {src:"puzzle1/puzzle_1_2_black.png", id:"puzzle_1_2_black"},
        {src:"puzzle1/puzzle_1_3_black.png", id:"puzzle_1_3_black"},
        {src:"puzzle1/puzzle_1_4_black.png", id:"puzzle_1_4_black"}, 
        {src:"puzzle1/puzzle_1_5_black.png", id:"puzzle_1_5_black"},
        {src:"puzzle1/puzzle_1_6_black.png", id:"puzzle_1_6_black"},
        {src:"puzzle1/puzzle_1_7_black.png", id:"puzzle_1_7_black"},        
        {src:"puzzle1/puzzle_1_8_black.png", id:"puzzle_1_8_black"},        
        {src:"puzzle1/puzzle_1_9_black.png", id:"puzzle_1_9_black"},        
        {src:"puzzle1/puzzle_1_10_black.png", id:"puzzle_1_10_black"},        
        {src:"puzzle1/puzzle_1_11_black.png", id:"puzzle_1_11_black"},        
        {src:"puzzle1/puzzle_1_12_black.png", id:"puzzle_1_12_black"},        
        {src:"puzzle1/puzzle_1_13_black.png", id:"puzzle_1_13_black"},        
        {src:"puzzle1/puzzle_1_14_black.png", id:"puzzle_1_14_black"},        
        {src:"puzzle1/puzzle_1_15_black.png", id:"puzzle_1_15_black"},  
        {src:"puzzle1/puzzle_1_16_black.png", id:"puzzle_1_16_black"}, 
    ];


    // createjs.Sound.registerPlugins([createjs.WebAudioPlugin]);
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.registerSound("assets/sound/click.mp3", "click_sound");
    createjs.Sound.registerSound("assets/sound/get_outside.mp3", "get_outside");
    createjs.Sound.addEventListener("fileload", handleSoundLoad);

    // 使用 XML HTTP Requests
    // var preload = new createjs.LoadQueue(true, "assets/");
    // Local 不要使用
    var preload = new createjs.LoadQueue(false, "assets/");

    preload.addEventListener("progress", handleProgress); // 處理中
    preload.addEventListener("fileload", handleFileLoad); // 載入其中一張檔案的時候
    preload.addEventListener("complete", handleComplete); // 最後全部完成的時候        
    preload.loadManifest(manifest);  
    // =================================================================
}

function playClickSound()
{
    if(mSoundClick == null)
    {
        mSoundClick = createjs.Sound.play("click_sound");
    }
    else
    {
        mSoundClick.play("click_sound");
    }
}

function handleSoundLoad()
{
    if(mSoundBackground!=null)
    {
        mSoundBackground.stop();
    }
    mSoundBackground =  createjs.Sound.play("get_outside", {loop:-1});
}

function handleProgress(event) 
{
    // console.log("handleProgress...")    
    bar.scaleX = event.loaded * barWidth;  // event.loaded 是個百分比浮點數
    stage.update();
}


function handleComplete(event) 
{
    // console.log("handleComplete...");  
    // 關閉載入條
    // loaderBar.visible = false;       

    stage.removeAllChildren();
    // loadingImg = null;

    // 遊戲大廳
    lobbyContainer = new createjs.Container();
    stage.addChild(lobbyContainer);

    // 地圖層
    mapContainer = new createjs.Container();
    stage.addChild(mapContainer);  

    // 黑色拼圖容器
    blackPuzzleContainer = new createjs.Container();
    stage.addChild(blackPuzzleContainer); 
   
  // 目前的拼圖
    currentPuzzleContainer = new createjs.Container();
    stage.addChild(currentPuzzleContainer); 

    // 遊戲畫面
    mGameContainer = new createjs.Container();
    stage.addChild(mGameContainer); 

    // 問題容器
    mQuestionBoard = new geogame.QuestionBoard();
    stage.addChild(mQuestionBoard); 
    mQuestionBoard.regX = screenWidth/2;
    mQuestionBoard.regX = screenHeight/2;
    mQuestionBoard.x = screenWidth/2;
    mQuestionBoard.y = 10;
    // questionBoard.visible = false;

    // myPuzzleContainer = new createjs.Container();
    // stage.addChild(myPuzzleContainer); 

    mScoreContainer = new createjs.Container();
    stage.addChild(mScoreContainer);

    mRankCircleContainer = new createjs.Container();
    stage.addChild(mRankCircleContainer); 

    addPlayersNumber();

    addBlackShape();

    var i = 0;
    for(i=0;i<assets.length;i++) 
    {
        var item = assets[i]; //loader.getResult(id);
        var id = item.item.id;
        var result = item.result;

        switch(id)
        {
            // case "capture_button_normal":

            //     captureButton = new createjs.Bitmap(result);
            //     captureButton.x = screenWidth/2;
            //     captureButton.y = screenHeight/2;
            //     captureButton.regX = 166/2;
            //     captureButton.regY = 166/2;

            //     var buttonHitArea = new createjs.Shape();
            //     // 指定點擊範圍 
            //     buttonHitArea.graphics.beginFill("#F00").drawRect(0,0,result.width,result.height);
            //     captureButton.hitArea = buttonHitArea;  
            //     // 更新位置
            //     captureButton.addEventListener("click", function(evt) 
            //     {
            //         // rubberband(captureButton, captureButtonHandleComplete); 

            //         // 檢查目前角度 是否符合目前的拼圖ID
            //         // dropCurrentPuzzle(++currentPuzzleId);


            //         // if((topPuzzleContainer.rotation < 10) && ())   

            //         // mQuestionBoard.dropQuestion();
            //         // dropBlackPuzzle(16);   
            //     });             
            //     break;
            case "puzzle_line_4x4":
                puzzleLine4x4Bitmap = new createjs.Bitmap(result);
                puzzleLine4x4Bitmap.name = "puzzle_line_4x4";
                puzzleLine4x4Bitmap.scaleX = 0.5;
                puzzleLine4x4Bitmap.scaleY = 0.5;
                puzzleLine4x4Bitmap.regX = 320/2;
                puzzleLine4x4Bitmap.regY = 315/2;                
            break;

            // 玩家
            case "role":
                var roleData = 
                {
                    images: ["assets/ui/role.png"],
                    frames: {width:96, height:96},
                    animations: {
                        stand:[1], 
                        down:
                        {
                            frames: [0,1,2,1],
                            speed:0.1
                        },
                        left:
                        {
                            frames: [3,4,5,4], 
                            speed:0.1
                        },
                        right:
                        {
                            frames: [6,7,8,7], 
                            speed:0.1
                        },
                        up:
                        {
                            frames: [9,10,11,10],
                            speed:0.1
                        }
                    }
                };
                var spriteSheet = new createjs.SpriteSheet(roleData);
                role = new createjs.Sprite(spriteSheet, "down");
                role.name = "role";
                role.speed = 1;
                role.x = (screenWidth - 96)/2;
                role.y = (screenHeight - 96)/2 - 160;
                // role.scaleX = 0.6;
                // role.scaleY = 0.6;
            break;
            case "background":
                var backgroundBitmap = new createjs.Bitmap(result);
                mapContainer.addChild(backgroundBitmap);       
                backgroundBitmap.regX = 800/2;
                backgroundBitmap.regY = 800/2;
                break;
            case "title":
                mTitle = new createjs.Bitmap(result);
                mTitle.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
                mGameContainer.addChild(mTitle);       
                mTitle.regX = 440/2;
                mTitle.regY = 120/2;
                mTitle.x = screenWidth/2;
                mTitle.y = 240;
                dropObject(mTitle, 0);
                break;
            case "subtitle":
                mSubTitle = new createjs.Bitmap(result);
                mSubTitle.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
                mGameContainer.addChild(mSubTitle);       
                mSubTitle.regX = 220/2;
                mSubTitle.regY = 34/2;
                mSubTitle.x = screenWidth/2;
                mSubTitle.y = screenHeight - 80;
                dropObject(mSubTitle, 100);
                break;     
            case "start_button":
                mStartButton = new createjs.Bitmap(result);
                mStartButton.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
                mGameContainer.addChild(mStartButton);    
                mStartButton.x = screenWidth/2;
                mStartButton.y = screenHeight/2+20;   
                mStartButton.regX = 226/2;
                mStartButton.regY = 76/2;

                createjs.Tween.get(mStartButton, {loop: true}) 
                .to({scaleX: 1.2, scaleY: 1.2}, 500, createjs.Ease.linear)
                .to({scaleX: 1.0, scaleY: 1.0}, 500, createjs.Ease.linear);

                var buttonHitArea = new createjs.Shape();
                buttonHitArea.graphics.beginFill("#F00").drawRect(0,0,result.width,result.height);
                mStartButton.hitArea = buttonHitArea;  
                mStartButton.addEventListener("click", function(evt) 
                {
                    if(mRankBoard.visible == true)
                    {
                        return;
                    }
                    playClickSound();
                    // 移除Tween
                    createjs.Tween.removeTweens(mStartButton);
                    hideObject(mStartButton, startGame);

                    mPlayersNumberBorder.visible = false;
                    mPlayersNumber.visible = false;
                });    
                // dropObject(mStartButton, 1000);              
                break;
            case "start_game_button":
                mStartGameButton = new createjs.Bitmap(result);
                stage.addChild(mStartGameButton);    
                mStartGameButton.x = screenWidth/2 + 10;
                mStartGameButton.y = 120;   
                mStartGameButton.regX = 200/2;
                mStartGameButton.regY = 100/2;

                createjs.Tween.get(mStartGameButton, {loop: true}) 
                .to({scaleX: 1.2, scaleY: 1.2}, 500, createjs.Ease.linear)
                .to({scaleX: 1.0, scaleY: 1.0}, 500, createjs.Ease.linear);

                var buttonHitArea = new createjs.Shape();
                buttonHitArea.graphics.beginFill("#F00").drawRect(0,0,result.width,result.height);
                mStartGameButton.hitArea = buttonHitArea;  
                mStartGameButton.addEventListener("click", function(evt) 
                {
                    playClickSound();


                    // 移除Tween
                    createjs.Tween.removeTweens(mStartGameButton);

                    hideObject(mHelp);
                    hideObject(mHelpTimeLimit);
                    hideObject(mGameRuleTitle);
                    disappearObject(mBlackShape);
                    hideObject(mStartGameButton, startGameTimer);
                });
                mStartGameButton.visible = false              
                break;
            case "rank_button":
                mRankButton = new createjs.Bitmap(result);
                mRankButton.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
                mGameContainer.addChild(mRankButton);    
                mRankButton.x = screenWidth/2;
                mRankButton.y = screenHeight/2+110;   
                mRankButton.regX = 240/2;
                mRankButton.regY = 60/2;

                var buttonHitArea = new createjs.Shape();
                buttonHitArea.graphics.beginFill("#F00").drawRect(0,0,result.width,result.height);
                mRankButton.hitArea = buttonHitArea;  
                mRankButton.addEventListener("click", function(evt) 
                {
                    if(mRankBoard.visible == true)
                    {
                        return;
                    }
                    playClickSound();

                    // 取得遊戲人數
                    parseGetPlayersNumber();

                    // hideObject(mRankButton, startGame);
                    showRankList();

                    mCloseButton.visible = true;
                });  

                // 建立排行板子
                mRankBoard = new createjs.Shape();
                mRankBoard.graphics.beginFill("#feebca").drawRect(0,0,440,600);
                mRankBoard.x = screenWidth/2;
                mRankBoard.y = screenHeight/2 + 50;   
                mRankBoard.regX = 440/2;
                mRankBoard.regY = 600/2;
                mRankBoard.visible = false;

                mGameContainer.addChild(mRankBoard);

                for(var j=0; j<10; j++)
                {
                    var rankNumber = "";
                    if((j+1)<10)
                    {
                        rankNumber = "0"+(j+1);
                    }
                    else
                    {
                        rankNumber = (j+1);
                    }
                    var rank = new createjs.Text(rankNumber+":- - -(00題/00.0%)", "32px Arial", "#362e2b"); 
                    // rank.outline = 4;
                    rank.x = 80;
                    rank.y = 150 + 52*j;
                    mGameContainer.addChild(rank);
                    mRanksArray[j] = rank;
                    rank.visible = false;
                }
                break;
           case "close_circle_button":
                mCloseCircleButton = new createjs.Bitmap(result);    
                mCloseCircleButton.x = 185;
                mCloseCircleButton.y = 104;   
                mCloseCircleButton.regX = 283/2;
                mCloseCircleButton.regY = 62/2;

                var buttonHitArea = new createjs.Shape();
                buttonHitArea.graphics.beginFill("#F00").drawRect(0,0,result.width,result.height);
                mCloseCircleButton.hitArea = buttonHitArea;  
                mCloseCircleButton.addEventListener("click", function(evt) 
                {
                    mRankCircleContainer.removeAllChildren();
                    mRankCircleContainer.visible = false;
                    mCloseCircleButton.visible = false;

                    // disappearObject(mBlackShape);
                    location = location;
                });
                break;             
            case "close_button":
                mCloseButton = new createjs.Bitmap(result);   
                mCloseButton.x = 175;
                mCloseButton.y = 104;   
                mCloseButton.regX = 263/2;
                mCloseButton.regY = 62/2;

                var buttonHitArea = new createjs.Shape();
                buttonHitArea.graphics.beginFill("#F00").drawRect(0,0,result.width,result.height);
                mCloseButton.hitArea = buttonHitArea;  
                mCloseButton.addEventListener("click", function(evt) 
                {
                    for(var j=0; j<10; j++)
                    {
                        mRanksArray[j].visible = false;
                    }
                    mRankBoard.visible = false;
                    mCloseButton.visible = false;
                    appearObject(mTime100);
                    appearObject(mQuestion20);

                    appearObject(mStartButton);
                    appearObject(mRankButton);
                });
                mGameContainer.addChild(mCloseButton);
                mCloseButton.visible = false;
                break;
            case "again_button":
                mGameAgainButton = new createjs.Bitmap(result);
                stage.addChild(mGameAgainButton);    
                mGameAgainButton.x = screenWidth/2;
                mGameAgainButton.y = screenHeight - 60;   
                mGameAgainButton.regX = 320/2;
                mGameAgainButton.regY = 80/2;

                createjs.Tween.get(mGameAgainButton, {loop: true}) 
                .to({scaleX: 1.2, scaleY: 1.2}, 500, createjs.Ease.linear)
                .to({scaleX: 1.0, scaleY: 1.0}, 500, createjs.Ease.linear);

                var buttonHitArea = new createjs.Shape();
                buttonHitArea.graphics.beginFill("#F00").drawRect(0,0,result.width,result.height);
                mGameAgainButton.hitArea = buttonHitArea;  
                mGameAgainButton.addEventListener("click", function(evt) 
                {
                    playClickSound();

                    parseAllGameRecord(mCorrectAnswerCount);

                    // 移除Tween
                    createjs.Tween.removeTweens(mGameAgainButton);
                    hideObject(mGameAgainButton);
                    hideObject(mOrange);

                    hideObject(mGameResultScoreBorder);
                    hideObject(mGameResultScore);
                    hideObject(mGameResultTimeBorder);
                    hideObject(mGameResultTime);

                    disappearObject(mBlackShape);
                    // location = location;

                });
                mGameAgainButton.visible = false;
                break;
            case "question":
                mQuestionBoard.addQuestionButton(result);
                break;
            case "answer_button_a":
                mQuestionBoard.addAnswerButton(result, 0, 0);
                break; 
            case "answer_button_b":
                mQuestionBoard.addAnswerButton(result, 1, 0);
                break; 
            case "answer_button_c":
                mQuestionBoard.addAnswerButton(result, 2, 0);
                break; 
            case "answer_button_a_green":
                mQuestionBoard.addAnswerButton(result, 0, 1);
                break; 
            case "answer_button_b_green":
                mQuestionBoard.addAnswerButton(result, 1, 1);
                break; 
            case "answer_button_c_green":
                mQuestionBoard.addAnswerButton(result, 2, 1);
                break; 
            case "answer_button_a_red":
                mQuestionBoard.addAnswerButton(result, 0, 2);
                break; 
            case "answer_button_b_red":
                mQuestionBoard.addAnswerButton(result, 1, 2);
                break; 
            case "answer_button_c_red":
                mQuestionBoard.addAnswerButton(result, 2, 2);
                break;                                 
                // 正解
            case "correct_flat":
                mQuestionBoard.addCorrectFlag(result);
                break;
                // 不正解
            case "wrong_flat":
                mQuestionBoard.addWrongFlag(result);
                break;   
            case "questions20":
                mQuestion20 = new createjs.Bitmap(result);
                mQuestion20.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
                stage.addChild(mQuestion20);
                mQuestion20.regX = 200/2;
                mQuestion20.regY = 128/2;
                mQuestion20.x = screenWidth-110;
                mQuestion20.y = 90;
                mQuestion20.rotation = 22.5;
                mQuestion20.visible = false;
                appearObject(mQuestion20);
                break;
            case "time100":
                mTime100 = new createjs.Bitmap(result);
                mTime100.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
                stage.addChild(mTime100);
                mTime100.regX = 200/2;
                mTime100.regY = 128/2;
                mTime100.x = 120;
                mTime100.y = 90; 
                mTime100.visible = false;
                appearObject(mTime100);
                break;                
            case "orange":
                mOrange = new createjs.Bitmap(result);
                stage.addChild(mOrange);
                mOrange.regX = 386/2;
                mOrange.regY = 478/2;
                mOrange.x = screenWidth/2;
                mOrange.y = screenHeight/2 + 30;
                mOrange.visible = false;
                break;
            case "geothings":
                mGeothings = new createjs.Bitmap(result);
                stage.addChild(mGeothings);
                mGeothings.regX = 400/2;
                mGeothings.regY = 80/2;
                mGeothings.x = screenWidth/2;
                mGeothings.y = screenHeight/2 + 120;
                mGeothings.visible = false;
                break;                
            case "help":
                mHelp = new createjs.Bitmap(result);
                stage.addChild(mHelp);
                mHelp.regX = 248/2;
                mHelp.regY = 256/2;
                mHelp.x = screenWidth/2;
                mHelp.y = screenHeight/2;
                mHelp.visible = false;                
                break;
            case "timelimit":
                mHelpTimeLimit = new createjs.Bitmap(result);
                stage.addChild(mHelpTimeLimit);
                mHelpTimeLimit.regX = 240/2;
                mHelpTimeLimit.regY = 40/2;
                mHelpTimeLimit.x = screenWidth - 210;
                mHelpTimeLimit.y = 30;
                mHelpTimeLimit.visible = false;                  
                break;
            case "gamerule_title":
                mGameRuleTitle = new createjs.Bitmap(result);
                stage.addChild(mGameRuleTitle);
                mGameRuleTitle.regX = 386/2;
                mGameRuleTitle.regY = 162/2;
                mGameRuleTitle.x = screenWidth/2;
                // mGameRuleTitle.y = screenHeight - 200/2;
                mGameRuleTitle.visible = false;                  
                break;
            case "question_img":
                mQuestionBoard.addQuestionImage(result); 
                break;
            // case "life":
            //     mLifeArray[0] = new createjs.Bitmap(result);
            //     mLifeArray[0].x = screenWidth - 140;
            //     mLifeArray[0].y = 24;
            //     mLifeArray[0].regX = 46/2;
            //     mLifeArray[0].regY = 35/2;
            //     mLifeArray[0].visible = false;
            //     mGameContainer.addChild(mLifeArray[0]);

            //     mLifeArray[1] = new createjs.Bitmap(result);
            //     mLifeArray[1].x = screenWidth - 90;
            //     mLifeArray[1].y = 24;
            //     mLifeArray[1].regX = 46/2;
            //     mLifeArray[1].regY = 35/2;
            //     mLifeArray[1].visible = false;
            //     mGameContainer.addChild(mLifeArray[1]);

            //     mLifeArray[2] = new createjs.Bitmap(result);
            //     mLifeArray[2].x = screenWidth - 40;
            //     mLifeArray[2].y = 24;
            //     mLifeArray[2].regX = 46/2;
            //     mLifeArray[2].regY = 35/2;
            //     mLifeArray[2].visible = false;
            //     mGameContainer.addChild(mLifeArray[2]);

            //     break;                
            // case "life_empty":
            //     mLifeArray[3] = new createjs.Bitmap(result);
            //     mLifeArray[3].visible = false;
            //     mLifeArray[4] = new createjs.Bitmap(result);
            //     mLifeArray[4].visible = false;
            //     mLifeArray[5] = new createjs.Bitmap(result);            
            //     mLifeArray[5].visible = false;
            //     break;
            case "good":
                mGoodEffect = new createjs.Bitmap(result);
                mGameContainer.addChild(mGoodEffect);
                mGoodEffect.regX = 200/2;
                mGoodEffect.regY = 68/2;
                mGoodEffect.x = screenWidth/2;
                mGoodEffect.y = screenHeight/2 - 80;
                mGoodEffect.visible = false;
                break;
            case "speedup":
                mSpeedUpEffect = new createjs.Bitmap(result);
                mGameContainer.addChild(mSpeedUpEffect);
                mSpeedUpEffect.regX = 220/2;
                mSpeedUpEffect.regY = 60/2;
                mSpeedUpEffect.x = screenWidth/2;
                mSpeedUpEffect.y = 100;
                mSpeedUpEffect.visible = false;
                break;
            case "puzzle_1_1":
                addCurrentPuzzle(id, result, 0, 1, currentPuzzleContainer);
                addNormalPuzzle(id, result, 4, 1, blackPuzzleContainer, 1.2);                
            break;
            case "me":
                mMe = new createjs.Bitmap(result);
                mMe.regX = 100/2;
                mMe.regY = 100/2;
            break;  
            case "puzzle_1_2":
                addCurrentPuzzle(id, result, 0, 2, currentPuzzleContainer);
                addNormalPuzzle(id, result, 22.5, 2, blackPuzzleContainer, 1);                
            break;
            case "puzzle_1_3":
                addCurrentPuzzle(id, result, 0, 3, currentPuzzleContainer);
                addNormalPuzzle(id, result, 43, 3, blackPuzzleContainer, 1.2);                
            break;
            case "puzzle_1_4":
                addCurrentPuzzle(id, result, 0, 4, currentPuzzleContainer);
                addNormalPuzzle(id, result, 67.5, 4, blackPuzzleContainer, 1);                 
            break;
            case "puzzle_1_5":
                addCurrentPuzzle(id, result, 0, 5, currentPuzzleContainer);
                addNormalPuzzle(id, result, 94, 5, blackPuzzleContainer, 1);                  
            break;
            case "puzzle_1_6":
                addCurrentPuzzle(id, result, 0, 6, currentPuzzleContainer);
                addNormalPuzzle(id, result, 112.5, 6, blackPuzzleContainer, 1.1);
            break;
            case "puzzle_1_7":
                addCurrentPuzzle(id, result, 0, 7, currentPuzzleContainer);
                addNormalPuzzle(id, result, 135, 7, blackPuzzleContainer, 1);  
            break;
            case "puzzle_1_8":
                addCurrentPuzzle(id, result, 0, 8, currentPuzzleContainer);
                addNormalPuzzle(id, result, 157.5, 8, blackPuzzleContainer, 1); 
            break;
            case "puzzle_1_9":
                addCurrentPuzzle(id, result, 0, 9, currentPuzzleContainer);
                addNormalPuzzle(id, result, 188, 9, blackPuzzleContainer, 1.2); 
            break;
            case "puzzle_1_10":
                addCurrentPuzzle(id, result, 0, 10, currentPuzzleContainer);
                addNormalPuzzle(id, result, 202.5, 10, blackPuzzleContainer, 1);  
            break;
            case "puzzle_1_11":
                addCurrentPuzzle(id, result, 0, 11, currentPuzzleContainer);
                addNormalPuzzle(id, result, 220, 11, blackPuzzleContainer, 1.1);  
            break;
            case "puzzle_1_12":
                addCurrentPuzzle(id, result, 0, 12, currentPuzzleContainer);
                addNormalPuzzle(id, result, 255, 12, blackPuzzleContainer, 1.2);                 
            break;
            case "puzzle_1_13":
                addCurrentPuzzle(id, result, 0, 13, currentPuzzleContainer);
                addNormalPuzzle(id, result, 277, 13, blackPuzzleContainer, 1);                  
            break;
            case "puzzle_1_14":
                addCurrentPuzzle(id, result, 0, 14, currentPuzzleContainer);
                addNormalPuzzle(id, result, 292.5, 14, blackPuzzleContainer, 1.2);                  
            break;
            case "puzzle_1_15":
                addCurrentPuzzle(id, result, 0, 15, currentPuzzleContainer);
                addNormalPuzzle(id, result, 325, 15, blackPuzzleContainer, 1.2);  
            break;  
            case "puzzle_1_16":
                addCurrentPuzzle(id, result, 0, 16, currentPuzzleContainer);
                addNormalPuzzle(id, result, 337.5, 16, blackPuzzleContainer, 0.9); 
            break;                      
            case "puzzle_1_1_black":
               // 建立目前的拼圖
                addBlackPuzzle(id, result, 4, 1, blackPuzzleContainer, 1.2);
            break;              
            case "puzzle_1_2_black":
                addBlackPuzzle(id, result, 22.5, 2, blackPuzzleContainer, 1);
            break;          
            case "puzzle_1_3_black":
                addBlackPuzzle(id, result, 43, 3, blackPuzzleContainer, 1.2);
            break;  
            case "puzzle_1_4_black":
                addBlackPuzzle(id, result, 67.5, 4, blackPuzzleContainer, 1); 
            break;        
            case "puzzle_1_5_black":
                addBlackPuzzle(id, result, 94, 5, blackPuzzleContainer, 1);  
            break;   
            case "puzzle_1_6_black":
                addBlackPuzzle(id, result, 112.5, 6, blackPuzzleContainer, 1.1);  
            break;  
            case "puzzle_1_7_black":
                addBlackPuzzle(id, result, 135, 7, blackPuzzleContainer, 1);  
            break;  
            case "puzzle_1_8_black":
                addBlackPuzzle(id, result, 157.5, 8, blackPuzzleContainer, 1);
            break;  
            case "puzzle_1_9_black":
                addBlackPuzzle(id, result, 188, 9, blackPuzzleContainer, 1.2);  
            break;  
            case "puzzle_1_10_black":
                addBlackPuzzle(id, result, 202.5, 10, blackPuzzleContainer, 1); 
            break;  
            case "puzzle_1_11_black":
                addBlackPuzzle(id, result, 220, 11, blackPuzzleContainer, 1.1);  
            break;  
            case "puzzle_1_12_black":
                addBlackPuzzle(id, result, 255, 12, blackPuzzleContainer, 1.2);  
            break;  
            case "puzzle_1_13_black":
                addBlackPuzzle(id, result, 277, 13, blackPuzzleContainer, 1);  
            break;  
            case "puzzle_1_14_black":
                addBlackPuzzle(id, result, 292.5, 14, blackPuzzleContainer, 1.2);  
            break;  
            case "puzzle_1_15_black":
                addBlackPuzzle(id, result, 325, 15, blackPuzzleContainer, 1.2);  
            break;        
            case "puzzle_1_16_black":
                addBlackPuzzle(id, result, 337.5, 16, blackPuzzleContainer, 0.9);  
            break;                                                                                                                                
        }

    }   

    // 等於橘子園的座標
        mapContainer.x = (screenWidth)/2;
        mapContainer.y = (screenHeight)/2;
        mapContainer.scaleX = 1.5;
        mapContainer.scaleY = 1.5;

        blackPuzzleContainer.x = (screenWidth)/2; 
        blackPuzzleContainer.y = (screenHeight)/2;
        blackPuzzleContainer.scaleX = 1;
        blackPuzzleContainer.scaleY = 1;        

        currentPuzzleContainer.x = (screenWidth)/2; 
        currentPuzzleContainer.y = (screenHeight)/2;        

        // mGameContainer.addChild(role);

        // 
        // mGameContainer.addChild(captureButton);

        // 加入姓名
        // addUserName(username);
        // 加入分數
        addGameScore();    
        // 加入遊戲時間
        addGameTimer(); 


        addGameResult();

        // 最後再加入問題文字
        mQuestionBoard.addQuestionText();

        resize();

        // 要慢一拍
        createjs.Tween.get(stage) 
        .wait(1000)
        .call(parseGetPlayersNumber); 
    }

    function addBlackShape()
    {
        mBlackShape = new createjs.Shape();
        mBlackShape.graphics.beginFill("#000").drawRect(-screenWidth,-screenHeight,screenWidth*3,screenHeight*3);
        mBlackShape.alpha = 0.5;
        mBlackShape.regX = screenWidth/2;
        mBlackShape.regY = screenHeight/2;
        mBlackShape.x = screenWidth/2; 
        mBlackShape.y = screenHeight/2; 
        stage.addChild(mBlackShape);
        mBlackShape.visible = false;
    }

    function addRankCircleBoard(score, ranks)
    {
        mRankCircleContainer.removeAllChildren();

        // mCloseCircleButton.visible = true;


        // 建立排行板子
        mRankCircleBoard = new createjs.Shape();
        mRankCircleBoard.graphics.beginFill("#feebca").drawRect(0,0,440,600);
        mRankCircleBoard.x = screenWidth/2;
        mRankCircleBoard.y = screenHeight/2 + 50;   
        mRankCircleBoard.regX = 440/2;
        mRankCircleBoard.regY = 600/2;
        // mRankCircleBoard.visible = false;
        mRankCircleContainer.addChild(mRankCircleBoard);

        // 找出陣列最大值
        var max_value = 0;
        for (var i = 0 ; i < ranks.length ; i++) 
        {
          if (ranks[i] > max_value) 
          {
            max_value = ranks[i];
          }
        }

        var userIndex = 7-Math.round(score/3);
        console.log("userIndex:"+userIndex);

        addRankLine(60, 160, ranks[0], max_value, (userIndex == 0), "    20");
        addRankLine(60, 220, ranks[1], max_value, (userIndex == 1), "17~19");
        addRankLine(60, 280, ranks[2], max_value, (userIndex == 2), "14~16");
        addRankLine(60, 340, ranks[3], max_value, (userIndex == 3), "11~13");
        addRankLine(60, 400, ranks[4], max_value, (userIndex == 4), "  8~10");
        addRankLine(60, 460, ranks[5], max_value, (userIndex == 5), "  5~7");
        addRankLine(60, 520, ranks[6], max_value, (userIndex >= 6), "  0~4");         

        // mCloseCircleButton.visible = true;
        mRankCircleContainer.addChild(mCloseCircleButton);
    }

    function addRankLine(x, y, value, max, youarehere, label)
    {
        console.log("youarehere:"+youarehere);

        var color = "#2f6cb5";
        if(youarehere == true)
        {
            console.log("設定顏色");
            color = "#32b16c";
        }

        var rankFrame = new createjs.Shape();
        rankFrame.graphics.beginFill("#aaaaaa").drawRect(x + 100, y, 300, 50);
        mRankCircleContainer.addChild(rankFrame);

        var length = (value / max) * 300;
        var rankValue = new createjs.Shape();
        rankValue.graphics.beginFill(color).drawRect(x + 100, y, length, 50);
        mRankCircleContainer.addChild(rankValue);

        var valueA = new createjs.Text(value, "32px Arial", "#FFFFFF");
        valueA.x = x + 8 + 100;
        valueA.y = y + 8;
        mRankCircleContainer.addChild(valueA);


        var label = new createjs.Text(label, "24px Arial", "#000000");
        label.x = x;
        label.y = y + 8;
        mRankCircleContainer.addChild(label);        

        if(youarehere == true)
        {
            mRankCircleContainer.addChild(mMe);
            mMe.x = x + 420;
            mMe.y = y + 8;

            console.log("設定文字");
            var you = new createjs.Text("你在這裡", "16px Arial", "#000000");
            you.x = x + 320;
            you.y = y + 10;
            mRankCircleContainer.addChild(you);
        }
    }

    // function addUserName(name)
    // {
    //     mUserNameBorder = new createjs.Text(name+"の成績:", "64px Arial", "#000000"); 
    //     mUserNameBorder.x = 10;
    //     mUserNameBorder.y = 5;
    //     mUserNameBorder.outline = 12;
    //     // stage.addChild(mUserNameBorder); 

    //     mUserName = new createjs.Text(name+"の成績:", "64px Arial", "#ff7700");
    //     mUserName.x = 10;
    //     mUserName.y = 5;
    //     // stage.addChild(mUserName); 
    // }       

    function addGameResult()
    {
        mGameResultScoreBorder = new createjs.Text("", "45px Arial", "#000000");
        mGameResultScoreBorder.regX = 140;
        mGameResultScoreBorder.regY = 22;
        mGameResultScoreBorder.x = screenWidth/2;
        mGameResultScoreBorder.y = 70;
        mGameResultScoreBorder.outline = 12;
        stage.addChild(mGameResultScoreBorder);

        mGameResultScore = new createjs.Text("", "45px Arial", "#FFFFFF");
        mGameResultScore.regX = 140;
        mGameResultScore.regY = 22;
        mGameResultScore.x = screenWidth/2;
        mGameResultScore.y = 70;
        stage.addChild(mGameResultScore);  

        mGameResultScoreBorder.visible =false;
        mGameResultScore.visible =false;

        mGameResultTimeBorder = new createjs.Text("", "45px Arial", "#000000");
        mGameResultTimeBorder.regX = 140;
        mGameResultTimeBorder.regY = 22;        
        mGameResultTimeBorder.x = screenWidth/2;
        mGameResultTimeBorder.y = 180;
        mGameResultTimeBorder.outline = 12;
        stage.addChild(mGameResultTimeBorder);

        mGameResultTime = new createjs.Text("", "45px Arial", "#FFFFFF");
        mGameResultTime.regX = 140;
        mGameResultTime.regY = 22;          
        mGameResultTime.x = screenWidth/2;
        mGameResultTime.y = 180;
        stage.addChild(mGameResultTime); 

        mGameResultTimeBorder.visible =false;
        mGameResultTime.visible =false;
    }

    function createScoreObject()
    {

    }

    function addPlayersNumber()
    {
        mPlayersNumberBorder = new createjs.Text("已挑戰人次：0人", "20px Arial", "#0000FF");
        mPlayersNumberBorder.x = 10;
        mPlayersNumberBorder.y = 10;
        mPlayersNumberBorder.outline = 6;
        stage.addChild(mPlayersNumberBorder);

        mPlayersNumber = new createjs.Text("已挑戰人次：0人", "20px Arial", "#FFFFFF");
        mPlayersNumber.x = 10;
        mPlayersNumber.y = 10;
        stage.addChild(mPlayersNumber);


        // 取得遊戲人數
        // parseGetPlayersNumber();
    }

    function addCurrentPuzzle (name, result, rotation, puzzleId, container) 
    {
        var puzzle = new geogame.Puzzle(name, result, 1, puzzleId);
        puzzle.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
        container.addChild(puzzle); 
        puzzle.regX = 50;
        puzzle.regY = 40; 
        puzzle.rotation = rotation;
        puzzle.visible = false;
        mPuzzleArray.push(puzzle);
    }

    function addBlackPuzzle (name, result, rotation, puzzleId, container, radian) 
    {
        var puzzle = new geogame.Puzzle(name, result, 0, puzzleId);
        puzzle.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
        container.addChild(puzzle);
        puzzle.regX = (100*radian)/2;
        puzzle.regY = (460*radian)/2;
        puzzle.rotation = rotation;
        mBlackPuzzleArray.push(puzzle); 
        resetBlackPuzzle(puzzle);
    }

    function addNormalPuzzle (name, result, rotation, puzzleId, container, radian) 
    {
        var puzzle = new geogame.Puzzle(name, result, 0, puzzleId);
        puzzle.shadow = new createjs.Shadow("rgba(0,0,0,0.7)",8,8,10);
        container.addChild(puzzle);
        puzzle.regX = (100*radian)/2;
        puzzle.regY = (460*radian)/2;
        puzzle.rotation = rotation;
        mNormalPuzzleArray.push(puzzle); 
        puzzle.visible = false;
    }        

    function addGameTimer()
    {
        mGameTimerBorder = new createjs.Text("", "38px Arial", "#000000");
        mGameTimerBorder.x = screenWidth - 100;
        mGameTimerBorder.y = 5;
        mGameTimerBorder.outline = 8;
        mGameContainer.addChild(mGameTimerBorder);

        mGameTimer = new createjs.Text("", "38px Arial", "#FFFFFF");
        mGameTimer.x = screenWidth - 100;
        mGameTimer.y = 5;
        mGameContainer.addChild(mGameTimer); 

        mGameTimerBorder.visible = false;
        mGameTimer.visible = false;
    }

    function addGameScore()
    {
        mGameScoreBorder = new createjs.Text("0/20題", "38px Arial", "#000000"); 
        mGameScoreBorder.x = 10;
        mGameScoreBorder.y = 5;
        mGameScoreBorder.outline = 8;
        mGameContainer.addChild(mGameScoreBorder);  

        mGameScore = new createjs.Text("0/20題", "38px Arial", "#FFFFFF"); 
        mGameScore.x = 10;
        mGameScore.y = 5;
        mGameContainer.addChild(mGameScore);  

        mGameScoreBorder.visible = false;
        mGameScore.visible = false;        
    }    

    function resetBlackPuzzle(puzzle)
    {
        puzzle.scaleX = 3;
        puzzle.scaleY = 3;
        puzzle.visible = false;
    }

    function getCurrentPuzzle(puzzleId)
    {
        var i = 0;
        for(i = 0 ; i<mPuzzleArray.length; i++)
        {
            if(mPuzzleArray[i].mPuzzleId == puzzleId)
            {
                return mPuzzleArray[i];
            }      
        }
    }

    function getBlackPuzzle(puzzleId)
    {
        var i = 0;
        for(i = 0 ; i<mBlackPuzzleArray.length; i++)
        {
            if(mBlackPuzzleArray[i].mPuzzleId == puzzleId)
            {
                return mBlackPuzzleArray[i];
            }   
        }
    }

    function getNormalPuzzle(puzzleId)
    {
        // console.log("找尋拼圖:"+puzzleId);
        var i = 0;
        for(i = 0 ; i<mNormalPuzzleArray.length; i++)
        {
            // console.log("getNormalPuzzle 找尋目前拼圖:"+mNormalPuzzleArray[i].mPuzzleId);
            if(mNormalPuzzleArray[i].mPuzzleId == puzzleId)
            {
                return mNormalPuzzleArray[i];
            }            
        }
    }    

    function addBackground()
    {
        var background = new createjs.Shape();
        background.graphics.beginFill("#47a453").drawRect(0, 0, screenWidth, screenHeight);
        mapConatainer.addChild(background);
    }

    function handleFileLoad(event) 
    {
        // console.log("handleFileLoad...");            
        // 把圖示挑出來
        var id = event.item.id;
        assets.push(event);
    }  

    function formatFloat(num, pos)
    {
        var size = Math.pow(10, pos);
        return Math.round(num * size) / size;
    } 