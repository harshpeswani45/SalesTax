var isBook=function(sub,output,total,i,j,cb){
  if(sub.indexOf('book')!=-1)
    {
      output+=sub.substring(0,sub.indexOf('at')-1)
      total+=sub.substring(sub.indexOf('t')+2,j)*1
      output+=" : "+sub.substring(sub.indexOf('t')+2,j)+"\n"
      //console.log(output)
      cb(output,i,j,total)        
    } 
}

module.exports=isBook