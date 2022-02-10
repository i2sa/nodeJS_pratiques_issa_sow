const {readFileSync,writeFileSync,readFile,writeFile}=require('fs')
// const issa=readFileSync('text.txt','utf-8')
// const issa3=writeFileSync('issa.text',' j\'ai  maitrise les modules natives avec de l\'experience',{flag:'a'})
const issa=readFile('issa.text','utf-8',(err,res)=>{
    if(err){
        console.log(err)
        return
    }
    if(res){   console.log(res)
    return res}
 

})
const issa2=writeFile('text.txt','je suis experimente en module nodeJS os,path,fs, je continue sur http',(err,res2)=>{
    if(err){
        console.log(err)
        return 
    }
    if(res2){
          console.log(res2)
          return
    }
  readFile('text.txt','utf-8',(err,res3)=>{
      if(err){
          console.log(err)
          return
      }
      console.log(res3)
  })
})
console.log(issa)
console.log(issa2)
