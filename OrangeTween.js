
// 橡皮筋
function rubberband(object, handleComplete, parameter1)
{
    object.scaleX = 1.3;
    object.scaleY = 1.3;      
    object.visible = true;
    object.alpha = 1.0;
    if(handleComplete == null)
    {
        createjs.Tween.get(object) 
        .to({scaleX: 1.0, scaleY: 1.0}, 640, createjs.Ease.bounceOut);
    }
    else
    {
        createjs.Tween.get(object) 
        .to({scaleX: 1.0, scaleY: 1.0}, 640, createjs.Ease.bounceOut)
        .call(handleComplete, [parameter1], this);
    }
}

function hideObject(object, handleComplete)
{
    object.visible = true;
    object.alpha = 1.0;
    if(handleComplete == null)
    {
        createjs.Tween.get(object) 
            .to({scaleX: 1.5, scaleY: 1.5}, 100, createjs.Ease.linear)
            .to({scaleX: 0.0, scaleY: 0.0}, 300, createjs.Ease.linear)
            .to({visible: false}); 
    }
    else
    {    
        createjs.Tween.get(object) 
            .to({scaleX: 1.5, scaleY: 1.5}, 100, createjs.Ease.linear)
            .to({scaleX: 0.0, scaleY: 0.0}, 300, createjs.Ease.linear)
            .call(handleComplete)
            .to({visible: false}); 
    }
}


function disappearObject(object, handleComplete, parameter1, parameter2)
{
    object.visible = true;
    object.alpha = 1.0;
    if(handleComplete == null)
    {
        createjs.Tween.get(object) 
            .to({alpha: 0.0}, 600, createjs.Ease.linear)
            .to({visible: false}); 
    }
    else
    {    
        createjs.Tween.get(object) 
            .to({alpha: 0.0}, 600, createjs.Ease.linear)
            .to({visible: false})
            .call(handleComplete, [parameter1, parameter2], this); 
    } 
}

function appearObject(object, handleComplete, result)
{
    object.visible = true;
    object.alpha = 0.0;
    if(handleComplete == null)
    {
        createjs.Tween.get(object) 
            .to({alpha: 1.0}, 600, createjs.Ease.linear); 
    }
    else
    {    
        createjs.Tween.get(object) 
            .to({alpha: 1.0}, 600, createjs.Ease.linear)
            .call(handleComplete, [result], this); 
    } 
}

function fadeInAndOutObject(object, handleComplete)
{
    object.visible = true;
    object.alpha = 0.0;
    if(handleComplete == null)
    {
        createjs.Tween.get(object) 
            .to({alpha: 1.0, scaleX:1.2, scaleY:1.2}, 1200, createjs.Ease.linear); 
    }
    else
    {    
        createjs.Tween.get(object) 
            .to({alpha: 1.0, scaleX:1.2, scaleY:1.2}, 1200, createjs.Ease.linear)
            .call(handleComplete); 
    } 
}

// 彈出物體
function popupObject(object, handleComplete)
{
    object.scaleX = 0.5;
    object.scaleY = 0.5;    
    object.visible = true;
    object.alpha = 1.0;
    if(handleComplete == null)
    {
        createjs.Tween.get(object) 
        .to({scaleX: 1.0, scaleY: 1.0}, 640, createjs.Ease.bounceOut);
    }
    else
    {
        createjs.Tween.get(object) 
        .to({scaleX: 1.0, scaleY: 1.0}, 640, createjs.Ease.bounceOut)
        .call(handleComplete);
    }
 
}

// 丟入物體
function dropObject(object, delay, handleComplete)
{
    object.visible = false;
    object.scaleX = 3.0;
    object.scaleY = 3.0;
    object.alpha = 1.0;
    if(handleComplete == null)
    {
        createjs.Tween.get(object) 
                .wait(delay)
                .to({visible: true})
                .to({scaleX: 1, scaleY: 1}, 800, createjs.Ease.bounceOut); 
    }
    else
    {
        createjs.Tween.get(object) 
                .wait(delay)
                .to({visible: true})
                .to({scaleX: 1, scaleY: 1}, 800, createjs.Ease.bounceOut)
                .call(handleComplete); 
    }
}

function dropObjectThenHide(object, delay, handleComplete)
{
    object.visible = false;
    object.scaleX = 3.0;
    object.scaleY = 3.0;
    object.alpha = 1.0;
    console.log("檢查："+handleComplete);
    if(handleComplete == null)
    {
        createjs.Tween.get(object) 
                .wait(delay)
                .to({visible: true})
                .to({scaleX: 1, scaleY: 1}, 800, createjs.Ease.bounceOut); 
    }
    else
    {
        createjs.Tween.get(object) 
                .wait(delay)
                .to({visible: true})
                .to({scaleX: 1, scaleY: 1}, 800, createjs.Ease.bounceOut)
                .to({scaleX: 0, scaleY: 0}, 800, createjs.Ease.linear)
                .call(handleComplete); 
    }
}

function dropDownObject(object, delay, handleComplete, result)
{
    object.y = -500;
    object.scaleX = 1.0;
    object.scaleY = 1.0;
    object.visible = true;
    object.alpha = 1.0;
    if(handleComplete == null)
    {
        createjs.Tween.get(object) 
                .to({y: 50}, 1000, createjs.Ease.bounceOut); 
    }
    else
    {
        createjs.Tween.get(object) 
                .to({y: 50}, 1000, createjs.Ease.bounceOut)
                .wait(delay)
                .call(handleComplete, [result], this); 
    }
}

function dropUpObject(object, handleComplete)
{
    object.y = screenHeight + 500;
    object.scaleX = 1.0;
    object.scaleY = 1.0;
    object.visible = true;
    object.alpha = 1.0;
    createjs.Tween.get(object) 
            .to({y: screenHeight - 80}, 1000, createjs.Ease.bounceIn)
            .call(handleComplete); 
}

function zoomInObject(object, delay, scale, handleComplete, parameter1)
{
    object.visible = true;    
    object.scaleX = 1.0;
    object.scaleY = 1.0;
    object.alpha = 1.0;    
    if(handleComplete == null)
    {
        createjs.Tween.get(object) 
                .wait(delay)
                .to({scaleX: scale, scaleY:scale, alpha:0.0}, 1000, createjs.Ease.linear)
                .to({visible: false});
    }
    else
    {
        createjs.Tween.get(object) 
                .wait(delay)
                .to({scaleX: scale, scaleY:scale, alpha:0.0}, 1000, createjs.Ease.linear)
                .to({visible: false})
                .call(handleComplete, [parameter1], this);
    }
}
