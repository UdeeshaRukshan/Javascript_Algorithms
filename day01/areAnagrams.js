const areAnagrams=(text,text2)=>{
    
        const text1convert=text.split('').sort()
        const text2convert=text2.split('').sort()
        console.log(text1convert+"----"+text2convert)

        if (text1convert.join('')===text2convert.join('')){
            console.log("True")
    
        }else{
            console.log("False")    
        
    }
    
    
    
    
}

areAnagrams('listen','silent') 