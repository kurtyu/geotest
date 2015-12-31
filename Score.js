
// namespace:
this.geogame = this.geogame||{};

(function() {

    // 建構式 
    var Score = function (text, font, color) 
    {
        this.initialize(text, font, color);
    }

    var p = createjs.extend(Score, createjs.Text);

    // 成員屬性（variable members）

    // 建構式（constructor）
    // 保留原型的initialize
    p.Text_initialize = Score.prototype.initialize; //unique to avoid overiding base class


    p.initialize = function (text, font, color) 
    {
    	this.Text_initialize(text, font, color);      
    }

geogame.Score = Score;
}());




