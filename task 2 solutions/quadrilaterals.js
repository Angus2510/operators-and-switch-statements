
//input for all information to see what type of quadrilateral it is
let corner1 = Number(prompt("please insert value for corner1"));
let corner2 = Number(prompt("please insert value for corner2"));
let corner3 = Number(prompt("please insert value for corner3"));
let corner4 = Number(prompt("please insert value for corner4"));

// numbers for the sides of the quadrilateral
let side1 = Number(prompt("please enter value for side1"));
let side2 = Number(prompt("please enter value for side2"));
let side3 = Number(prompt("please enter value for side3"));
let side4 = Number(prompt("please enter value for side4"));

//statements to shorten the input for the code
let allcorners90 = (corner1===corner2&&corner2===corner3&& corner3===corner4)
let allsides = (side1===side2&&side2===side3 && side3===side4)
let sides2 = ( side1===side3 && side2===side4)
let oppositecorners = ( corner1=== corner3 && corner3 < 90 && corner2===corner4 && corner4 > 90)
//statements to determine what type of quadrilateral they are
 if(allcorners90 && allsides){
    alert ("the quadrilateral is a square")
 }
else if (allcorners90 && sides2){
    alert("the quadrilateral is a rectangle")
}
else if ( allsides && oppositecorners){
    alert(" the quadrilateral is a rhombus")
}   
// inputs for the paralelogram
else if(sides2 && oppositecorners){
    alert("the quadrilateral is a paralellogram")
}
 
 
 
 
 
 
