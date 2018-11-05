var isOther=function(sub,output,total,salestax,i,j,cb){
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
    cb(output,i,j,total,salestax)
}

module.exports=isOther