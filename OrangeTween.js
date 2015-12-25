

function rubberband(obj)
{
    var tween = createjs.Tween.get(obj) 
    .to({scaleX: 1.2, scaleY: 1.2}, 120, createjs.Ease.bounceOut)
    .to({scaleX: 0.8, scaleY: 0.8}, 80, createjs.Ease.bounceOut)
    .to({scaleX: 1.1, scaleY: 1.1}, 120, createjs.Ease.bounceOut)
    .to({scaleX: 0.9, scaleY: 0.9}, 80, createjs.Ease.bounceOut)
    .to({scaleX: 1.0, scaleY: 1.0}, 80, createjs.Ease.bounceOut); 
}

function popup(obj)
{
    var tween = createjs.Tween.get(obj) 
    .to({scaleX: 0.1, scaleY: 0.1}, 0, createjs.Ease.bounceOut)
    .to({scaleX: 1.0, scaleY: 1.0}, 80, createjs.Ease.bounceOut)
    .to({scaleX: 0.9, scaleY: 1.1}, 120, createjs.Ease.bounceOut)
    .to({scaleX: 1.0, scaleY: 1.0}, 80, createjs.Ease.bounceOut); 
}