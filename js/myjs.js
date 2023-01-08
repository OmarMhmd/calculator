var y=null;
var op=null;
var op1=null;
var index2=0;
element1=document.getElementById("frm");
function operation(index2,textValue,operationValue,operationType)
{
       
    if(operationValue==null)
    {
        element1[0].value=element1[0].value;
    }
    else
    {
    textValue=parseFloat(textValue);
    operationValue=parseFloat(operationValue)
    if(operationType=="+")
    {            
    element1[0].value=operationValue+textValue;
    }
    else if(operationType=="×") 
    {
        element1[0].value=operationValue*textValue;
    }
    else if(operationType=="%")
    {
        element1[0].value=operationValue%textValue;
    }
    else if(operationType=="-")
    {
        element1[0].value=operationValue-textValue;
    }
    else if(operationType=="÷")
    {
        element1[0].value=operationValue/textValue;
    }
}
    document.getElementsByTagName("button")[index2].classList.remove("pressed"); 
    op1=null;
    y=null;
}
function zeroText()
{
    element1[0].value=0;
}
function implement(value,index=0)
{
    // document.getElementsByTagName("button")[index].classList.add("pressed");
    if(value=="C")
    {
        // zeroText();
        console.log("yeeessss");
        element1[0].value=0;
        op=null;
        y=null;
        console.log(index2);
        document.querySelectorAll("button").classList.remove("pressed");
    }
    else if((value>="0")&&(value<="9"))
    {
         if((element1[0].value.indexOf("."))!=-1)
        {
            if(op!=null)
            {
            y=element1[0].value;            
            element1[0].value=value;            
            op=null;
            }
            else
            {
                element1[0].value+=value;
            }
        }
        else if(element1[0].value==0)
        {
            element1[0].value=value;
        }
        else
        {  
            if(op!=null)
            {
            y=element1[0].value; 
            element1[0].value=value;
            op=null;
            }
            else
            {
                element1[0].value+=value;
            }
        }
    }
    else if(value=="DEL")
    {
            if(element1[0].value.length==1)
            {
                zeroText();
            }
            else{
                element1[0].value=element1[0].value.substring(0,element1[0].value.length-1);
            }
    }
    else if((value=="+")||(value=="×")||(value=="%")||(value=="-")||(value=="÷"))
    {
        if((op1!=null)&&(y!=null))
        {
            operation(index2,element1[0].value,y,op1);
        }
        document.getElementsByTagName("button")[index].classList.add("pressed");
        document.getElementsByTagName("button")[index2].classList.remove("pressed");
        index2=index;
        op=value;
        op1=value;
    }
    else if(value=="=")
    {
        operation(index2,element1[0].value,y,op1);
    }
    else if(value==".")
    {
        if(element1[0].value.indexOf(".")==-1)
        {
            element1[0].value+=value;
        }
    }
    else
    {
    element1[0].value+=value;
    }
    return false;
}