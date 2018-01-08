function socialScoreShare() {
    let left = (screen.width / 2) - (250 / 2);
    let top = (screen.height / 2) - (450 / 2);

    caption = 'GuiGhost Graveyard Jump - Free online game';
    title = chicken.score + ' points!!!';
    description = 'I just scored ' + chicken.score + ' points on GuiGhost Graveyard JUMP. Can you beat it? #GuiGhostGames';

    window = window.open('https://www.facebook.com/dialog/share?app_id=1794229017542670&href=https://www.facebook.com/GuiGhostGames/&picture=http://guighostgames.com/Images/Homepage/logoImg-2.png&title=' + title + '&caption=' + caption + '&description=' + description + '&hashtag=#GuiGhostGames', '_blank', 'width=250, height=250, top=' + top + ', left=' + left);
}
