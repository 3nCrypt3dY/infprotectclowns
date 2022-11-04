function inviteBot() {
    window.location.href = "https://discord.com/oauth2/authorize?client_id=964504741222678579&permissions=8&scope=bot";
}

function technicalSupport() {
    window.location.href = "https://discord.gg/KjJzsCskpq";
}

var fadeDuration = 300;

$(document).ready(() => {
    $("body").fadeIn(fadeDuration);

    $(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto']):not([target^='_blank'])", function(e) {
        e.preventDefault();
        $("body").fadeOut(fadeDuration);
        setTimeout(() => {
            window.location.href = $(this).attr("href");
        }, fadeDuration);
    });
})