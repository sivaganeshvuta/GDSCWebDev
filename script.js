function themetoggle()
{
    let curr_stylesheet = document.getElementById("dark");
    if(curr_stylesheet.href.match("style.css"))
    {
        curr_stylesheet.href = "samplestyle.css";
    }
    else
    {
        curr_stylesheet.href = "style.css";
    }
}