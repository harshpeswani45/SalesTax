 
  var fs=require('fs')
  var s=require('./inputread.js')
  var isBook=require('./isBook.js')
  var isMusic=require('./isMusic.js')
  var isChoclate=require('./isChoclate.js')
  var isOther=require('./isOther.js')

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
      count++
    }
    

    var sub=s.substring(i,j)
    isBook(sub,output,total,i,j,function(result,newi,newj,newtotal){
      output=result
      i=newi
      j=newj
      total=newtotal
    })
    isMusic(sub,output,total,salestax,i,j,function(result,newi,newj,newtotal,newsalestax){
      output=result
      i=newi
      j=newj
      total=newtotal
      salestax=newsalestax
    })
    isChoclate(sub,output,total,salestax,i,j,function(result,newi,newj,newtotal,newsalestax){
      output=result
      i=newi
      j=newj
      total=newtotal
      salestax=newsalestax
    })
    isOther(sub,output,total,salestax,i,j,function(result,newi,newj,newtotal,newsalestax){
      output=result
      i=newi
      j=newj
      total=newtotal
      salestax=newsalestax
    })
    i=j+1;
    j=s.indexOf('\n',j+1)
  }while(i<last)
  output+="\n\n\nSales Tax="+salestax
  output+="\nTotal :"+total
  module.exports=output