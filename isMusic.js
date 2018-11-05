var isMusic=function(sub,output,total,salestax,i,j,cb){
  if(sub.indexOf('music')!=-1)  
    {
      output+=sub.substring(0,sub.indexOf('at')-1)
      var price
     
      salestax+=0.1*sub.substring(sub.indexOf('t')+2,j)
      var price=sub.substring(sub.indexOf('t')+2,j)*1+Math.round(0.1*sub.substring(sub.indexOf('t')+2,j)*10)/10
      total+=price
      output+=" : "+price+"\n"
      //console.log(output)
      cb(output,i,j,total,salestax)    
    } 
}

module.exports=isMusic