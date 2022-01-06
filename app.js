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
    
