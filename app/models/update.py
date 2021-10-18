from .db import db

class Update(db.Model):
  __tablename__ = 'updates'
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(100), nullable=False)
  description = db.Column(db.Text, nullable=False)

  # Foreign Keys
  project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  # Relationships
  project = db.relationship('Project', back_populates='updates')
  user = db.relationship('User', back_populates='updates')

  def to_dict(self):
    return {
      'id': self.id,
      'title': self.title,
      'description': self.description,
      'project_id': self.project_id,
      'user_id': self.user_id,
      'username': self.user.username,
    }
