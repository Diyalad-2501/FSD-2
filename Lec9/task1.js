// Write a NodeJS code to create a folder named tempReports and inside it,
//create a file called daily.txt containing the initial text "Report Start". 
// Then, it should add three entries to the file: "Entry 1: Success", "Entry 2: Warning", and "Entry 3: Success".
//After writing, the program must read the file and count how many times the word "Success" appears. 
// If the word "Success" appears three or more times, the program should delete the tempReports folder.
//Ensure all file operations are asynchronous

fs = require('fs')

fs.mkdir('tempReports' , (err)=>{
    if(err) throw err
    console.log('Directory name succcessfully')
    fs.writeFile('tempReports/daily.txt' , "Report Start",  (err)=>{
        if(err) throw err
        console.log('Write file')
        fs.appendFile('tempReports/daily.txt' ,"\nEntry 1: Success \nEntry 2: Warning  \nEntry 3: Success" , (err)=>{
            if(err) throw err
            console.log('Append file')
            fs.readFile('tempReports/daily.txt' , 'utf-8', (err , data)=>{
                if(err) throw err
                count = data.split('Success').length
                console.log(count)
                if((count-1)>2){
                    fs.unlink('tempReports/daily.txt',(err)=>{
                        if(err) throw err
                        fs.rmdir('tempReports' ,(err)=>{
                            if(err) throw err
                            console.log('Folder deleted')
                         })
                    })
                    
                }
            })
        })
    })
})

