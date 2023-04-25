var count=0
document.querySelector("#cnts").innerHTML=count
document.querySelector("#inc").addEventListener("click",increase)
document.querySelector("#dec").addEventListener("click",decrease)
document.querySelector("#res").addEventListener("click",reset)


function increase()
{
    count++;
    document.querySelector("#cnts").innerHTML=count

}

function decrease()
{
    count--;
    if(count<=0)
    {
        document.querySelector("#cnts").innerHTML="0"
    }
    else
    {
        document.querySelector("#cnts").innerHTML=count
    }
    

}

function reset()
{
    count=0
    document.querySelector("#cnts").innerHTML=count
}