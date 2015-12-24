
// 開始讀取圖片資源
function startLoading(){

    // 載入中畫面
    // var loadingBitmap = new createjs.Bitmap(loadingImg);
    // loadingBitmap.name = "loadingBitmap";
    // stage.addChild(loadingBitmap);  

    // PreloadJS.js
    // =================================================================
    var manifest = [
        {src:"ui/button.png", id:"button"},
        // {src:"UI/lobby_bg.jpg", id:"lobby_bg"},
        // {src:"UI/title.png", id:"title"},
        // {src:"UI/panel.png", id:"panel"},
        // {src:"UI/btn_spin.png", id:"btn_spin"},
        // {src:"UI/btn_spin_disable.png", id:"btn_spin_disable"},
        // {src:"UI/btn_bet.png", id:"btn_bet"},
        // {src:"UI/btn_line.png", id:"btn_line"},
        // {src:"UI/btn_lobby.png", id:"btn_lobby"},
        // {src:"UI/top_coinsbalance.png", id:"top_coinsbalance"},
        // {src:"UI/line_number/1_on-hd.png", id:"1_on-hd"},
        // {src:"UI/line_number/2_on-hd.png", id:"2_on-hd"},
        // {src:"UI/line_number/3_on-hd.png", id:"3_on-hd"},
        // {src:"UI/line_number/4_on-hd.png", id:"4_on-hd"},
        // {src:"UI/line_number/5_on-hd.png", id:"5_on-hd"},
        // {src:"UI/line_number/6_on-hd.png", id:"6_on-hd"},
        // {src:"UI/line_number/7_on-hd.png", id:"7_on-hd"},
        // {src:"UI/line_number/8_on-hd.png", id:"8_on-hd"},
        // {src:"UI/line_number/9_on-hd.png", id:"9_on-hd"},
        // {src:"UI/line_number/10_on-hd.png", id:"10_on-hd"},
        // {src:"UI/line_number/11_on-hd.png", id:"11_on-hd"},
        // {src:"UI/line_number/12_on-hd.png", id:"12_on-hd"},
        // {src:"UI/line_number/13_on-hd.png", id:"13_on-hd"},
        // {src:"UI/line_number/14_on-hd.png", id:"14_on-hd"},
        // {src:"UI/line_number/15_on-hd.png", id:"15_on-hd"},
        // {src:"UI/line_number/16_on-hd.png", id:"16_on-hd"},
        // {src:"UI/line_number/17_on-hd.png", id:"17_on-hd"},
        // {src:"UI/line_number/18_on-hd.png", id:"18_on-hd"},
        // {src:"UI/line_number/19_on-hd.png", id:"19_on-hd"},
        // {src:"UI/line_number/20_on-hd.png", id:"20_on-hd"},
        // {src:"UI/line_number/21_on-hd.png", id:"21_on-hd"},
        // {src:"UI/line_number/22_on-hd.png", id:"22_on-hd"},
        // {src:"UI/line_number/23_on-hd.png", id:"23_on-hd"},
        // {src:"UI/line_number/24_on-hd.png", id:"24_on-hd"},
        // {src:"UI/line_number/25_on-hd.png", id:"25_on-hd"},            
        // {src:"UI/line_number/1_off-hd.png", id:"1_off-hd"},
        // {src:"UI/line_number/2_off-hd.png", id:"2_off-hd"},
        // {src:"UI/line_number/3_off-hd.png", id:"3_off-hd"},
        // {src:"UI/line_number/4_off-hd.png", id:"4_off-hd"},
        // {src:"UI/line_number/5_off-hd.png", id:"5_off-hd"},
        // {src:"UI/line_number/6_off-hd.png", id:"6_off-hd"},
        // {src:"UI/line_number/7_off-hd.png", id:"7_off-hd"},
        // {src:"UI/line_number/8_off-hd.png", id:"8_off-hd"},
        // {src:"UI/line_number/9_off-hd.png", id:"9_off-hd"},
        // {src:"UI/line_number/10_off-hd.png", id:"10_off-hd"},
        // {src:"UI/line_number/11_off-hd.png", id:"11_off-hd"},
        // {src:"UI/line_number/12_off-hd.png", id:"12_off-hd"},
        // {src:"UI/line_number/13_off-hd.png", id:"13_off-hd"},
        // {src:"UI/line_number/14_off-hd.png", id:"14_off-hd"},
        // {src:"UI/line_number/15_off-hd.png", id:"15_off-hd"},
        // {src:"UI/line_number/16_off-hd.png", id:"16_off-hd"},
        // {src:"UI/line_number/17_off-hd.png", id:"17_off-hd"},
        // {src:"UI/line_number/18_off-hd.png", id:"18_off-hd"},
        // {src:"UI/line_number/19_off-hd.png", id:"19_off-hd"},
        // {src:"UI/line_number/20_off-hd.png", id:"20_off-hd"},
        // {src:"UI/line_number/21_off-hd.png", id:"21_off-hd"},
        // {src:"UI/line_number/22_off-hd.png", id:"22_off-hd"},
        // {src:"UI/line_number/23_off-hd.png", id:"23_off-hd"},
        // {src:"UI/line_number/24_off-hd.png", id:"24_off-hd"},
        // {src:"UI/line_number/25_off-hd.png", id:"25_off-hd"},
        // {src:"UI/line_number/lock.png", id:"lock"},
        // {src:"UI/lines/line1-hd.png", id:"line1-hd"}, 
        // {src:"UI/lines/line2-hd.png", id:"line2-hd"}, 
        // {src:"UI/lines/line3-hd.png", id:"line3-hd"}, 
        // {src:"UI/lines/line4-hd.png", id:"line4-hd"}, 
        // {src:"UI/lines/line5-hd.png", id:"line5-hd"}, 
        // {src:"UI/lines/line6-hd.png", id:"line6-hd"}, 
        // {src:"UI/lines/line7-hd.png", id:"line7-hd"}, 
        // {src:"UI/lines/line8-hd.png", id:"line8-hd"}, 
        // {src:"UI/lines/line9-hd.png", id:"line9-hd"}, 
        // {src:"UI/lines/line10-hd.png", id:"line10-hd"},
        // {src:"UI/lines/line11-hd.png", id:"line11-hd"}, 
        // {src:"UI/lines/line12-hd.png", id:"line12-hd"}, 
        // {src:"UI/lines/line13-hd.png", id:"line13-hd"}, 
        // {src:"UI/lines/line14-hd.png", id:"line14-hd"}, 
        // {src:"UI/lines/line15-hd.png", id:"line15-hd"}, 
        // {src:"UI/lines/line16-hd.png", id:"line16-hd"}, 
        // {src:"UI/lines/line17-hd.png", id:"line17-hd"}, 
        // {src:"UI/lines/line18-hd.png", id:"line18-hd"}, 
        // {src:"UI/lines/line19-hd.png", id:"line19-hd"}, 
        // {src:"UI/lines/line20-hd.png", id:"line20-hd"},
        // {src:"UI/lines/line21-hd.png", id:"line21-hd"}, 
        // {src:"UI/lines/line22-hd.png", id:"line22-hd"}, 
        // {src:"UI/lines/line23-hd.png", id:"line23-hd"}, 
        // {src:"UI/lines/line24-hd.png", id:"line24-hd"}, 
        // {src:"UI/lines/line25-hd.png", id:"line25-hd"},  
        // {src:"theme/1/bg.jpg", id:"bg"},
        // {src:"theme/1/reel.png", id:"reel"},
        // {src:"theme/1/1.png", id:"1"},
        // {src:"theme/1/2.png", id:"2"},
        // {src:"theme/1/3.png", id:"3"},  
        // {src:"theme/1/4.png", id:"4"},  
        // {src:"theme/1/5.png", id:"5"},  
        // {src:"theme/1/6.png", id:"6"},  
        // {src:"theme/1/7.png", id:"7"},  
        // {src:"theme/1/8.png", id:"8"},  
        // {src:"theme/1/9.png", id:"9"},
        // {src:"theme/1/10.png", id:"10"},
        // {src:"theme/1/11.png", id:"11"},  
        // {src:"theme/1/12.png", id:"12"}
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

    // 遊戲畫面
    gameContainer = new createjs.Container();
    stage.addChild(gameContainer);            

    var i = 0;
    for(i=0;i<assets.length;i++) {
        var item = assets[i]; //loader.getResult(id);
        var id = item.item.id;
        var result = item.result;

        switch(id)
        {
            case "button":

                var data = 
                {
                    images: ["assets/ui/button.png"],
                    frames: {width:180, height:122},
                    animations: {normal:[0], over:[1], clicked:[2]}
                };
                var spriteSheet = new createjs.SpriteSheet(data);
                var button = new createjs.Sprite(spriteSheet);
                var helper = new createjs.ButtonHelper(button, "normal", "over", "clicked");

                button.name = "button";
                button.x = 100;
                button.y = 100;
                button.gotoAndStop("normal");
                
                button.cache(0,0,result.width,result.height);                    
                var buttonHitArea = new createjs.Shape();
                // 指定點擊範圍 
                buttonHitArea.graphics.beginFill("#F00").drawRect(0,0,result.width,result.height);
                button.hitArea = buttonHitArea;   
                // 滑鼠按下事件
                button.addEventListener("mousedown", function(evt) {
                    console.log("bet mousedown");
                    button.updateCache();                          
                });
                button.addEventListener("click", function(evt) {
                    console.log("bet pressup");
                    button.gotoAndStop("normal");
                    button.updateCache();  
                });

            case "lobby_bg":
                var lobbyBgBmp = new createjs.Bitmap(result);
                lobbyBgBmp.name = "lobby_bg";              
            break;
            case "bg":
                var bgBmp = new createjs.Bitmap(result);
                bgBmp.name = "bg";
            break;
            case "reel":
                var reelBmp = new createjs.Bitmap(result);
                reelBmp.name = "reel";
                reelBmp.x = (960-result.width)/2;
                reelBmp.y = (628-result.height)/2;
            break;
            case "title":
                var titleBmp = new createjs.Bitmap(result);
                titleBmp.name = "title";
            break;
            case "panel":
                var panelBmp = new createjs.Bitmap(result);
                panelBmp.name = "panel";    
                panelBmp.y = 628-result.height;                       
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
            case "btn_spin_disable":
                var btnSpinDisableBitmap = new createjs.Bitmap(result);
                btnSpinDisableBitmap.name = "btn_spin_disable";
                btnSpinDisableBitmap.x = 832;
                btnSpinDisableBitmap.y = 510;  
                btnSpinDisableBitmap.visible = false;                         
            break;
            case "btn_bet":
                var btnBetBitmap = new createjs.Bitmap(result);
                btnBetBitmap.name = "btn_bet";
                btnBetBitmap.x = 272;
                btnBetBitmap.y = 512;  

                
                btnBetBitmap.cache(0,0,result.width,result.height);                    
                var btnBetHitArea = new createjs.Shape();
                // 左上角（X, Y）  寬度 高度(W, H)
                btnBetHitArea.graphics.beginFill("#F00").drawRect(0,0,result.width,result.height);
                // btnBetHitArea.x = result.width/2;
                // btnBetHitArea.y = result.height/2;

                // gameContainer.addChild(hitArea);

                // 指定點擊範圍 
                btnBetBitmap.hitArea = btnBetHitArea;   

                // 滑鼠按下  
                btnBetBitmap.addEventListener("mousedown", function(evt) {
                    console.log("bet mousedown");

                    // btnSpinBitmap.filters = [new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0)];

                    // var matrix = new createjs.ColorMatrix().adjustBrightness(-40).adjustContrast(-40);
                    // var blurFilter = new createjs.BoxBlurFilter(20,  20, 2);
                    // btnBetBitmap.filters = [new createjs.ColorMatrixFilter(matrix)];
                    btnBetBitmap.updateCache();                          
                });

                btnBetBitmap.addEventListener("click", function(evt) {
                    console.log("bet pressup");

                    // var matrix = new createjs.ColorMatrix().adjustBrightness(0).adjustContrast(0);
                    // var blurFilter = new createjs.BoxBlurFilter(20,  20, 2);
                    // btnBetBitmap.filters = [new createjs.ColorMatrixFilter(matrix)];
                    btnBetBitmap.updateCache();

                    // 切換下注單位
                    g_nBet++;
                    if(g_nBet == 7)
                        g_nBet = 0;

                    var btnBetText = gameContainer.getChildAt(INDEX.btn_bet_text);
                    switch(g_nBet){
                        case 0: btnBetText.text = "$0.1"; break;
                        case 1: btnBetText.text = "$0.2"; break;
                        case 2: btnBetText.text = "$0.5"; break;
                        case 3: btnBetText.text = "$1.0"; break;
                        case 4: btnBetText.text = "$2.0"; break;
                        case 5: btnBetText.text = "$5.0"; break;
                        case 6: btnBetText.text = "$10.0"; break;
                    }
                    if(g_nBet==6){
                        btnBetText.x = 306;
                    }else{
                        btnBetText.x = 316;
                    }   


                    // 計算總下注金額
                    calcTotalBetMoney();

                });                
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
            case "top_coinsbalance":
                var topCoinsBalanceBitmap = new createjs.Bitmap(result);
                topCoinsBalanceBitmap.name = "top_coinsbalance-hd";
                topCoinsBalanceBitmap.x = 4;
                topCoinsBalanceBitmap.y = 4;
            break;
            case "1_on-hd":
                var On1Bitmap = new createjs.Bitmap(result);
                On1Bitmap.name = "1_on-hd";
                // On1Bitmap.x = 0;
                // On1Bitmap.y = 314;  
            break;
            case "2_on-hd":
                var On2Bitmap = new createjs.Bitmap(result);
                On2Bitmap.name = "4_on-hd";
                break;             
            case "3_on-hd":
                var On3Bitmap = new createjs.Bitmap(result);
                On3Bitmap.name = "3_on-hd";
                break;               
            case "4_on-hd":
                var On4Bitmap = new createjs.Bitmap(result);
                On4Bitmap.name = "4_on-hd";
                break;            
            case "5_on-hd":
                var On5Bitmap = new createjs.Bitmap(result);
                On5Bitmap.name = "5_on-hd";
                break;               
            case "6_on-hd":
                var On6Bitmap = new createjs.Bitmap(result);
                On6Bitmap.name = "6_on-hd";
                break;              
            case "7_on-hd":
                var On7Bitmap = new createjs.Bitmap(result);
                On7Bitmap.name = "7_on-hd";
                break;                  
            case "8_on-hd":
                var On8Bitmap = new createjs.Bitmap(result);
                On8Bitmap.name = "8_on-hd";
                break;                
            case "9_on-hd":
            case "10_on-hd":
                var On10Bitmap = new createjs.Bitmap(result);
                On10Bitmap.name = "10_on-hd";
                break;                
            case "11_on-hd":
                var On11Bitmap = new createjs.Bitmap(result);
                On11Bitmap.name = "11_on-hd";
                break;               
            case "12_on-hd":
            case "13_on-hd":
            case "14_on-hd":
            case "15_on-hd":
            case "16_on-hd":
            case "17_on-hd":
            case "18_on-hd":
            case "19_on-hd":
            case "20_on-hd":
            case "21_on-hd":
            case "22_on-hd":
            case "23_on-hd":
            case "24_on-hd":
            case "25_on-hd":
            case "1_off-hd":
                var Off1Bitmap = new createjs.Bitmap(result);
                Off1Bitmap.name = "1_on-hd";
                // Off1Bitmap.x = 0;
                // Off1Bitmap.y = 274;  
                break;            
            case "2_off-hd":
                var Off2Bitmap = new createjs.Bitmap(result);
                Off2Bitmap.name = "2_off-hd";
                break;             
            case "3_off-hd":
                var Off3Bitmap = new createjs.Bitmap(result);
                Off3Bitmap.name = "3_off-hd";
                break;                 
            case "4_off-hd":
                var Off4Bitmap = new createjs.Bitmap(result);
                Off4Bitmap.name = "4_off-hd";
                break;            
            case "5_off-hd":
                var Off5Bitmap = new createjs.Bitmap(result);
                Off5Bitmap.name = "5_off-hd";
                break;              
            case "6_off-hd":
                var Off6Bitmap = new createjs.Bitmap(result);
                Off6Bitmap.name = "6_off-hd";
                break;              
            case "7_off-hd":
                var Off7Bitmap = new createjs.Bitmap(result);
                Off7Bitmap.name = "7_off-hd";        
                break;                     
            case "8_off-hd":
                var Off8Bitmap = new createjs.Bitmap(result);
                Off8Bitmap.name = "8_off-hd";        
                break;              
            case "9_off-hd":
            case "10_off-hd":
                var Off10Bitmap = new createjs.Bitmap(result);
                Off10Bitmap.name = "10_off-hd";
                // Off10Bitmap.x = 0;
                // Off10Bitmap.y = 246;  
                break;            
            case "11_off-hd":
                var Off11Bitmap = new createjs.Bitmap(result);
                Off11Bitmap.name = "11_off-hd";
                // Off11Bitmap.x = 0;
                // Off11Bitmap.y = 302;  
                break;            
            case "12_off-hd":
            case "13_off-hd":
            case "14_off-hd":
            case "15_off-hd":
            case "16_off-hd":
            case "17_off-hd":
            case "18_off-hd":
            case "19_off-hd":
            case "20_off-hd":
            case "21_off-hd":
            case "22_off-hd":
            case "23_off-hd":
            case "24_off-hd":
            case "25_off-hd": 
            case "lock":
               var lockBitmap  = new createjs.Bitmap(result); 
                break;
            case "line1-hd": 
               var line1Bitmap  = new createjs.Bitmap(result); 
               line1Bitmap.name = "line1-hd";
                break;      
            case "line2-hd": 
               var line2Bitmap  = new createjs.Bitmap(result); 
               line2Bitmap.name = "line2-hd";
                break;   
            case "line3-hd": 
               var line3Bitmap  = new createjs.Bitmap(result); 
               line3Bitmap.name = "line3-hd";
                break;   
            case "line4-hd": 
               var line4Bitmap  = new createjs.Bitmap(result); 
               line4Bitmap.name = "line4-hd";
                break;                                  
            case "line5-hd": 
               var line5Bitmap  = new createjs.Bitmap(result); 
               line5Bitmap.name = "line5-hd";
                break;                                 
            case "line6-hd": 
               var line6Bitmap  = new createjs.Bitmap(result); 
               line6Bitmap.name = "line6-hd";
                break;   
            case "line7-hd": 
               var line7Bitmap  = new createjs.Bitmap(result); 
               line7Bitmap.name = "line7-hd";
                break;  
           case "line8-hd": 
               var line8Bitmap  = new createjs.Bitmap(result); 
               line8Bitmap.name = "line8-hd";
                break;                                 
            case "line10-hd": 
               var line10Bitmap  = new createjs.Bitmap(result); 
               line10Bitmap.name = "line10-hd";
                break;    
            case "line11-hd": 
               var line11Bitmap  = new createjs.Bitmap(result); 
               line11Bitmap.name = "line11-hd";
                break;                                    

        }

    }

    gameContainer.addChild(button);

    addGeoLocationText();  


    // createjs.Ticker.addListener(this);
    resize();
}



    function addGeoLocationText()
    {
        textGeoLocation = new createjs.Text("Hello World", "20px Arial", "#ff7700");
        textGeoLocation.x = 10;
        textGeoLocation.y = 10;
        gameContainer.addChild(textGeoLocation);  
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

function handleFileLoad(event) {
    // console.log("handleFileLoad...");            
    // 把圖示挑出來
    var id = event.item.id;
    switch(id){
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
        case "12":
            iconAssets.push(event);
            break;
        default:
            assets.push(event);
            break;
    }       
}  