function billcalculate(bill){
    var form=document.getElementById("bill");
var x=form.im.value;
var y;
var z;
var t;
var u;
y=(x/22.5)*12.5;
y=y/6;
u=2*y;
form.gf.value=u;
form.kt.value=y;
z=(x/22.5)*10;
z=z/2;
form.tt.value=z;
t=y+z;
form.tm.value=t;
   
}