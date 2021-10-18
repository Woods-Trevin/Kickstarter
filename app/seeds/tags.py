from app.models import db, Tag

def seed_tags():
  Environment = Tag(title='Environment')
  Food = Tag(title='Food')
  Music = Tag(title='Music')
  Games = Tag(title="Games")
  Art = Tag(title="Art")
  Comics = Tag(title="Comics & Illustrations")
  Fashion = Tag(title="Fashion")
  Technology = Tag(title="Technology")
  Film = Tag(title="Film")


  db.session.add(Environment)
  db.session.add(Food)
  db.session.add(Music)
  db.session.add(Games)
  db.session.add(Art)
  db.session.add(Comics)
  db.session.add(Fashion)
  db.session.add(Technology)
  db.session.add(Film)

  db.session.commit()

def undo_tags():
    db.session.execute('TRUNCATE tags RESTART IDENTITY CASCADE;')
    db.session.commit()
