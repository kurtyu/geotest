
// 開始讀取圖片資源
function startLoading(){

    // 載入中畫面
    // var loadingBitmap = new createjs.Bitmap(loadingImg);
    // loadingBitmap.name = "loadingBitmap";
    // stage.addChild(loadingBitmap);  

    // PreloadJS.js
    // =================================================================
    var manifest = [
        {src:"ui/capture_button_normal.png", id:"capture_button_normal"},    
        {src:"ui/capture_button_light.png", id:"capture_button_light"},            
        {src:"ui/puzzle03.png", id:"puzzle03"},
        {src:"ui/puzzle_line_4x4.png", id:"puzzle_line_4x4"},
        {src:"ui/role.png", id:"role"},
        {src:"ui/background.png", id:"background"},
        {src:"ui/answer_gray_button.png", id:"answer_gray_button"},
        {src:"ui/answer_green_button.png", id:"answer_green_button"},         
        // {src:"UI/panel.png", id:"panel"},
        // {src:"UI/btn_spin.png", id:"btn_spin"},
        // {src:"UI/btn_spin_disable.png", id:"btn_spin_disable"},
        // {src:"UI/btn_bet.png", id:"btn_bet"},
        // {src:"UI/btn_line.png", id:"btn_line"},
        // {src:"UI/btn_lobby.png", id:"btn_lobby"},
        // {src:"UI/top_coinsbalance.png", id:"top_coinsbalance"},
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


function handleProgress(event) {
    console.log("handleProgress...");
    bar.scaleX = event.loaded * barWidth;  // event.loaded 是個百分比浮點數
    stage.update();
}


function handleComplete(event) {
    console.log("handleComplete...");  
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

    // 拼圖容器(頂層)
    topPuzzleContainer = new createjs.Container();
    stage.addChild(topPuzzleContainer); 

    // 拼圖容器(底層)
    bottomPuzzleContainer = new createjs.Container();
    stage.addChild(bottomPuzzleContainer); 
    bottomPuzzleContainer.visible = false;    

  // 目前的拼圖
    currentPuzzleContainer = new createjs.Container();
    stage.addChild(currentPuzzleContainer); 

    // 遊戲畫面
    gameContainer = new createjs.Container();
    stage.addChild(gameContainer); 
    addGeoLocationText();  
    addOrientationText();
    addGeoLocationDiffText(); 

    // 問題容器
    questonContainer = new createjs.Container();
    stage.addChild(questonContainer); 
    questonContainer.x = screenWidth/2;
    questonContainer.y = 30;
    questonContainer.visible = false;

    myPuzzleContainer = new createjs.Container();
    stage.addChild(myPuzzleContainer); 

  

    var i = 0;
    for(i=0;i<assets.length;i++) {
        var item = assets[i]; //loader.getResult(id);
        var id = item.item.id;
        var result = item.result;

        switch(id)
        {
            case "capture_button_normal":

                captureButton = new createjs.Bitmap(result);
                captureButton.x = screenWidth/2;
                captureButton.y = screenHeight - 60;
                captureButton.regX = 166/2;
                captureButton.regY = 166/2;

                var buttonHitArea = new createjs.Shape();
                // 指定點擊範圍 
                buttonHitArea.graphics.beginFill("#F00").drawRect(0,0,result.width,result.height);
                captureButton.hitArea = buttonHitArea;  
                // 更新位置
                captureButton.addEventListener("click", function(evt) 
                {
                    rubberband(captureButton); 

                    // 檢查目前角度 是否符合目前的拼圖ID
                    // dropCurrentPuzzle(++currentPuzzleId);


                    // if((topPuzzleContainer.rotation < 10) && ())      
                }); 
                // 滑鼠按下事件
                captureButton.addEventListener("mousedown", function(evt) 
                {
                    console.log("bet pressdown");
                    // rubberband(captureButton); 

                    dropCurrentPuzzle(15);

                    flipPuzzle(15);
  
                    
                });             
        
                break;
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
                backgroundBitmap = new createjs.Bitmap(result);
                backgroundBitmap.name = "background";
                mapContainer.addChild(backgroundBitmap);       
                backgroundBitmap.regX = 480/2;
                backgroundBitmap.regY = 480/2;
            break;
            case "answer_gray_button":
                // 加入問題版
                addQuestionBoard();
                // 加入答案按鈕
                aAnswerButton = new createjs.Bitmap(result);
                bAnswerButton = new createjs.Bitmap(result);
                cAnswerButton = new createjs.Bitmap(result);
                questonContainer.addChild(aAnswerButton);       
                questonContainer.addChild(bAnswerButton);       
                questonContainer.addChild(cAnswerButton); 

                aAnswerButton.x = screenWidth/2 + 75; 
                aAnswerButton.y = 365; 
                aAnswerButton.regX = 400/2;
                aAnswerButton.regY = 137/2;    
                var buttonHitArea = new createjs.Shape();
                buttonHitArea.graphics.beginFill("#F00").drawRect(0,0,result.width,result.height);
                aAnswerButton.hitArea = buttonHitArea;  
                aAnswerButton.addEventListener("click", function(evt) 
                {
                    rubberband(aAnswerButton); 
                }); 
                aAnswerButton.addEventListener("mousedown", function(evt) 
                {
                    rubberband(aAnswerButton); 
                });

                bAnswerButton.x = screenWidth/2 + 75; 
                bAnswerButton.y = 435; 
                bAnswerButton.regX = 400/2;
                bAnswerButton.regY = 137/2; 
                bAnswerButton.hitArea = buttonHitArea;  
                bAnswerButton.addEventListener("click", function(evt) 
                {
                    rubberband(bAnswerButton); 
                }); 
                bAnswerButton.addEventListener("mousedown", function(evt) 
                {
                    rubberband(bAnswerButton); 
                });

                cAnswerButton.x = screenWidth/2 + 75; 
                cAnswerButton.y = 505; 
                cAnswerButton.regX = 400/2;
                cAnswerButton.regY = 137/2;  
                cAnswerButton.hitArea = buttonHitArea;  
                cAnswerButton.addEventListener("click", function(evt) 
                {
                    rubberband(cAnswerButton); 
                }); 
                cAnswerButton.addEventListener("mousedown", function(evt) 
                {
                    rubberband(cAnswerButton); 
                });
            break; 
            case "puzzle_1_1":
                addCurrentPuzzle(id, result, 0, 1, currentPuzzleContainer);
            break;
            case "puzzle_1_2":
                addCurrentPuzzle(id, result, 0, 2, currentPuzzleContainer);
            break;
            case "puzzle_1_3":
                addCurrentPuzzle(id, result, 0, 3, currentPuzzleContainer);
            break;
            case "puzzle_1_4":
                addCurrentPuzzle(id, result, 0, 4, currentPuzzleContainer);
            break;
            case "puzzle_1_5":
                addCurrentPuzzle(id, result, 0, 5, currentPuzzleContainer);
            break;
            case "puzzle_1_6":
                addCurrentPuzzle(id, result, 0, 6, currentPuzzleContainer);
            break;
            case "puzzle_1_7":
                addCurrentPuzzle(id, result, 0, 7, currentPuzzleContainer);
            break;
            case "puzzle_1_8":
                addCurrentPuzzle(id, result, 0, 8, currentPuzzleContainer);
            break;
            case "puzzle_1_9":
                addCurrentPuzzle(id, result, 0, 9, currentPuzzleContainer);
            break;
            case "puzzle_1_10":
                addCurrentPuzzle(id, result, 0, 10, currentPuzzleContainer);
            break;
            case "puzzle_1_11":
                addCurrentPuzzle(id, result, 0, 11, currentPuzzleContainer);
            break;
            case "puzzle_1_12":
                addCurrentPuzzle(id, result, 0, 12, currentPuzzleContainer);
            break;
            case "puzzle_1_13":
                addCurrentPuzzle(id, result, 0, 13, currentPuzzleContainer);
            break;
            case "puzzle_1_14":
                addCurrentPuzzle(id, result, 0, 14, currentPuzzleContainer);
                addTopNormalPuzzle(id, result, 292.5, 14, bottomPuzzleContainer);                  
            break;
            case "puzzle_1_15":
                addCurrentPuzzle(id, result, 0, 15, currentPuzzleContainer);
                addTopNormalPuzzle(id, result, 315, 15, topPuzzleContainer);  
            break;  
            case "puzzle_1_16":
                addCurrentPuzzle(id, result, 0, 16, currentPuzzleContainer);
                addTopNormalPuzzle(id, result, 337.5, 16, bottomPuzzleContainer); 
            break;                      
            case "puzzle_1_1_black":
               // 建立目前的拼圖
                addTopBlackPuzzle(id, result, 0, 1, topPuzzleContainer);
                addTopNormalPuzzle(id, result, 0, 1, topPuzzleContainer);
            break;              
            case "puzzle_1_2_black":
                addTopBlackPuzzle(id, result, 22.5, 2, bottomPuzzleContainer);
                addTopNormalPuzzle(id, result, 22.5, 2, bottomPuzzleContainer);
            break;          
            case "puzzle_1_3_black":
                addTopBlackPuzzle(id, result, 45, 3, topPuzzleContainer);
                addTopNormalPuzzle(id, result, 45, 3, topPuzzleContainer);
            break;  
            case "puzzle_1_4_black":
                addTopBlackPuzzle(id, result, 67.5, 4, bottomPuzzleContainer); 
                addTopNormalPuzzle(id, result, 67.5, 4, bottomPuzzleContainer); 
            break;        
            case "puzzle_1_5_black":
                addTopBlackPuzzle(id, result, 90, 5, topPuzzleContainer);  
                addTopNormalPuzzle(id, result, 90, 5, topPuzzleContainer);  
            break;   
            case "puzzle_1_6_black":
                addTopBlackPuzzle(id, result, 112.5, 6, bottomPuzzleContainer);  
                addTopNormalPuzzle(id, result, 112.5, 6, bottomPuzzleContainer);
            break;  
            case "puzzle_1_7_black":
                addTopBlackPuzzle(id, result, 135, 7, topPuzzleContainer);  
                addTopNormalPuzzle(id, result, 135, 7, topPuzzleContainer);  
            break;  
            case "puzzle_1_8_black":
                addTopBlackPuzzle(id, result, 157.5, 8, bottomPuzzleContainer);
                addTopNormalPuzzle(id, result, 157.5, 8, bottomPuzzleContainer);  
            break;  
            case "puzzle_1_9_black":
                addTopBlackPuzzle(id, result, 180, 9, topPuzzleContainer);  
                addTopNormalPuzzle(id, result, 180, 9, topPuzzleContainer);  
            break;  
            case "puzzle_1_10_black":
                addTopBlackPuzzle(id, result, 202.5, 10, bottomPuzzleContainer); 
                addTopNormalPuzzle(id, result, 202.5, 10, bottomPuzzleContainer);  
            break;  
            case "puzzle_1_11_black":
                addTopBlackPuzzle(id, result, 225, 11, topPuzzleContainer);  
                addTopNormalPuzzle(id, result, 225, 11, topPuzzleContainer);  
            break;  
            case "puzzle_1_12_black":
                addTopBlackPuzzle(id, result, 247.5, 12, bottomPuzzleContainer); 
                addTopNormalPuzzle(id, result, 247.5, 12, bottomPuzzleContainer);  
            break;  
            case "puzzle_1_13_black":
                addTopBlackPuzzle(id, result, 270, 13, topPuzzleContainer);  
                addTopNormalPuzzle(id, result, 270, 13, topPuzzleContainer);  
            break;  
            case "puzzle_1_14_black":
                addTopBlackPuzzle(id, result, 292.5, 14, bottomPuzzleContainer);  
            break;  
            case "puzzle_1_15_black":
                addTopBlackPuzzle(id, result, 315, 15, topPuzzleContainer);  
            break;        
            case "puzzle_1_16_black":
                addTopBlackPuzzle(id, result, 337.5, 16, bottomPuzzleContainer);  
            break;                                                                                                                                
            case "btn_spin":
                var btnSpinBitmap = new createjs.Bitmap(result);
                btnSpinBitmap.name = "btn_spin";
                btnSpinBitmap.x = 832;
                btnSpinBitmap.y = 510;

                // 如果要用Filter 似乎一定要Cache
                btnSpinBitmap.cache(0,0,result.width,result.height);                    
                  
                var btnSpinHitArea = new createjs.Shape();
                // 左上角（X, Y）  寬度 高度(W, H)
                btnSpinHitArea.graphics.beginFill("#F00").drawEllipse(0,0,result.width,result.height);
                // btnSpinHitArea.x = result.width/2;
                // btnSpinHitArea.y = result.height/2;

                // gameContainer.addChild(hitArea);

                // 指定點擊範圍 
                btnSpinBitmap.hitArea = btnSpinHitArea;  


                // 滑鼠按下  
                btnSpinBitmap.addEventListener("mousedown", function(evt) {
                    console.log("spin mousedown");

                    // btnSpinBitmap.filters = [new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0)];

                    
                    // var matrix = new createjs.ColorMatrix().adjustBrightness(-40).adjustContrast(-40);
                    // var blurFilter = new createjs.BoxBlurFilter(20,  20, 2);
                    // btnSpinBitmap.filters = [new createjs.ColorMatrixFilter(matrix)];
                    btnSpinBitmap.updateCache();                          
                });

                btnSpinBitmap.addEventListener("click", function(evt) {
                    console.log("spin pressup");
                    // 顯示SPIN不可按
                    gameContainer.getChildAt(INDEX.btn_spin_disable).visible = true;
                    slotMachine.startRoll(this, rollComplete);

                    // var matrix = new createjs.ColorMatrix().adjustBrightness(0).adjustContrast(0);
                    // var blurFilter = new createjs.BoxBlurFilter(20,  20, 2);
                    // btnSpinBitmap.filters = [new createjs.ColorMatrixFilter(matrix)];
                    btnSpinBitmap.updateCache();                            
                });


                // TweenLite.to(spinBitmap, 1, {delay: 1, x:100, y:100, ease:Cubic.easeInOut});

            break;
            case "btn_line":
                var btnLineBitmap = new createjs.Bitmap(result);
                btnLineBitmap.name = "btn_line";
                btnLineBitmap.x = 132;
                btnLineBitmap.y = 510;  

                
                // btnLineBitmap.cache(0,0,result.width,result.height);                    
                var btnLineHitArea = new createjs.Shape();
                // 左上角（X, Y）  寬度 高度(W, H)
                btnLineHitArea.graphics.beginFill("#F00").drawRect(0,0,result.width,result.height);
                // btnLineHitArea.x = result.width/2;
                // btnLineHitArea.y = result.height/2;

                // gameContainer.addChild(hitArea);

                // 指定點擊範圍 
                btnLineBitmap.hitArea = btnLineHitArea;   

                // 滑鼠按下  
                btnLineBitmap.addEventListener("mousedown", function(evt) {
                    console.log("line mousedown");

                    // btnSpinBitmap.filters = [new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0)];

                    // var matrix = new createjs.ColorMatrix().adjustBrightness(-40).adjustContrast(-40);
                    // var blurFilter = new createjs.BoxBlurFilter(20,  20, 2);
                    // btnLineBitmap.filters = [new createjs.ColorMatrixFilter(matrix)];
                    // btnLineBitmap.updateCache();                          
                });

                btnLineBitmap.addEventListener("click", function(evt) {
                    console.log("line pressup");

                    // var matrix = new createjs.ColorMatrix().adjustBrightness(0).adjustContrast(0);
                    // var blurFilter = new createjs.BoxBlurFilter(20,  20, 2);
                    // btnLineBitmap.filters = [new createjs.ColorMatrixFilter(matrix)];
                    // btnLineBitmap.updateCache();

                    // 切換下注單位
                    g_nPayLines++;
                    if(g_nPayLines == 25)
                        g_nPayLines = 0;

                    var btnLineText = gameContainer.getChildAt(INDEX.btn_line_text);
                    btnLineText.text = g_nPayLines+1;
                    if(g_nPayLines>8){
                        btnLineText.x = 180;
                    }else{
                        btnLineText.x = 190;
                    }


                    // 計算總下注金額
                    calcTotalBetMoney();
                });                
            break;  
            case "btn_lobby":
                var btnLobbyBitmap = new createjs.Bitmap(result);
                btnLobbyBitmap.name = "btn_lobby";
                btnLobbyBitmap.x = 860;
                btnLobbyBitmap.y = 8;  

                var btnLobbyHitArea = new createjs.Shape();
                // 左上角（X, Y）  寬度 高度(W, H)
                btnLobbyHitArea.graphics.beginFill("#F00").drawRect(0,0,result.width,result.height);
                btnLobbyBitmap.hitArea = btnLobbyHitArea;   

                // 滑鼠按下  
                btnLobbyBitmap.addEventListener("mousedown", function(evt) {
                    console.log("lobby mousedown");   
                    // gameContainer.getChildAt(INDEX.payline_config_lines25).visible = false;
                });

                btnLobbyBitmap.addEventListener("click", function(evt) {
                    console.log("lobby pressup");
                    var lines = gameContainer.getChildAt(INDEX.payline_config_lines25);
                    if(lines.visible){
                        lines.visible = false;
                    }else{
                        lines.visible = true;
                    }
                });             
            break;
         
            case "line1-hd": 
               var line1Bitmap  = new createjs.Bitmap(result); 
               line1Bitmap.name = "line1-hd";
                break;                                         
        }

    }

    
   

    // 等於橘子園的座標
        mapContainer.x = (screenWidth)/2;
        mapContainer.y = (screenHeight)/2 - 20;

        topPuzzleContainer.x = (screenWidth)/2; 
        topPuzzleContainer.y = (screenHeight)/2 - 20;
        topPuzzleContainer.scaleX = 1.1;
        topPuzzleContainer.scaleY = 1.1;        

        // bottomPuzzleContainer.x = (screenWidth)/2; 
        // bottomPuzzleContainer.y = (screenHeight)/2 - 20;
        // bottomPuzzleContainer.scaleX = 0.7;
        // bottomPuzzleContainer.scaleY = 0.7;


        currentPuzzleContainer.x = (screenWidth)/2; 
        currentPuzzleContainer.y = (screenHeight)/2 - 20;        

        gameContainer.addChild(role);

        addUserName(username);

        gameContainer.addChild(captureButton);

        resize();
    }

    function flipPuzzle(puzzleId)
    {
        var normalPuzzle = getTopNormalPuzzle(puzzleId);
        normalPuzzle.visible = true;
        var blackPuzzle = getTopBlackPuzzle(puzzleId);
        blackPuzzle.visible = false;

        popup(normalPuzzle);
    }

    function addCurrentPuzzle (name, result, rotation, puzzleId, container) 
    {
        var puzzle = new geogame.Puzzle(name, result, 1, puzzleId);
        container.addChild(puzzle); 
        puzzle.regX = 50;
        puzzle.regY = 40; 
        puzzle.rotation = rotation;
        puzzle.visible = false;
        puzzleArray.push(puzzle); 

        console.log("puzzle = "+ puzzle.mType);
    }

    function addTopBlackPuzzle (name, result, rotation, puzzleId, container) 
    {
        var puzzle = new geogame.Puzzle(name, result, 0, puzzleId);
        container.addChild(puzzle);
        puzzle.regX = 100/2;
        puzzle.regY = 460/2;
        puzzle.rotation = rotation;
        topBlackPuzzleArray.push(puzzle); 
    }

    function addTopNormalPuzzle (name, result, rotation, puzzleId, container) 
    {
        var puzzle = new geogame.Puzzle(name, result, 0, puzzleId);
        container.addChild(puzzle);
        puzzle.regX = 100/2;
        puzzle.regY = 460/2;
        puzzle.rotation = rotation;
        topNormalPuzzleArray.push(puzzle); 
        puzzle.visible = false;
    }    

    function getCurrentPuzzle(puzzleId)
    {
        var i = 0;
        for(i = 0 ; i<puzzleArray.length; i++)
        {
            if(puzzleArray[i].mPuzzleId == puzzleId)
            {
                return puzzleArray[i];
            }      
        }
    }

    function getTopBlackPuzzle(puzzleId)
    {
        var i = 0;
        for(i = 0 ; i<topBlackPuzzleArray.length; i++)
        {
            if(topBlackPuzzleArray[i].mPuzzleId == puzzleId)
            {
                return topBlackPuzzleArray[i];
            }   
        }
    }

    function getTopNormalPuzzle(puzzleId)
    {
        console.log("找尋拼圖:"+puzzleId);
        var i = 0;
        for(i = 0 ; i<topNormalPuzzleArray.length; i++)
        {
            console.log("getTopNormalPuzzle 找尋目前拼圖:"+topNormalPuzzleArray[i].mPuzzleId);
            if(topNormalPuzzleArray[i].mPuzzleId == puzzleId)
            {
                return topNormalPuzzleArray[i];
            }            
        }
    }    


    function addUserName(name)
    {
        var roleUsername = new createjs.Text(name, "14px Arial", "#ff7700");
        roleUsername.x = 10;
        roleUsername.y = 10;
        gameContainer.addChild(roleUsername); 
    }

    function addBackground()
    {
        var background = new createjs.Shape();
        background.graphics.beginFill("#47a453").drawRect(0, 0, screenWidth, screenHeight);
        mapConatainer.addChild(background);
    }

    function addGeoLocationText()
    {
        geoLocationText = new createjs.Text("位置", "14px Arial", "#ff7700");
        geoLocationText.x = 10;
        geoLocationText.y = 10;
        gameContainer.addChild(geoLocationText);  
    }

    function addOrientationText()
    {
        orientationText = new createjs.Text("方位", "14px Arial", "#ff7700");
        orientationText.x = 10;
        orientationText.y = 24;
        gameContainer.addChild(orientationText);  
    }

    function addGeoLocationDiffText()
    {
        geoLocationDiffText = new createjs.Text("精準度", "14px Arial", "#ff7700");
        geoLocationDiffText.x = 10;
        geoLocationDiffText.y = 38;
        gameContainer.addChild(geoLocationDiffText);  
    }

    function addQuestionBoard()
    {
        questionBoard = new createjs.Shape();
        questionBoard.graphics.beginFill("white").drawRect(100, 10, screenWidth - 50, 300);
        questonContainer.addChild(questionBoard);

        questionText = new createjs.Text("我有一個問題？我有一個問題？我有一個問題？\n我有一個問題？", "18px Arial", "#ff7700");
        questionText.x = 120;
        questionText.y = 60;

        questonContainer.addChild(questionText); 
        questonContainer.regX = screenWidth/2;
        questonContainer.regX = screenHeight/2;

        popup(questonContainer);
    }



    function setupCurrentPuzzle(puzzleId)
    {
        switch(puzzleId)
        {
            case 1:
            break;
            case 2:
            break;
            case 3:
            break;
            case 4:
            break;
            case 5:
            break;
            case 6:
            break;
            case 7:
            break;
            case 8:
            break;
            case 9:
            break;
            case 10:
            break;
            case 11:
            break;
            case 12:
            break;
            case 13:
            break;
            case 14:
            break;
            case 15:
            break;
            case 16:
            break;
        }
    }   


    // 計算總下注金額
    function calcTotalBetMoney(){
        var totalBetText = gameContainer.getChildAt(INDEX.total_bet_text);
        var bet = 0;
        switch(g_nBet){
            case 0: bet = "0.1"; break;
            case 1: bet = "0.2"; break;
            case 2: bet = "0.5"; break;
            case 3: bet = "1.0"; break;
            case 4: bet = "2.0"; break;
            case 5: bet = "5.0"; break;
            case 6: bet = "10.0"; break;
        }

        var totalValue = Math.round(((g_nPayLines + 1) * bet) * 10)/10;

        if(totalValue >= 100){
            totalBetText.x = 528; 
        }else if(totalValue >= 10){
            totalBetText.x = 543; 
        }else{
            totalBetText.x = 558; 
        }
        var total =  "$"+totalValue;

        // var totalString = new String(total);
        // var str = "$1.1";
        console.log("search:"+total.indexOf(".", 0));
        if(total.indexOf(".", 0) == -1){
            totalBetText.text = total+".0";
        }else{
            totalBetText.text = total;
        }
        
    }

    function handleFileLoad(event) 
    {
        console.log("handleFileLoad...");            
        // 把圖示挑出來
        var id = event.item.id;
        assets.push(event);

    }  