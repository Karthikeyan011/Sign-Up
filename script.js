function vali()
{
   
    const email=document.querySelector(".mail").value;
    const pass=document.querySelector(".pass").value;
    const emailChech=email.includes("@gmail.com");
    let uc=0;
    let sc=0;
    let dig=0;
    for(let ch of pass)
    {
        if(Number.isInteger(Number(ch)))
        {
            dig++;
        }
        else if(ch==='@'||ch==='$'||ch==='#')
        {
            sc++;
        }
        else if(ch===ch.toUpperCase())
        {
            uc++;
        }
    }
    if((uc>0&&sc>0)&&(dig>0&&emailChech))
    {
        alert("Valid email");
    }
    else
    {
        alert("Invalid email");
    }

}