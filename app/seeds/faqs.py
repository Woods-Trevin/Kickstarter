from app.models import db, Faq

def seed_faqs():
  new_york_faq = Faq(
    question='Why is NY so dirty?',
    answer='So many people live in NY',
    project_id = 1,
    user_id = 1)
  new_york_faq2 = Faq(
    question='Why should we clean NY?',
    answer='If we don\'t clean NY all the dirt will eventually leak to your state next!!!',
    project_id = 1,
    user_id = 1)

  db.session.add(new_york_faq)
  db.session.add(new_york_faq2)

  db.session.commit()

def undo_faqs():
    db.session.execute('TRUNCATE faqs RESTART IDENTITY CASCADE;')
    db.session.commit()
