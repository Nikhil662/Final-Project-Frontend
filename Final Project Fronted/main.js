function showData()
{
    event.preventDefault();
    var country=document.getElementById("first").value;
    var startdate=document.getElementById("sec").value;
    var enddate=document.getElementById("third").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");

    console.log(sec);

    if(country=='' || startdate=='' || enddate=='')
    alert("You cannot submit the empty form");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+startdate+"T00:00:00Z&to="+enddate+"T00:00:00Z";

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            var length=res.length;
            var index=length-1;

            var c=res[index].Confirmed;
            var a=res[index].Active;
            var d=res[index].Deaths;

            confirmed.innerHTML=c;
            active.innerHTML=a;
            deaths.innerHTML=d;

            document.getElementById("res").style.display="block";
            
        })
    }
}