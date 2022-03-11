var elements = [555,588,299,566,455,877,522,299,555,299,588];

elements.sort();
var current = null;
var count = 0;

for(var i = 0; i < elements.length; i++)
{
    if(elements[i] != current)
  {
    if(count > 0)
    {
        document.write(current + " " + count + "<br/>");
    }
    current = elements[i];
    count = 1;
  }
  else
  {
    count++;
  }
}

if(count > 0)

    document.write(current + " " + count);
    

Algorithm
/* ----Breadth-first search 
   function printObj(obj) {
        console.log(obj)
        if( 'children' in obj){
            for (subObj of obj.children) {
                printObj(subObj)
            }
        }
    }
    printObj(parsedData)-----*/


/*--------count matching number the number
var countsbarcode95 = data.map(d => d.barcode95)
.reduce((total,num) => { total[num[0/1]] = (total[num[0/1]] || 0) + 1; return total}, {} )
var barcode95Data = Object.entries(countsbarcode95).map(([k,v]) => { return {"barcode95":k, "Value": v}})

//another way to count matching number the number
var hetroCount = data.map(d=>d.barcode95).filter(s=>s.match("0/1")).length
var homoCount = data.map(d=>d.barcode95).filter(s=>s.match("1/1")).length
var newcount={Genotype:["Hetro","Homo"],Counts:[hetroCount,homoCount]}


--------*/






