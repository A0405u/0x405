function color()
{
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff', '#ffff00', '#ff00ff'];

    var random_color = colors[Math.floor(Math.random() * colors.length)];

    if (random_color == '#00ff00' || random_color == '#00ffff' || random_color == '#ffff00') // Если светлый фон
    {
        document.documentElement.style.setProperty('--fg', '#000000');
        document.documentElement.style.setProperty('--dark', '#000000');
        document.documentElement.style.setProperty('--light', random_color);
    }
    else
    {
        document.documentElement.style.setProperty('--dark', random_color);
    }

    document.documentElement.style.setProperty('--bg', random_color);

}

function moon()
{
    date = new Date();

    moon = SunCalc.getMoonIllumination(date);

    moon.fraction = 0.1
    
    if(moon.phase < 0.25) // новая луна -> первая четверть
    {
        document.getElementById("moonhalf").children[0].setAttribute("x", "60pt");
        document.getElementById("moonphase").setAttribute("rx", parseInt(Math.round(18 * (0.5 - moon.fraction))) * 5  + "pt");
        document.getElementById("moonphase").style.setProperty('fill', "var(--dark)");
    }
    else if(moon.phase < 0.5) // первая четверть -> полная луна
    {
        document.getElementById("moonhalf").children[0].setAttribute("x", "60pt");
        document.getElementById("moonphase").setAttribute("rx", parseInt(Math.round(18 * (moon.fraction - 0.5))) * 5  + "pt");
        document.getElementById("moonphase").style.setProperty('fill', "var(--light)");
    }
    else if(moon.phase < 0.75) // первая четверть -> полная луна
    {
        document.getElementById("moonhalf").children[0].setAttribute("x", "0pt");
        document.getElementById("moonphase").setAttribute("rx", parseInt(Math.round(18 * (moon.fraction - 0.5))) * 5  + "pt");
        document.getElementById("moonphase").style.setProperty('fill', "var(--light)");
    }
    else if(moon.phase < 1) // первая четверть -> полная луна
    {
        document.getElementById("moonhalf").children[0].setAttribute("x", "0pt");
        document.getElementById("moonphase").setAttribute("rx", parseInt(Math.round(18 * (0.5 - moon.fraction))) * 5  + "pt");
        document.getElementById("moonphase").style.setProperty('fill', "var(--dark)");
    }

//    SunCalc.getMoonPosition(date, ip.latitude, ip.longitude)
}

function init()
{
    fetch('https://json.geoiplookup.io/api?callback=?')
        .then(response => response.json())
        .then(data => console.log(data));

    color();
    moon();
}