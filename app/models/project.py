from .db import db
from datetime import datetime, timedelta
now = datetime.now()
year = timedelta(days=365)

class Project(db.Model):
  __tablename__ = 'projects'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(100), nullable=False, default='')
  description = db.Column(db.String(200), nullable=False, default='')
  campaign = db.Column(db.Text, nullable=False, default="default")
  video_src = db.Column(db.String(100), default='')
  image_src = db.Column(db.String(100), default='')
  pledge_goal = db.Column(db.Float, nullable=False, default=1000)
  current_funding = db.Column(db.Float, nullable=False, default=0)
  start_date = db.Column(db.DateTime, nullable=False, default=now.strftime("%c"))
  end_date = db.Column(db.DateTime, nullable=False, default=(now + year).strftime("%c"))
  risks = db.Column(db.Text, nullable=False, default='')

  # Foreign Keys
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  tag_id = db.Column(db.Integer, db.ForeignKey('tags.id'))

  # Relationships
  user = db.relationship('User', back_populates='projects')
  comments = db.relationship('Comment', back_populates='project')
  updates = db.relationship('Update', back_populates='project')
  faqs = db.relationship('Faq', back_populates='project')
  tag = db.relationship('Tag', back_populates='projects')

  def to_dict(self):
    return {
      'id' : self.id,
      'user_id' : self.user_id,
      'username': self.user.username,
      'title': self.title,
      'description': self.description,
      'campaign': self.campaign,
      'video_src': self.video_src,
      'image_src': self.image_src,
      'pledge_goal' : self.pledge_goal,
      'current_funding': self.current_funding,
      'start_date' : self.start_date,
      'end_date' : self.end_date,
      'risks' : self.risks,
      'comments': [comment.to_dict() for comment in self.comments],
      'updates': [update.to_dict() for update in self.updates],
      'faqs': [faq.to_dict() for faq in self.faqs],
      'tag': self.tag.title,
      'tag_id': self.tag_id
    }
