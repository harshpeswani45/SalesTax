 
  var fs=require('fs')
  var s=require('./inputread.js')
  var output=""
  var o=s.indexOf('Input')
  var i=0,j=0 
  i=s.indexOf('\n',j+1)
  j=s.indexOf('\n',i+1)
  var salestax=0
  var last=s.lastIndexOf('\n')
  var count=1
  var total=0
  
  do
  {
    
    if(o<=i && count <=3)
    {
      if(count!=1)
      {
        output+="\n\n\nSales Tax="+salestax
        output+="\nTotal :"+total
      }
      salestax=0
      total=0
      output+="\n\nOutput :"+s[o+6]+"\n\n"
      o=s.indexOf('Input',o+1)
      //console.log(o)
      //console.log(output)
      count++
    }
    

    var sub=s.substring(i,j)
    if(sub.indexOf('book')!=-1)
    {
      output+=sub.substring(0,sub.indexOf('at')-1)
      total+=sub.substring(sub.indexOf('t')+2,j)*1
      output+=" : "+sub.substring(sub.indexOf('t')+2,j)+"\n"
      //console.log(output)
        
    } 
    if(sub.indexOf('music')!=-1)  
    {
      output+=sub.substring(0,sub.indexOf('at')-1)
      var price
     
      salestax+=0.1*sub.substring(sub.indexOf('t')+2,j)
      var price=sub.substring(sub.indexOf('t')+2,j)*1+Math.round(0.1*sub.substring(sub.indexOf('t')+2,j)*10)/10
      total+=price
      output+=" : "+price+"\n"
      //console.log(output)
    } 

    if(sub.indexOf('chocolate')!=-1)  
    {
      if(sub.indexOf('imported')==-1)
      {
        output+=sub.substring(0,sub.indexOf('at',10)-1)
        var price
        var price=sub.substring(sub.indexOf('t',10)+2,j)*1
        total+=price
        output+=" : "+price+"\n"
        //console.log(output)
                     
      }
      else
      {
        output+=sub.substring(0,sub.indexOf('at',26)-1)
        var price
        var price=sub.substring(sub.indexOf('t',26)+2,j)*1+Math.round(0.05*sub.substring(sub.indexOf('t',26)+2,j)*10)/10
        total+=price
        output+=" : "+price+"\n"
        //console.log(output)
      }
    }
    if(sub.indexOf('perfume')!=-1)
    {
        if(sub.indexOf('imported')==-1)
        {
          output+=sub.substring(0,sub.indexOf('at')-1)
          var price
          salestax+=0.1*sub.substring(sub.indexOf('at')+3,j)
          var price=sub.substring(sub.indexOf('at')+3,j)*1+Math.round(0.1*sub.substring(sub.indexOf('at')+3,j)*10)/10
          total+=price
          output+=" : "+price+"\n"

        }
        else
        {
            output+=sub.substring(0,sub.indexOf('at')-1)
            var price
            salestax+=0.1*sub.substring(sub.indexOf('at')+3,j)
            //console.log(sub.substring(sub.indexOf('at')+3,j))
            var price=sub.substring(sub.indexOf('at')+3,j)*1+Math.round(0.1*sub.substring(sub.indexOf('at')+3,j)*10)/10+0.05*sub.substring(sub.indexOf('at')+3,j)
            total+=price
            output+=" : "+price+"\n"
            
        }
    }
    if(sub.indexOf('pills')!=-1)  
    {
      if(sub.indexOf('imported')==-1)
      {
        output+=sub.substring(0,sub.indexOf('at')-1)
        var price
        var price=sub.substring(sub.indexOf('at')+3,j)*1
        total+=price
        output+=" : "+price+"\n"
        //console.log(output)
        //break;
      }
      
    }
    i=j+1;
    j=s.indexOf('\n',j+1)
    
     

  }while(i<last)
  output+="\n\n\nSales Tax="+salestax
  output+="\nTotal :"+total
  module.exports=output