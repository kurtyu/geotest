
// namespace:
this.geogame = this.geogame||{};

(function() {

    // 建構式 
    var Puzzle = function (iconName, iconImg, type, id) {
        this.initialize(iconName, iconImg, type, id);
    };
    var p = Puzzle.prototype = new createjs.Bitmap(); 

    // 成員屬性（variable members）
    this.mType = 0;
    this.mPuzzleId = 0;

    // public properties:
    // SlotIcon.prototype.IDLEWAITTIME = 40;

    // 建構式（constructor）
    // 保留原型的initialize
    p.Bitmap_initialize = Puzzle.prototype.initialize; //unique to avoid overiding base class

    p.initialize = function (iconName, iconImg, type, puzzleId) {
        // if (typeof iconImg == "string") {
            // console.log("[IMAGE]");
        // }else{
            // console.log("[NOT IMAGE]");
        // }
        // console.log("this.width = %d  this.height = %d", iconImg.width, iconImg.height);  


    	this.Bitmap_initialize(iconImg);
        this.name = iconName;
        this.mType = type;
        this.mPuzzleId = puzzleId;
    };

    p.getType = function(){
        return mType;
    }    

    p.getName = function(){
        return this.name;
    }

    p.getImage = function(){
        return this.image;
    }

    p.getPuzzleId = function(){
        return mPuzzleId;
    }

geogame.Puzzle = Puzzle;
}());




