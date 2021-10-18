from app.models import db, Comment

def seed_comments():
  comments = []
  comments.append(Comment(description="Simply amazing", project_id=1, user_id=1))
  comments.append(Comment(description="nice work", project_id=1, user_id=1))
  comments.append(Comment(description="What a wonderful idea", project_id=2, user_id=2))
  comments.append(Comment(description="wack", project_id=3, user_id=3))


  for comment in comments:
    db.session.add(comment)

  db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
