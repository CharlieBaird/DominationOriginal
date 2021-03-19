chmod u+x /ws/CB/ScoreGame/ScoreGamePush.command

cd /Users/Sweetbridge/ws/CB/ScoreGame

heroku login

git init
heroku git:remote -a dominatetheworld
git add .
git commit -m "message"
git push heroku master