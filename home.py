from flask import Flask
import json

app = Flask(__name__)
f =  open("templates/games.json")
games = json.load(f)
@app.route("/")
def homepage():
  return (games)



if __name__ == "__main__":
  app.run(debug=True)
