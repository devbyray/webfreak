var movesApi = require('moves-api').MovesApi;
var moves = new movesApi({
    "clientId": "hJV8FqRh3U633ODXstjG9rHBUy8o4roY",
    "clientSecret": "010XIS5KAJd8SBi6EZe3K7oLd2flq3iKavHnI4kfOO51qEl3oltztLQB0ks75Ohh",
    "redirectUri": "RedirectUri",
    "accessToken": "",
    "refreshToken" : "",
});

// Redirect your user to this url
var url = moves.generateAuthUrl();

moves.getAccessToken(code_from_redirect, function(err, authData) {
    moves.options.accessToken = authData.access_token;

    moves.getProfile(function(err, profile) {
        console.log(profile);
    });
});