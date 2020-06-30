function color()
{
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff', '#ffff00', '#ff00ff'];

    var random_color = colors[Math.floor(Math.random() * colors.length)];

    if (random_color == '#00ff00' || random_color == '#00ffff' || random_color == '#ffff00')
        document.documentElement.style.setProperty('--fg', '#000000');

    document.documentElement.style.setProperty('--bg', random_color);
}