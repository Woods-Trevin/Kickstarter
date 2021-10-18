from app.models import db, Update

def seed_updates():
  new_york_update = Update(
    title='More than 50% clean!',
    description='We are making great progress cleaning up NY!',
    project_id = 1,
    user_id = 1)
  new_york_update2 = Update(
    title='Sorry we lost some progress :(',
    description='My late uncle let a stink one rip... sorry guys',
    project_id = 1,
    user_id = 1)

  db.session.add(new_york_update)
  db.session.add(new_york_update2)

  db.session.commit()

def undo_updates():
    db.session.execute('TRUNCATE updates RESTART IDENTITY CASCADE;')
    db.session.commit()
