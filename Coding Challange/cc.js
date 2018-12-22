 
        
            var mm, jm, mh, jh, bmi_mark, bmi_john, checker;
            
            alert('Hey');
            mm=prompt('Whats the mass of Mark?');
            mh=prompt('Whats the height of Mark?');
            jm=prompt('Whats the mass of John?');
            jh=prompt('Whats the height of John?');
            bmi_mark=mm/(mh*mh);//mult and div has same prec and left to right...so using brackets....** is power.
            bmi_john=jm/(jh*jh);
            
            checker=bmi_john<bmi_mark;

            alert('BMI of JOHN is '+bmi_john+' & BMI of Mark is '+bmi_mark+ 'BMI of John is less than the BMI of Mark '+checker);
                   
                   
            
            
            
        
        
