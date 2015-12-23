// namespace:
this.slotgame = this.slotgame||{};

(function() {

    // 建構式 
    var SlotMachine = function () {
        this.initialize();
    };
    var p = SlotMachine.prototype = new createjs.Container(); 

    // 滾輪
    p.mSlotRolls = [];

    // 完成轉動計數器
    p.mCompeletCount = 0;

    p.mStartRolling;

    p.completeTarget = null;

    // public properties:
    // SlotIcon.prototype.IDLEWAITTIME = 40;

    // 建構式（constructor）
    // 保留原型的initialize
    p.Container_initialize = SlotMachine.prototype.initialize; //unique to avoid overiding base class

    p.initialize = function () {
    	this.Container_initialize();
    };

    p.rollCompleteHandler = function(obj) {
        console.log("[COMPLETE] %d", obj.mCompeletCount);

        obj.mCompeletCount++;
        if(obj.mCompeletCount === obj.mSlotRolls.length)
        {

            obj.completeTarget.rollComplete();

            console.log("[END]");
            // if( typeof(obj.mSlotRolls) == "undefined"){
                // console.log("undefined");
            // }
            // console.log("[COMPLETE] %d", this.mSlotRolls.length);
            // 由左而右檢查連線

            obj.mStartRolling = false;
        }
    }

    p.addRoll = function(roll){
        console.log("[CHECK1]");
        if( typeof(this.mSlotRolls) == "undefined"){
            console.log("undefined");
        }

        this.mSlotRolls.push(roll);
        this.addChild(roll);
    }

    p.startRoll = function(target, handler){

        if(this.mStartRolling){
            return;
        }

        this.completeTarget = target;

        this.mStartRolling = true;
        this.mCompeletCount = 0;
        // 時間差漸漸轉動
        for(i =0; i<5; i++){
            this.mSlotRolls[i].resetRoll();
            this.mSlotRolls[i].startRoll(i*0.1, this, this.rollCompleteHandler);
        }
    }

slotgame.SlotMachine = SlotMachine;
}());