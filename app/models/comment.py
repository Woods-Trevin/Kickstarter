from .db import db

class Comment(db.Model):
  __tablename__  = 'comments'

  id = db.Column(db.Integer, primary_key=True)
  description = db.Column(db.Text, nullable=False)

  # Foreign Keys
  project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  # Relationships
  project = db.relationship('Project', back_populates='comments')

  user = db.relationship('User', back_populates='comments')

  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'project_id': self.project_id,
      'description': self.description,
      'username': self.user.username,
    }
