var isChoclate=function(sub,output,total,salestax,i,j,cb){
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
      cb(output,i,j,total,salestax)
    }
}

module.exports=isChoclate